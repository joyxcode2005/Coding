import express from "express";
import cors from "cors";
import morgan from "morgan";
import getScoreGemini from "./service.js";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import { languageMap } from "./constants.js";
import axios from "axios";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));


// "/score" endpoint to generate the score for the code using gemini AI API
app.post("/score", async (req, res) => {
  const { solution } = req.body;

  if (!solution) {
    res.send({ status: "error", message: "No code provided" });
  }

  const response = await getScoreGemini(solution);

  if (response) {
    res.send({ status: "success", message: response });
  } else {
    res.send({ status: "error", message: "Failed to get score" });
  }
});

// "/test" endpoint to validate the user code by running the test cases using judge0 API

app.post("/test", async (req, res) => {
  const { solution, language, difficulty } = req.body;

  
  const langId = languageMap[language];

  if (!langId) return res.status(400).json({ error: "Unsupported language" });

  const ext = language === "python" ? "py" : language === "c" ? "c" : "java";
  const testFilePath = path.join(
    __dirname,
    "testcases",
    language,
    `${difficulty}.${ext}`
  );

  if (!fs.existsSync(testFilePath)) {
    return res.status(400).json({ error: "Test case not found" });
  }

  const testCaseCode = fs.readFileSync(testFilePath, "utf-8");

  // Combine solution + test case (make sure testCaseCode calls the solution code)
  const combinedCode = `${solution}\n\n${testCaseCode}`;

  console.log("Combined Code:", combinedCode);


  try {
    const response = await axios.post(
      "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true?base64_encoded=false",
      {
        source_code: combinedCode,
        language_id: langId,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
          "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
        },
      }
    );

    const { stdout, stderr, status } = response.data;

    if (
      status.description === "Accepted" &&
      stdout.includes("ALL_TESTS_PASSED")
    ) {
      return res.json({ result: "correct code", output: stdout, error: stderr });
    } else {
      return res.json({
        result: "incorrect code",
        output: stdout,
        error: stderr,
      });
    }
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: "Execution error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import express from "express";
import cors from "cors";
import morgan from "morgan";
import getScoreGemini from "./service.js";
import path from "path";
import { fileURLToPath } from 'url';
import fs from 'fs';
import { exec } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.post("/score", async (req, res) => {
  const { solution} = req.body;


  if (!solution) {
    res.send({ status: "error", message: "No code provided" });
  }

  const response = await getScoreGemini(solution);

  if (response) {
    // const lines = response.split('\n');
    // const tableData = lines.map((line, index) => ({ line: index + 1, content: line }));
    // res.send({ status: "success", message: { tableData } });
    res.send({ status: "success", message: response });
  } else {
    res.send({ status: "error", message: "Failed to get score" });
  }
});

app.post("/test", (req, res) => {
  const { solution, difficulty, language } = req.body;

  const langDir = path.join(__dirname, "testcases", language);
  const testFile = path.join(
    langDir,
    `${difficulty}.${language === "python" ? "py" : language === "C" ? "c" : "java"}`
  );

  if (!fs.existsSync(testFile)) {
    return res.status(400).json({ error: "Invalid difficulty or language" });
  }

  // Write the submitted solution to a temp file
  const solutionPath = path.join(langDir, "solution.py");
  fs.writeFileSync(solutionPath, solution);

  // Run the test file
  exec(`python3 "${testFile}"`, { timeout: 5000 }, (err, stdout, stderr) => {
    console.log(testFile)
    if (err) {
      console.log(err.message);
      return res.json({ result: "incorrect code", error: stderr });
    }

    if (stdout.includes("ALL_TESTS_PASSED")) {
      return res.json({ result: "correct code" });
    } else {
      return res.json({ result: "incorrect code", output: stdout });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import express from "express";
import cors from "cors";
import morgan from "morgan";
import getScoreGemini from "./service.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.post("/score", async (req, res) => {
  const { question, solution, language } = req.body;

  // console.log(question)
  // console.log(code)
  // console.log(code)

  if (!question || !solution || !language) {
    res.send({ status: "error", message: "No code provided" });
  }

  const response = await getScoreGemini(question, solution, language);

  if (response) {
    // const lines = response.split('\n');
    // const tableData = lines.map((line, index) => ({ line: index + 1, content: line }));
    // res.send({ status: "success", message: { tableData } });
    res.send({ status: "success", message: response });
  } else {
    res.send({ status: "error", message: "Failed to get score" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

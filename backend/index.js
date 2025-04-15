import express from "express";
import cors from "cors";
import getScoreGemini from "./service.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/score", async (req, res) => {
  const { code } = req.body;

  if (!code) {
    res.send({ status: "error", message: "No code provided" });
  }

  const response = await getScoreGemini(code);

  if (response) {
    const lines = response.split('\n');
    const tableData = lines.map((line, index) => ({ line: index + 1, content: line }));
    res.send({ status: "success", message: { tableData } });
  } else {
    res.send({ status: "error", message: "Failed to get score" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import { prompt } from "./constants.js";

dotenv.config();


const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export default async function getScoreGemini(question, solution, language) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: `
      For this given question:
        ${question} in ${language}
      Please evaluate the provided code solution below.
      Code:
      ${solution}
      ${prompt}
    `,
  });

  return response.text.toString();
}

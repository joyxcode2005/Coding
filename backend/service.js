import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import { prompt } from "./constants.js";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});


// Makeshift function to generate the score using gemini api on user code
export default async function getScoreGemini( solution) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash", // Use pro for deeper reasoning; flash for faster/lightweight
    contents: `
      You are an expert code evaluator.

      You will be provided with a code solution.

      Your task is to evaluate the solution according to the given prompt:

      Code:
      ${solution}

      ${prompt}
    `,
  });

  return response.text.toString();
}

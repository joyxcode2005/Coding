import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

// console.log(process.env.GEMINI_API_KEY);

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export default async function getScoreGemini(code) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: `Please review the code and provide feedback on its quality, performance, and any potential improvements. And based on the evaluation and also the time and space complexity of it. Based on the this three criteria provide me with individual scores for all the criterias, like for example: 
    Time complenxity: O(n^2)  3 / 10
    Space complexity: O(n)  5 / 10
    Readability: 7 / 10
    Overall Score: (3 + 5 + 7) / 3 = 5.0 / 10
    Give me the result in the above format, and dont explain anything else or provide extra information in a tabluar format.
    the code is: ${code}`,
  });

  // console.log(response.text.toString());
  return response.text.toString();
  // return response.message.candidate[0].content.part[0].text;
}

export const prompt = `
      Evaluate the given code based on the following three criteria:

      Time Complexity: Estimate the time complexity and rate it out of 10 based on how efficient it is for large input.

      Space Complexity: Estimate the space complexity and rate it out of 10 based on how well it uses memory.

      Readability: Evaluate the clarity, structure, and style of the code and rate it out of 10.

      Calculate the overall score using the formula:
      Overall Score = (time_score + space_score + readability_score) / 3

      Return the result in the following exact format (no extra explanations or notes):

      Time complexity: O(...)  x / 10  
      Space complexity: O(...)  y / 10  
      Readability: z / 10  
      Overall Score: (x + y + z) / 3 = ... / 10
`;

export const languageMap = {
  python: 71,
  c: 50,
  java: 62,
};


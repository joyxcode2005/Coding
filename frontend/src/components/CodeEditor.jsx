import { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";
import { languageOptions } from "../constants";
import Modal from "./Modal";

const rapidApikey = import.meta.env.VITE_YOUR_RAPIDAPI_KEY;

const CodeEditor = ({ difficulty }) => {
  const [solution, setSolution] = useState(
    difficulty === "easy"
      ? "// Write your code here\n int* twoSum(int* nums, int numsSize, int target, int* returnSize){}"
      : difficulty === "medium"
      ? "// Write your code here"
      : "// Write your code here"
  );
  const [languageId, setLanguageId] = useState(48);
  const [result, setResult] = useState(null);
  const [language, setLanguage] = useState("C");
  const [output, setOutput] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);

  const handleLanguageChange = (e) => {
    const selectedLang = languageOptions.find(
      (lang) => lang.name === e.target.value
    );
    setLanguageId(selectedLang.id);
    setLanguage(selectedLang.monaco);
    if (selectedLang.name === "Python") {
      switch (difficulty) {
        case "easy":
          setSolution(`# Write your code here\ndef twoSum(nums, target):`);
          break;
        case "medium":
          setSolution(`# Write your code here`);
          break;
        case "hard":
          setSolution(`# Write your code here`);
          break;
        default:
          setSolution(`# Write your code here`);
      }
    } else if (selectedLang.name === "C") {
      switch (difficulty) {
        case "easy":
          setSolution(
            `// Write your code here\nint* twoSum(int* nums, int numsSize, int target, int* returnSize){}`
          );
          break;
        case "medium":
          setSolution(`# Write your code here`);
          break;
        case "hard":
          setSolution(`# Write your code here`);
          break;
        default:
          setSolution(`# Write your code here`);
      }
    } else if (selectedLang.name === "Java") {
      switch (difficulty) {
        case "easy":
          setSolution(
            `// Write your code here\npublic class TwoSum {\n  public static int[] twoSum(int[] nums, int target) {\n}\n}`
          );
          break;
        case "medium":
          setSolution(`// Write your code here`);
          break;
        case "hard":
          setSolution(`// Write your code here`);
          break;
        default:
          setSolution(`// Write your code here`);
      }
    }
  };

  const handleCompile = async () => {
    const options = {
      method: "POST",
      url: "https://judge0-ce.p.rapidapi.com/submissions",
      params: { base64_encoded: "false", fields: "*" },
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": rapidApikey,
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
      },
      data: {
        source_code: solution,
        language_id: languageId,
      },
    };

    try {
      const response = await axios.request(options);
      const token = response.data.token;

      if (!token) {
        setOutput("No token returned from the API");
        return;
      }

      // Polling for the result
      let result = null;
      while (true) {
        const res = await axios.get(
          `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
          {
            params: { base64_encoded: "false", fields: "*" },
            headers: {
              "X-RapidAPI-Key": rapidApikey,
              "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
            },
          }
        );
        if (res.data.status.id >= 3) {
          result = res.data;
          break;
        }
        // Add a delay to avoid overwhelming the API
        await new Promise((resolve) => setTimeout(resolve, 2000)); // wait 2 seconds
      }
      setResult(result);
      setOutput(result.stdout || result.stderr || "No output");
    } catch (error) {
      console.error(error);
      setOutput("Error during code execution");
    }
  };

  const handleSubmit = async () => {
    // Check if there's at least one non-comment, non-empty line
    const hasNonCommentLine = solution.split("\n").some((line) => {
      const trimmed = line.trim();
      return (
        trimmed !== "" && !trimmed.startsWith("//") && !trimmed.startsWith("#")
      );
    });
    if (!hasNonCommentLine) {
      setOutput("Please write your code before submitting.");
      return;
    }

    setShowModal(true);
    setLoadingModal(true);

    const testOptions = {
      method: "POST",
      url: import.meta.env.VITE_BACKEND_URL + "/test",
      data: {
        difficulty,
        solution,
        language,
      },
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.request(testOptions);
      if (response.data.result === "correct code") {
        const scoreOptions = {
          method: "POST",
          url: import.meta.env.VITE_BACKEND_URL + "/score",
          data: {
            solution,
          },
        };

        const response = await axios.request(scoreOptions);
        setApiResponse(response.data.message);
      } else {
        setApiResponse("Incorrect code");
      }
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setLoadingModal(false);
    }
  };

  return (
    <div className="flex flex-col h-[100%] w-[65%]">
      <div className="absolute">
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          loading={loadingModal}
          response={apiResponse}
        />
      </div>
      <div className="w-full p-2 flex items-center gap-4">
        <select
          onChange={handleLanguageChange}
          className="bg-[#1E1E1E] px-4 py-2 rounded-xl text-white font-bold cursor-pointer"
        >
          {languageOptions.map((lang) => (
            <option key={lang.id} value={lang.name}>
              {lang.name}
            </option>
          ))}
        </select>
        <button
          onClick={handleCompile}
          className="bg-yellow-500 px-4 py-2 rounded-xl text-white font-bold cursor-pointer"
        >
          Run Code
        </button>
        <button
          onClick={handleSubmit}
          className="bg-green-500 px-4 py-2 rounded-xl text-white font-bold cursor-pointer"
        >
          Submit
        </button>
      </div>
      <Editor
        theme="vs-dark"
        height="45vh"
        width="100%"
        language={language}
        value={solution}
        onChange={(value) => setSolution(value)}
        options={{
          mouseWheelZoom: true,
          fontSize: 14,
        }}
      />
      <div className="w-full h-[40vh] bg-[#1E1E1E] p-2 rounded-xl mt-2 overflow-y-auto">
        <pre className={result?.stderr ? "text-red-500" : "text-white"}>
          <h3 className="text-2xl uppercase font-semibold">Output</h3>
          {output}
        </pre>
      </div>
    </div>
  );
};

export default CodeEditor;

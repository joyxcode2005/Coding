import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";
import { easyCBoilerPlate, easyJavaBoilerPlate, easyPythonBoilerPlate, hardCBoilerPlate, hardJavaBoilerPlate, hardPythonBoilerPlate, languageOptions, mediumCBoilerPlate, mediumJavaBoilerPlate, mediumPythonBoilerPlate } from "../constants";
import Modal from "./Modal";

const rapidApikey = import.meta.env.VITE_YOUR_RAPIDAPI_KEY;

const CodeEditor = ({ difficulty }) => {
  // State varialble to store the user's code

  const [solution, setSolution] = useState(
    difficulty === "easy"
      ? easyCBoilerPlate
      : difficulty === "medium"
      ? mediumCBoilerPlate
      : hardCBoilerPlate
  );

  const [languageId, setLanguageId] = useState(48);
  const [language, setLanguage] = useState("C");
  const [output, setOutput] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);

  // To bring the color coding of the editor on initial load
  useEffect(() => {
    setLanguage(languageOptions[0].monaco);
  }, []);

  // To change the language selected by the user
  const handleLanguageChange = (e) => {
    const selectedLang = languageOptions.find(
      (lang) => lang.name === e.target.value
    );
    setLanguageId(selectedLang.id);
    setLanguage(selectedLang.monaco);
    if (selectedLang.name === "Python") {
      switch (difficulty) {
        case "easy":
          setSolution(easyPythonBoilerPlate);
          break;
        case "medium":
          setSolution(mediumPythonBoilerPlate);
          break;
        case "hard":
          setSolution(hardPythonBoilerPlate);
          break;
        default:
          setSolution(`# Write your code here`);
      }
    } else if (selectedLang.name === "C") {
      switch (difficulty) {
        case "easy":
          setSolution(easyCBoilerPlate);
          break;
        case "medium":
          setSolution(mediumCBoilerPlate);
          break;
        case "hard":
          setSolution(hardCBoilerPlate);
          break;
        default:
          setSolution(`// Write your code here`);
      }
    } else if (selectedLang.name === "Java") {
      switch (difficulty) {
        case "easy":
          setSolution(easyJavaBoilerPlate);
          break;
        case "medium":
          setSolution(mediumJavaBoilerPlate);
          break;
        case "hard":
          setSolution(hardJavaBoilerPlate);
          break;
        default:
          setSolution(`// Write your code here`);
      }
    }
  };

  // To handle the frontend compilation of the user's code
  const handleRun = async () => {
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

    // API request options...
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

    // API request to the backend server for testing the code
    try {
      const response = await axios.request(testOptions);
      if (response.data.result === "correct code") {
        setOutput(
          "All test cases passed!! \nCode is correct! \nReady to submit!"
        );
      } else {
        setOutput(
          "Test cases failed!! \n Code is incorrect! \n Please check your code!"
        );
      }
    } catch (error) {
      console.log("Error: ", error);
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

  // Frontend
  return (
    <div className="flex flex-col h-[100%] w-[55%]">
      <div className="absolute">
        {/* The Score Modal Popup */}
        <Modal
          difficulty={difficulty}
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          loading={loadingModal}
          response={apiResponse}
        />
      </div>
      <div className="w-full p-2 flex items-center gap-4">
        {/* Dropdown for language options */}
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
          onClick={handleRun}
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
      {/* Built-in editor */}
      <Editor
        theme="vs-dark"
        height="45vh"
        width="100%"
        language={language}
        value={solution}
        onChange={(value) => setSolution(value)}
        options={{
          mouseWheelZoom: true,
          fontSize: 18,
          automaticLayout: true,
          quickSuggestions: { other: true, comments: true, strings: true },
          suggestOnTriggerCharacters: true,
          acceptSuggestionOnEnter: "on",
          wordBasedSuggestions: true,
          tabCompletion: "on",
          parameterHints: { enabled: true },
        }}
      />
      <div className="w-full h-[40vh] bg-[#1E1E1E] p-2 rounded-xl mt-2 overflow-y-auto">
        <pre className={output.includes("incorrect") ? "text-red-500" : output.includes("correct") ? "text-green-500" : "text-white"}>
          <h3 className="text-2xl uppercase font-semibold">Output</h3>
          {output}
        </pre>
      </div>
    </div>
  );
};

export default CodeEditor;

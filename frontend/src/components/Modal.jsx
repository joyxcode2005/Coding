import { Link } from "react-router-dom";

const Modal = ({ isOpen, loading, response, difficulty }) => {
  if (!isOpen) return null;

  const renderFormattedResponse = () => {
    if (!response || typeof response !== "string") return null;

    const lines = response
      .trim()
      .split("\n")
      .filter((line) => line.trim() !== "");

    // Handle just "Incorrect Solution"
    if (response === "Incorrect code") {
      return (
        <p className="text-red-600 font-semibold text-lg text-center">
          ❌ Incorrect Solution
        </p>
      );
    }

    return lines.map((line, index) => {
      if (line.toLowerCase().includes("correct")) {
        return (
          <p key={index} className="text-green-600 font-semibold text-lg mb-2">
            ✅ {line}
          </p>
        );
      } else if (line.toLowerCase().includes("time complexity")) {
        return (
          <p key={index} className="text-blue-700">
            ⏱ <span className="font-medium">{line}</span>
          </p>
        );
      } else if (line.toLowerCase().includes("space complexity")) {
        return (
          <p key={index} className="text-purple-700">
            🧠 <span className="font-medium">{line}</span>
          </p>
        );
      } else if (line.toLowerCase().includes("readability")) {
        return (
          <p key={index} className="text-yellow-700">
            📖 <span className="font-medium">{line}</span>
          </p>
        );
      } else if (Math.round(line.toLowerCase().includes("overall score"))) {
        if (difficulty === "easy") {
          localStorage.setItem("easyScore", line);
          localStorage.setItem("easyAttempted", true);
        } else if (difficulty === "medium") {
          localStorage.setItem("mediumScore", line);
          localStorage.setItem("mediumAttempted", true);
        } else if (difficulty === "hard") {
          localStorage.setItem("hardScore", line);
          localStorage.setItem("hardAttempted", true);
        }
        return (
          <p
            key={index}
            className="text-black font-bold mt-3 border-t pt-2 text-xl"
          >
            🏆 {line}
          </p>
        );
      } else {
        return (
          <p key={index} className="text-gray-800">
            {line}
          </p>
        );
      }
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 w-3/4 max-w-lg shadow-lg relative max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-4">Submission Result</h2>
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="text-sm space-y-1">{renderFormattedResponse()}</div>
        )}
        <div className="w-full flex items-center justify-center mt-10">
          <Link
            to={"/"}
            className="bg-slate-900 text-white px-8 py-2 mt-4 rounded-xl"
          >
            OK
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;

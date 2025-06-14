import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { passwords } from "../constants";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState("");
  const [selectedRound, setSelectedRound] = useState(null);
  const [error, setError] = useState(null);
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [attemptedRound, setAttemptedRound] = useState(null);
  const [attemptedScore, setAttemptedScore] = useState(null);
  const [showPasswordInfo, setShowPasswordInfo] = useState(false);

  const navigate = useNavigate();

  const handleRoundClick = (round) => {
    const isAttempted = localStorage.getItem(`${round.toLowerCase()}Attempted`);
    const score = localStorage.getItem(`${round.toLowerCase()}Score`);

    if (isAttempted === "true") {
      setAttemptedRound(round);
      setAttemptedScore(score);
      setShowScoreModal(true);
      return;
    }
    setSelectedRound(round);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === passwords[selectedRound]) {
      setShowModal(false);
      setPassword("");
      navigate(`/${selectedRound.toLowerCase()}`);
    } else {
      setError("Incorrect password. Please try again.");
      setPassword("");
    }
  };

  const getDifficultyColor = (round) => {
    switch (round) {
      case "EASY":
        return "border-green-300 text-green-300 hover:bg-green-300/10";
      case "MEDIUM":
        return "border-yellow-300 text-yellow-300 hover:bg-yellow-300/10";
      case "HARD":
        return "border-orange-400 text-orange-400 hover:bg-orange-400/10";
      default:
        return "";
    }
  };

  return (
    <div className="relative h-screen flex flex-col justify-center items-center p-5 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Floating particles background */}
      <div
        id="particles"
        className="absolute inset-0 pointer-events-none"
      ></div>

      {/* Grid lines background */}
      <div className="absolute inset-0 grid-background opacity-20"></div>

      {/* Info Icon */}
      <button
        onClick={() => setShowPasswordInfo(true)}
        className="absolute top-6 right-6 z-20 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-300 hover:text-white hover:bg-gray-700/50 p-3 rounded-full transition-all duration-300 hover:scale-110"
        title="View access codes"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </button>

      {/* Warning Component */}

      <div className="rounded-2xl shadow-2xl backdrop-blur-sm bg-gray-900/70 border border-gray-700 p-12 w-full max-w-5xl z-10">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl font-source-code font-black tracking-tighter text-white flex items-center gap-5">
            <img src="logo.png" alt="logo" className="w-20 h-20 rounded-full" />
            <span className="text-blue-600 uppercase text-5xl font-bold">
              Algo-Judge
            </span>{" "}
            : Coding Contest Platform
          </h1>
          <div className="flex flex-col items-center justify-center mt-2 gap-5">
            <div className="w-[90%] b text-red-500 text-center px-4 py-2 rounded-md text-lg flex items-center gap-2 animate-pulse">
              You can run the code as many times as you like, but once you
              submit and get a score, you can't attempt the question again.
            </div>
            <div className="text-white text-xl font-bold">
              Attempt from the three level of difficulties in any order
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
          {["EASY", "MEDIUM", "HARD"].map((round) => (
            <button
              key={round}
              onClick={() => handleRoundClick(round)}
              className={`group relative flex flex-col items-center justify-center border-2 ${getDifficultyColor(
                round
              )} bg-gray-800/50 backdrop-blur-sm rounded-xl py-8 px-10 transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-gray-700/30 cursor-pointer`}
            >
              <span className="text-3xl font-mono font-bold">{round}</span>
              <div className="h-1 w-0 group-hover:w-full bg-current mt-2 transition-all duration-300 ease-out"></div>
            </button>
          ))}
        </div>
      </div>

      {/* Password Info Modal */}
      {showPasswordInfo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
          <div
            className="bg-gray-800 border border-gray-700 text-white p-8 rounded-lg shadow-2xl w-full max-w-md animate-slideUp"
            style={{
              backgroundImage:
                "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.03) 0%, transparent 40%)",
            }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-200">Access Codes</h3>
              <div className="flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-3a1 1 0 011-1h2.586l6.414-6.414A6 6 0 0119 9z"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-300"></div>
                    <span className="text-green-300 font-medium">EASY</span>
                  </div>
                  <code className="bg-gray-800 px-3 py-1 rounded text-sm font-mono text-gray-200">
                    easypass
                  </code>
                </div>
              </div>

              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
                    <span className="text-yellow-300 font-medium">MEDIUM</span>
                  </div>
                  <code className="bg-gray-800 px-3 py-1 rounded text-sm font-mono text-gray-200">
                    mediumpass
                  </code>
                </div>
              </div>

              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                    <span className="text-orange-400 font-medium">HARD</span>
                  </div>
                  <code className="bg-gray-800 px-3 py-1 rounded text-sm font-mono text-gray-200">
                    hardpass
                  </code>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="button"
                onClick={() => setShowPasswordInfo(false)}
                className="bg-white text-gray-900 font-medium px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
          <div
            className="bg-gray-800 border border-gray-700 text-white p-8 rounded-lg shadow-2xl w-full max-w-md animate-slideUp"
            style={{
              backgroundImage:
                "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.03) 0%, transparent 40%)",
            }}
          >
            <div className="flex justify-between items-center flex-col mb-6 ">
              <div className="flex justify-between items-center mb-2 w-full">
                <h3 className="text-2xl font-bold text-gray-200">
                  Enter Password
                </h3>
                <div
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    selectedRound === "EASY"
                      ? "bg-green-300/20 text-green-300"
                      : selectedRound === "MEDIUM"
                      ? "bg-yellow-300/20 text-yellow-300"
                      : "bg-orange-400/20 text-orange-400"
                  }`}
                >
                  {selectedRound}
                </div>
              </div>
              <div className="text-left w-full font-bold text-red-500">
                To get the passwords, click on the (i) button
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-900/80 border border-gray-700 text-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300"
                  placeholder="Access code"
                  autoFocus
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    ></path>
                  </svg>
                </div>
              </div>

              {error && (
                <div className="bg-red-400/10 border border-red-400/30 text-red-400 px-4 py-2 rounded-md text-sm flex items-center gap-2 animate-pulse">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  {error}
                </div>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-white text-gray-900 font-medium px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-300"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setPassword("");
                    setError(null);
                  }}
                  className="flex-1 bg-gray-700 text-gray-200 px-4 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Already Attempted Score Modal */}
      {showScoreModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
          <div
            className="bg-gray-800 border border-gray-700 text-white p-8 rounded-lg shadow-2xl w-full max-w-md animate-slideUp"
            style={{
              backgroundImage:
                "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.03) 0%, transparent 40%)",
            }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-200">
                Challenge Attempted
              </h3>
              <div
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  attemptedRound === "EASY"
                    ? "bg-green-300/20 text-green-300"
                    : attemptedRound === "MEDIUM"
                    ? "bg-yellow-300/20 text-yellow-300"
                    : "bg-red-400/20 text-red-400"
                }`}
              >
                {attemptedRound}
              </div>
            </div>

            <div className="mb-6 bg-gray-900/50 p-6 rounded-lg border border-gray-700">
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  {attemptedRound === "EASY" ? (
                    <svg
                      className="w-12 h-12 text-green-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  ) : attemptedRound === "MEDIUM" ? (
                    <svg
                      className="w-12 h-12 text-yellow-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-12 h-12 text-red-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      ></path>
                    </svg>
                  )}
                </div>
                <p className="text-gray-300 text-center mb-2">
                  You have already attempted this challenge.
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-gray-400">Your score:</span>
                  <span className="text-lg font-bold text-white">
                    {attemptedScore.split("=")[1]}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => {
                  setShowScoreModal(false);
                  setAttemptedRound(null);
                  setAttemptedScore(null);
                }}
                className="bg-white text-gray-900 font-medium px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;

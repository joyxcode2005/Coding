import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { passwords } from "../constants";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState("");
  const [selectedRound, setSelectedRound] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleRoundClick = (round) => {
    const isAttempted = localStorage.getItem("easyAttempted");
    const score = localStorage.getItem("easyScore");
    console.log(isAttempted);

    if (isAttempted === "true") {
      alert(
        `You have already attempted this round , your round score is ${score}`
      );

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

  return (
    <div className="h-screen flex items-center p-5 bg-gradient-to-r from-[#2C2A3C] to-[#0B7565]">
      <div className="rounded-lg shadow-lg p-8 w-full h-[95%] ">
        <h2 className="text-7xl font-source-code font-extrabold text-white">
          EVENT: CODING
        </h2>
        <div className="mt-10 flex gap-5">
          {["EASY", "MEDIUM", "HARD"].map((round) => (
            <button
              key={round}
              onClick={() => handleRoundClick(round)}
              className="flex items-center gap-2 bg-black/50 text-black font-source-code font-bold text-2xl py-3 px-5 rounded-lg hover:bg-white/80 transition duration-300 cursor-pointer"
            >
              <img src="folder.png" alt="folder_icon" />
              {round === "EASY" ? (
                <span className="text-green-400">{round}</span>
              ) : round === "MEDIUM" ? (
                <span className="text-yellow-400">{round}</span>
              ) : (
                <span className="text-red-600">{round}</span>
              )}
            </button>
          ))}
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-slate-900 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Enter Password</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border p-2 rounded mb-4 w-full text-white"
                  placeholder="Enter password"
                />
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
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
                    className="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
                {error && <p className="text-red-500 mt-2">{error}</p>}
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;

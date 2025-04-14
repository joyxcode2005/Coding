import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState("");
  const [selectedRound, setSelectedRound] = useState(null);
  const navigate = useNavigate();

  const passwords = {
    1: "round1pass",
    2: "round2pass",
    3: "round3pass",
  };

  const handleRoundClick = (round) => {
    setSelectedRound(round);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === passwords[selectedRound]) {
      setShowModal(false);
      setPassword("");
      navigate(`/round${selectedRound}`);
    } else {
      alert("Incorrect password!");
      setPassword("");
    }
  };

  return (
    <div className="h-screen flex items-center p-5 bg-gradient-to-r from-[#2C2A3C] to-[#0B7565]">
      <div className="rounded-lg shadow-lg p-8 w-full h-[95%] ">
        <h2 className="text-7xl font-source-code font-extrabold text-white">
          INNOVARIUM EVENT: CODING
        </h2>
        <div className="mt-10 flex gap-5">
          {[1, 2, 3].map((round) => (
            <button
              key={round}
              onClick={() => handleRoundClick(round)}
              className="flex items-center gap-2 bg-white/50 text-black font-source-code font-bold text-2xl py-3 px-5 rounded-lg hover:bg-white/80 transition duration-300 cursor-pointer"
            >
              <img src="folder.png" alt="folder_icon" />
              <span>Round {round}</span>
            </button>
          ))}
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Enter Password</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border p-2 rounded mb-4 w-full"
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
                    }}
                    className="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;

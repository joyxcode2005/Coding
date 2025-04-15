import React, { useEffect, useState } from "react";
import CodeEditor from "../components/CodeEditor";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

const RoundTwo = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch("/Round1.md")
      .then((response) => response.text())
      .then((text) => {
        setMarkdown(text);
      });
  }, []);

  return (
    <div className="w-full bg-black text-white h-screen flex items-center justify-center p-2">
      <div className="w-screen h-screen flex items-center p-4 gap-2 rounded-3xl">
        <div className="w-[45%] h-full flex items-start p-3 flex-col text-white bg-[#1E1E1E] rounded-xl overflow-auto">
          <div className="flex w-full justify-between items-center">
            <h2 className="text-4xl uppercase font-bold">Description</h2>
            <Link
              to={"/"}
              className="flex justifcy-center items-center gap-2 bg-[#1E1E1E] text-white px-4 py-2 rounded-xl hover:bg-[#2e2e2e] transition duration-300 ease-in-out"
            >
              <IoIosArrowRoundBack />
              Back
            </Link>
          </div>
          <div className="markdown-content mt-10">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
        <CodeEditor />
      </div>
    </div>
  );
};

export default RoundTwo;

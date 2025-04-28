import React from "react";

const HardQuestion = () => {
  return (
    <div className="p-6 bg-[#1E1E1E] text-white rounded-xl max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Hard Question: Word Break II</h1>

      <p className="mb-4">
        Given a string <code className="bg-[#353535] px-1 rounded">s</code> and
        a dictionary of strings{" "}
        <code className="bg-[#353535] px-1 rounded">wordDict</code>, add spaces
        in <code className="bg-[#353535] px-1 rounded">s</code> to construct a
        sentence where each word is a valid dictionary word.
      </p>

      <p className="mb-4">
        Return <strong>all such possible sentences</strong> in any order.
      </p>

      <p className="mb-6">
        <strong>Note:</strong> The same word in the dictionary may be reused
        multiple times in the segmentation.
      </p>

      <h2 className="text-xl font-semibold mb-2">Examples:</h2>
      <ul className="list-disc list-inside space-y-4">
        <li>
          <strong>Input:</strong>{" "}
          <code className="bg-[#353535] px-1 rounded">
            s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
          </code>
          <br />
          <strong>Output:</strong>{" "}
          <code className="bg-[#353535] px-1 rounded">
            ["cats and dog","cat sand dog"]
          </code>
        </li>

        <li>
          <strong>Input:</strong>{" "}
          <code className="bg-[#353535] px-1 rounded">
            s = "pineapplepenapple", wordDict =
            ["apple","pen","applepen","pine","pineapple"]
          </code>
          <br />
          <strong>Output:</strong>{" "}
          <code className="bg-[#353535] px-1 rounded">
            ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
          </code>
          <br />
          <strong>Explanation:</strong> Note that you are allowed to reuse a
          dictionary word.
        </li>

        <li>
          <strong>Input:</strong>{" "}
          <code className="bg-[#353535] px-1 rounded">
            s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
          </code>
          <br />
          <strong>Output:</strong>{" "}
          <code className="bg-[#353535] px-1 rounded">[]</code>
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Constraints:</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>
          <code className="bg-[#353535] px-1 rounded">
            1 &lt;= s.length &lt;= 20
          </code>
        </li>
        <li>
          <code className="bg-[#353535] px-1 rounded">
            1 &lt;= wordDict.length &lt;= 1000
          </code>
        </li>
        <li>
          <code className="bg-[#353535] px-1 rounded">
            1 &lt;= wordDict[i].length &lt;= 10
          </code>
        </li>
        <li>
          <code className="bg-[#353535] px-1 rounded">
            s and wordDict[i] consist of only lowercase English letters
          </code>
        </li>
        <li>
          <code className="bg-[#353535] px-1 rounded">
            All the strings of wordDict are unique
          </code>
        </li>
        <li>
          <code className="bg-[#353535] px-1 rounded">
            Input is generated in a way that the length of the answer doesn't
            exceed 10<sup>5</sup>
          </code>
        </li>
      </ul>
    </div>
  );
};

export default HardQuestion;

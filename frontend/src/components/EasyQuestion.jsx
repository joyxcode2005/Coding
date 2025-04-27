import React from "react";

const EasyQuestion = () => {
  return (
    <div className="p-6 bg-[#1E1E1E] text-white rounded-xl max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Easy Question: Plus One</h1>

      <p className="mb-4">
        You are given a <strong>large integer</strong> represented as an integer
        array <code className="bg-[#353535] px-1 rounded">digits</code>, where
        each <code className="bg-[#353535] px-1 rounded">digits[i]</code> is the{" "}
        <em>ith</em> digit of the integer.
      </p>

      <p className="mb-4">
        The digits are ordered from most significant to least significant in
        left-to-right order. The large integer does not contain any leading{" "}
        <code className="bg-[#353535] px-1 rounded">0's</code>.
      </p>

      <p className="mb-6">
        Increment the large integer by one and return the{" "}
        <em>resulting array of digits</em>.
      </p>

      <h2 className="text-xl font-semibold mb-2">Examples:</h2>
      <ul className="list-disc list-inside space-y-4">
        <li>
          <strong>Input:</strong>{" "}
          <code className="bg-[#353535] px-1 rounded">digits = [1, 2, 3]</code>
          <br />
          <strong>Output:</strong>{" "}
          <code className="bg-[#353535] px-1 rounded">[1, 2, 4]</code>
          <br />
          <strong>Explanation:</strong> The array represents the integer 123.
          Incrementing by one gives 124.
        </li>

        <li>
          <strong>Input:</strong>{" "}
          <code className="bg-[#353535] px-1 rounded">
            digits = [4, 3, 2, 1]
          </code>
          <br />
          <strong>Output:</strong>{" "}
          <code className="bg-[#353535] px-1 rounded">[4, 3, 2, 2]</code>
          <br />
          <strong>Explanation:</strong> 4321 + 1 = 4322.
        </li>

        <li>
          <strong>Input:</strong>{" "}
          <code className="bg-[#353535] px-1 rounded">digits = [9]</code>
          <br />
          <strong>Output:</strong>{" "}
          <code className="bg-[#353535] px-1 rounded">[1, 0]</code>
          <br />
          <strong>Explanation:</strong> 9 + 1 = 10.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Constraints:</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>
          <code className="bg-[#353535] px-1 rounded">
            1 &lt;= digits.length &lt;= 100
          </code>
        </li>
        <li>
          <code className="bg-[#353535] px-1 rounded">
            0 &lt;= digits[i] &lt;= 9
          </code>
        </li>
        <li>
          <code className="bg-[#353535] px-1 rounded">digits</code> does not
          contain any leading{" "}
          <code className="bg-[#353535] px-1 rounded">0's</code>
        </li>
      </ul>
    </div>
  );
};

export default EasyQuestion;

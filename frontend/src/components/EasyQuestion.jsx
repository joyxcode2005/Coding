import React from "react";

const EasyQuestion = () => {
  return (
    <div className="prose prose-invert">
      <h1 className="mt-10 text-2xl font-semibold mb-4">Easy Question: Two Sum </h1>
      <p>
        Given an array of integers <code>nums</code> and an integer{" "}
        <code>target</code>, return indices of the two numbers such that they
        add up to <code>target</code>
      </p>
      <p>
        You may assume that each input would have <b>exactly one solution</b>,
        and you may not use the same element twice
      </p>
      You can return the answer in any order
      <h2>Example 1:</h2>
      <p>
        Input: <code>nums = [2,7,11,15]</code>, <code>target = 9</code>
      </p>
      <p>
        Output: <code>[0,1]</code>
      </p>
      <p>
        Explanation: Because <code>nums[0] + nums[1] == 9</code>, we return{" "}
        <code>[0, 1]</code>
      </p>
      <h2>Example 2:</h2>
      <p>
        Input: <code>nums = [3,2,4]</code>, <code>target = 6</code>
        <p>Explaination : Because <code>nums[1] + nums[2] == 6</code>, we return{" "}</p>
      </p>
    </div>
  );
};

export default EasyQuestion;

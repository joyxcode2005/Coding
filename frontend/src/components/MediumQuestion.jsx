
const MediumQuestion = () => {
  return (
    <div className="p-6 bg-[#1E1E1E] text-white rounded-xl max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Medium Question: Min Stack</h1>

      <p className="mb-4">
        Design a stack that supports <strong>push</strong>, <strong>pop</strong>
        , <strong>top</strong>, and{" "}
        <strong>retrieving the minimum element</strong> in constant time.
      </p>

      <p className="mb-4">
        Implement the{" "}
        <code className="bg-[#353535] px-1 rounded">MinStack</code> class:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>
          <code className="bg-[#353535] px-1 rounded">MinStack()</code>{" "}
          initializes the stack object.
        </li>
        <li>
          <code className="bg-[#353535] px-1 rounded">push(int val)</code>{" "}
          pushes the element{" "}
          <code className="bg-[#353535] px-1 rounded">val</code> onto the stack.
        </li>
        <li>
          <code className="bg-[#353535] px-1 rounded">pop()</code> removes the
          element on the top of the stack.
        </li>
        <li>
          <code className="bg-[#353535] px-1 rounded">top()</code> gets the top
          element of the stack.
        </li>
        <li>
          <code className="bg-[#353535] px-1 rounded">getMin()</code> retrieves
          the minimum element in the stack.
        </li>
      </ul>

      <p className="mb-6 text-sm ">
        You must implement a solution with <strong>O(1)</strong> time complexity
        for each function.
      </p>

      <h2 className="text-xl font-semibold mb-2">Example:</h2>
      <ul className="list-disc list-inside space-y-4">
        <li>
          <strong>Input:</strong>
          <br />
          <code className="bg-[#353535] px-1 rounded">
            ["MinStack","push","push","push","getMin","pop",<br /> "top","getMin"]
            <br />
          </code>
          <br />
          <code className="bg-[#353535] px-1 rounded">
            [[],[-2],[0],[-3],[],[],[],[]]
          </code>
          <br />
          <br />
          <strong>Output:</strong>
          <br />
          <code className="bg-[#353535] px-1 rounded">
            [null,null,null,null,-3,null,0,-2]
          </code>
          <br />
          <br />
          <strong>Explanation:</strong>
          <br />
          <code className="bg-[#353535] px-1 rounded">
            MinStack minStack = new MinStack();
          </code>
          <br />
          <code className="bg-[#353535] px-1 rounded">minStack.push(-2);</code>
          <br />
          <code className="bg-[#353535] px-1 rounded">minStack.push(0);</code>
          <br />
          <code className="bg-[#353535] px-1 rounded">minStack.push(-3);</code>
          <br />
          <code className="bg-[#353535] px-1 rounded">
            minStack.getMin(); // return -3
          </code>
          <br />
          <code className="bg-[#353535] px-1 rounded">minStack.pop();</code>
          <br />
          <code className="bg-[#353535] px-1 rounded">
            minStack.top(); // return 0
          </code>
          <br />
          <code className="bg-[#353535] px-1 rounded">
            minStack.getMin(); // return -2
          </code>
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Constraints:</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>
          <code className="bg-[#353535] px-1 rounded">
            -2<sup>31</sup> &lt;= val &lt;= 2<sup>31</sup> - 1
          </code>
        </li>
        <li>
          Methods <code className="bg-[#353535] px-1 rounded">pop</code>,{" "}
          <code className="bg-[#353535] px-1 rounded">top</code>, and{" "}
          <code className="bg-[#353535] px-1 rounded">getMin</code> will always
          be called on non-empty stacks.
        </li>
        <li>
          At most{" "}
          <code className="bg-[#353535] px-1 rounded">
            3 * 10<sup>4</sup>
          </code>{" "}
          calls will be made to{" "}
          <code className="bg-[#353535] px-1 rounded">push</code>,{" "}
          <code className="bg-[#353535] px-1 rounded">pop</code>,{" "}
          <code className="bg-[#353535] px-1 rounded">top</code>, and{" "}
          <code className="bg-[#353535] px-1 rounded">getMin</code>.
        </li>
      </ul>
    </div>
  );
};

export default MediumQuestion;

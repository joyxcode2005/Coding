import CodeEditor from "../components/CodeEditor";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import EasyQuestion from "../components/EasyQuestion";

const Easy = () => {
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
          <EasyQuestion />
        </div>
        <CodeEditor difficulty="easy" />
      </div>
    </div>
  );
};

export default Easy;

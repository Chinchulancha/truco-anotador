import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const NosClick = ({handleClickNos}) => {
  return (
    <div className="flex gap-x-2 ">
      <button onClick={() => handleClickNos("+")} className="text-2xl border-2 bg-[#4d2e0f] rounded-full p-3"><FaPlus /></button>
      <button onClick={() => handleClickNos("-")} className="text-2xl border-2 bg-[#4d2e0f] rounded-full p-3"><FaMinus /></button>
    </div>
  );
};

export default NosClick;
import { useMyContext } from "../MyContext";
import useSwapBtnHook from "../hooks/swapBtnHook";

function SwapBtn() {
  const { handleChange } = useSwapBtnHook();
  const { change } = useMyContext();

  return (
    <button
      onClick={handleChange}
      className="bg-white px-2 py-1 rounded mt-2 hover:-translate-y-1 transition-all duration-300 active:translate-y-0 font-semibold text-sm shadow-md"
    >
      {change === "form" ? "See User Table" : "See Form"}
    </button>
  );
}

export default SwapBtn;

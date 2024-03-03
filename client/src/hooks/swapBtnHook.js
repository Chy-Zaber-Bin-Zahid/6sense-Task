import { useMyContext } from "../MyContext";

function useSwapBtnHook() {
  // Context Api
  const { change, setChange } = useMyContext();

  const handleChange = () => {
    if (change === "form") {
      setChange("table");
    } else {
      setChange("form");
    }
  };

  return {
    handleChange,
  };
}

export default useSwapBtnHook;

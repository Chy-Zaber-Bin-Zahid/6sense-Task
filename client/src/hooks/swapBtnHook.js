import { useMyContext } from "../MyContext";

function useSwapBtnHook() {
  // Context Api
  const { change, setChange, setAdded } = useMyContext();

  const handleChange = () => {
    setAdded(false);
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

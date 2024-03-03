import { createContext, useContext } from "react";

// Creating context api
const MyContext = createContext();

function MyProvider({ children }) {
  return <MyContext.Provider value={{}}>{children}</MyContext.Provider>;
}

// Custom hook
function useMyContext() {
  const context = useContext(MyContext);
  return context;
}

export { MyProvider, useMyContext };

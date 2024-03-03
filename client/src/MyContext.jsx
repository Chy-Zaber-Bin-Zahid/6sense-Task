import { createContext, useContext, useState } from "react";

// Creating context api
const MyContext = createContext();

function MyProvider({ children }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [telLength, setTelLength] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [exist, setExist] = useState(false);
  const [added, setAdded] = useState(false);
  const [phone, setPhone] = useState("");
  const [change, setChange] = useState("form");
  const [userData, setUserData] = useState([]);

  return (
    <MyContext.Provider
      value={{
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        telLength,
        setTelLength,
        showMessage,
        setShowMessage,
        exist,
        setExist,
        added,
        setAdded,
        phone,
        setPhone,
        change,
        setChange,
        userData,
        setUserData,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

// Custom hook
function useMyContext() {
  const context = useContext(MyContext);
  return context;
}

export { MyProvider, useMyContext };

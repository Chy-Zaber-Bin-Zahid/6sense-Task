import { createContext, useContext, useState } from "react";
import axios from "axios";

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
  const [details, setDetails] = useState(false);
  const [detailsData, setDetailsData] = useState([]);

  const handleDetails = async (user) => {
    setDetails(true);
    try {
      const response = await axios.get(
        `https://sixsense-task-2.onrender.com/api/user/getData/${user._id}`
      );
      setDetailsData(response.data.payload.user);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleClose = () => {
    setDetails(false);
    setDetailsData([]);
  };

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
        handleDetails,
        details,
        setDetails,
        detailsData,
        handleClose,
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

import { useEffect, useState } from "react";
import { useMyContext } from "../MyContext";
import axios from "axios";

function useTableHook() {
  // Context Api
  const { userData, setUserData } = useMyContext();
  // States
  const [buttonStatus, setButtonStatus] = useState(Array(10).fill(false));
  // Data fetch from backend
  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/user/getData"
        );
        setUserData(response.data.payload.user);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsersData();
  }, [userData]);

  // Function to handle the click event of the button
  const handleStatus = (idx) => {
    const updatedButtonStatus = [...buttonStatus];
    updatedButtonStatus[idx] = !updatedButtonStatus[idx];
    setButtonStatus(updatedButtonStatus);
  };

  return { userData, handleStatus, buttonStatus };
}

export default useTableHook;

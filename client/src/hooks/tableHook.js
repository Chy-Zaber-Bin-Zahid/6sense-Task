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
          "https://sixsense-task-3.onrender.com/api/user/getData"
        );
        setUserData(response.data.payload.user);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsersData();
  }, []);

  // Function to handle the click event of the button
  const handleStatus = (idx) => {
    const updatedButtonStatus = [...buttonStatus];
    updatedButtonStatus[idx] = !updatedButtonStatus[idx];
    setButtonStatus(updatedButtonStatus);
  };

  // Delete user
  const handleDelete = async (user) => {
    try {
      const response = await axios.delete(
        `https://sixsense-task-3.onrender.com/api/user/${user._id}`
      );
      const updatedResponse = await axios.get(
        "https://sixsense-task-3.onrender.com/api/user/getData"
      );
      setUserData(updatedResponse.data.payload.user);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return { userData, handleStatus, buttonStatus, handleDelete };
}

export default useTableHook;

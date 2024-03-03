import { useEffect } from "react";
import { useMyContext } from "../MyContext";
import axios from "axios";

function useTableHook() {
  // Context Api
  const { userData, setUserData } = useMyContext();

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
  }, []);

  return { userData };
}

export default useTableHook;

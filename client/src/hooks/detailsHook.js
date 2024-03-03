import { useState } from "react";
import axios from "axios";
import { useMyContext } from "../MyContext";

function useDetailsHook() {
  // Context Api
  const { setDetails, setUserData } = useMyContext();
  // Define state variables to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  const handleSubmit = async (userId, e) => {
    e.preventDefault();
    setDetails(false);
    try {
      const response = await axios.post(
        `https://sixsense-task-2.onrender.com/api/user/updateDetails/${userId}`,
        formData
      );
      setUserData((prevUserData) => {
        const updatedUserData = prevUserData.map((user) => {
          if (user._id === userId) {
            // Update the user object with new data
            return { ...user, ...formData };
          } else {
            return user; // Return unchanged user object
          }
        });
        return updatedUserData; // Return the updated userData
      });
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return { handleSubmit, handleChange };
}

export default useDetailsHook;

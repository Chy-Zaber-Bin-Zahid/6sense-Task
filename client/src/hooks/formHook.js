import axios from "axios";
import { useMyContext } from "../MyContext";

function useFormHook() {
  const data = [
    {
      label: "First Name",
      type: "text",
      name: "firstName",
    },
    {
      label: "Last Name",
      type: "text",
      name: "lastName",
    },
    {
      label: "E-mail",
      type: "email",
      name: "email",
    },
    {
      label: "Phone",
      type: "tel",
      name: "phone",
    },
  ];

  // Context Api
  const {
    setFirstName,
    setLastName,
    setEmail,
    setTelLength,
    setShowMessage,
    setExist,
    setAdded,
    setPhone,
  } = useMyContext();

  // Length check
  const handleInputChange = (event, setFunc, length = 0) => {
    setExist(false);
    setAdded(false);
    const inputValue = event.target.value;
    if (length !== 0) {
      // Limit the character count to 30/40(length)
      if (inputValue.length <= length) {
        setFunc(inputValue);
      } else {
        setFunc(inputValue.slice(0, length));
      }
    } else {
      setFunc(inputValue);
    }
  };

  // Telephone Number Check
  const handleTelephoneChange = (event) => {
    setTelLength(false);
    setAdded(false);
    const inputValue = event.target.value;
    const numbersOnly = inputValue.replace(/[^0-9]/g, "");
    if (inputValue.length <= 11) {
      setPhone(numbersOnly);
    } else {
      setPhone(numbersOnly.slice(0, 11));
    }
  };

  const handleTelephoneFocus = () => {
    setShowMessage(true);
  };

  // Data send to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData.entries());
    try {
      const result = await axios.post(
        "http://localhost:3001/api/user/register",
        formDataObject
      );
      if (result) {
        setAdded(true);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setShowMessage(false);
      }
    } catch (err) {
      const errorMessage = err.response.data.error;
      if (errorMessage === "User with this email already exists") {
        setExist(true);
      } else if (errorMessage === "Telephone is less than 11") {
        setTelLength(true);
      } else {
        setExist(true);
        setTelLength(true);
      }
    }
  };

  return {
    data,
    handleSubmit,
    handleInputChange,
    handleTelephoneChange,
    handleTelephoneFocus,
  };
}

export default useFormHook;

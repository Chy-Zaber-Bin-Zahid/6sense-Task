import axios from "axios";

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
      label: "Email",
      type: "email",
      name: "email",
    },
    {
      label: "Phone",
      type: "tel",
      name: "phone",
    },
  ];

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
    } catch (err) {
      console.log(err);
    }
  };

  return { data, handleSubmit };
}

export default useFormHook;

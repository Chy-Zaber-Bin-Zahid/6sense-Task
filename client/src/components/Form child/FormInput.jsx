import { useMyContext } from "../../MyContext";
import useFormHook from "../../hooks/formHook";

function FormInput({ field }) {
  const {
    handleTelephoneChange,
    handleInputChange,
    handleTelephoneFocus,
  } = useFormHook();

  const {
    email,
    firstName,
    lastName,
    setFirstName,
    setLastName,
    setEmail,
    telLength,
    exist,
    phone,
  } = useMyContext();

  return (
    <input
      type={field.type}
      id={field.name}
      name={field.name}
      placeholder={field.label}
      className={
        field.name === "email"
          ? `border-gray-300 border rounded-md px-2 py-1 w-full ${
              exist !== false && "border-red-600"
            }`
          : field.name === "phone"
          ? `border-gray-300 border rounded-md px-2 py-1 w-full ${
              telLength !== false && "border-red-600"
            }`
          : "border-gray-300 border rounded-md px-2 py-1 w-full"
      }
      required
      value={
        field.name === "firstName"
          ? firstName
          : field.name === "lastName"
          ? lastName
          : field.name === "email"
          ? email
          : phone
      }
      onChange={
        field.name === "firstName"
          ? (event) => handleInputChange(event, setFirstName, 30)
          : field.name === "lastName"
          ? (event) => handleInputChange(event, setLastName, 30)
          : field.name === "email"
          ? (event) => handleInputChange(event, setEmail)
          : handleTelephoneChange
      }
      onFocus={field.name === "phone" ? handleTelephoneFocus : undefined}
    />
  );
}

export default FormInput;

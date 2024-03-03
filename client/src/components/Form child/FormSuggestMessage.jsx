import { useMyContext } from "../../MyContext";

function FormSuggestMessage({ idx }) {
  const { email, firstName, lastName, telLength, showMessage, exist } =
    useMyContext();

  console.log(firstName);
  return (
    <p className="text-red-600 text-sm mb-1">
      {firstName.length > 0 && idx === 0 && "Max length is 30 characters!"}
      {lastName.length > 0 && idx === 1 && "Max length is 30 characters!"}
      {email.length > 0 &&
        idx === 2 &&
        (exist === false
          ? "Email must contain @!"
          : "This email already exists!")}
      {showMessage &&
        idx === 3 &&
        (telLength !== true
          ? "Only numbers can be typed, and the length is 11 (Fixed)!"
          : "Telephone must contain 11 number!")}
    </p>
  );
}

export default FormSuggestMessage;

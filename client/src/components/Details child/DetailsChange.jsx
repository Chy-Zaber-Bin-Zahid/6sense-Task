import { useMyContext } from "../../MyContext";
import useDetailsHook from "../../hooks/detailsHook";

function DetailsChange() {
  const { handleSubmit, handleChange } = useDetailsHook();
  const { detailsData } = useMyContext();

  return (
    <form
      onSubmit={(e) => handleSubmit(detailsData._id, e)}
      className=" flex flex-col justify-center items-start w-full"
    >
      <label>First Name:</label>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        className="border-gray-300 border rounded-md px-2 py-1 w-full my-2"
        onChange={handleChange}
        required
      />
      <label>Last Name:</label>
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        className="border-gray-300 border rounded-md px-2 py-1 w-full my-2"
        onChange={handleChange}
        required
      />
      <label>Phone:</label>
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        className="border-gray-300 border rounded-md px-2 py-1 w-full my-2"
        onChange={handleChange}
        required
      />
      <div className="flex justify-center items-center w-full">
        <button
          className=" bg-blue-600 text-white px-2 py-1 rounded mt-1 hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 active:translate-y-0 font-semibold text-sm justify-self-center"
          type="submit"
        >
          Change
        </button>
      </div>
    </form>
  );
}

export default DetailsChange;

import useFormHook from "../hooks/formHook";

function Form() {
  const { data, handleSubmit } = useFormHook();

  return (
    <section className="flex flex-col justify-center items-center gap-2">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-md shadow-md flex flex-col items-center"
      >
        {data.map((field, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-2 justify-center items-start w-full mb-2"
          >
            <label htmlFor={field.name}>{field.label}:</label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              placeholder={field.label}
              className="border-gray-300 border rounded-md px-2 py-1"
              required
            />
          </div>
        ))}
        <button
          className=" bg-blue-600 text-white px-2 py-1 rounded mt-2 hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 active:translate-y-0 font-semibold text-sm"
          type="submit"
        >
          Submit
        </button>
      </form>
      <button className="bg-white px-2 py-1 rounded mt-2 hover:-translate-y-1 transition-all duration-300 active:translate-y-0 font-semibold text-sm shadow-md">
        See User Table
      </button>
    </section>
  );
}

export default Form;

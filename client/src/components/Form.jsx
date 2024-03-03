import { useMyContext } from "../MyContext";
import useFormHook from "../hooks/formHook";
import SwapBtn from "./SwapBtn";
import FormInput from "./Form child/FormInput";
import FormSuggestMessage from "./Form child/FormSuggestMessage";

function Form() {
  const { data, handleSubmit } = useFormHook();
  const { added } = useMyContext();

  return (
    <section className="flex flex-col justify-center items-center gap-2">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-md shadow-md flex flex-col items-center w-full"
      >
        {added && (
          <h1 className="text-green-500 font-semibold text-xl border-2 w-full text-center p-2 border-green-500 mb-1">
            New User Added!
          </h1>
        )}
        {data.map((field, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-2 justify-center items-start w-full "
          >
            <label htmlFor={field.name}>{field.label}:</label>
            <FormInput field={field} />
            <FormSuggestMessage idx={idx} />
          </div>
        ))}
        <button
          className=" bg-blue-600 text-white px-2 py-1 rounded mt-1 hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 active:translate-y-0 font-semibold text-sm"
          type="submit"
        >
          Submit
        </button>
      </form>
      {/* Table | Form change btn */}
      <SwapBtn />
    </section>
  );
}

export default Form;

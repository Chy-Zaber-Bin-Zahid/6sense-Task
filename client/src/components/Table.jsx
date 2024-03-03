import useTableHook from "../hooks/tableHook";
import SwapBtn from "./SwapBtn";

function Table() {
  const { userData } = useTableHook();

  return (
    <section className="flex flex-col justify-center items-center gap-2">
      {userData.length !== 0 ? (
        <table className="border-collapse border border-black bg-white text-left shadow-md">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Full Name</th>
              <th className="border border-gray-300 px-4 py-2">Options</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {userData.map((data, idx) => (
              <tr key={data.email} className="border border-gray-300">
                <td className="border border-gray-300 px-4 py-2">{`${data.firstName} ${data.lastName}`}</td>
                <td className="border border-gray-300 px-4 py-2">
                  Details Block Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Fetching Data...</p>
      )}

      <SwapBtn />
    </section>
  );
}

export default Table;

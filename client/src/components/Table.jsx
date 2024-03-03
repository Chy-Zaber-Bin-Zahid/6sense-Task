import useTableHook from "../hooks/tableHook";
import SwapBtn from "./SwapBtn";
import TableBtn from "./Table child/TableBtn";

function Table() {
  const { userData } = useTableHook();

  return (
    <section className="flex flex-col justify-center items-center gap-2 w-full">
      {userData.length !== 0 ? (
        <table className="border-collapse border border-black bg-white text-left shadow-md w-full">
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
                <TableBtn idx={idx} />
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Fetching Data...</p>
      )}
      {/* Change to form */}
      <SwapBtn />
    </section>
  );
}

export default Table;

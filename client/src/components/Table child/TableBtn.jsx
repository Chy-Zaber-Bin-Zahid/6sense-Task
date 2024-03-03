import { useMyContext } from "../../MyContext";
import useTableHook from "../../hooks/tableHook";

function TableBtn({ idx }) {
  const { handleStatus, buttonStatus, handleDelete, userData } = useTableHook();
  const { handleDetails } = useMyContext();

  return (
    <td className="border border-gray-300 px-4 py-2 ">
      <button
        onClick={() => handleDetails(userData[idx])}
        className="underline hover:text-gray-700 transition-all duration-300 mr-2"
      >
        Details
      </button>
      <button
        onClick={() => handleStatus(idx)}
        className="underline hover:text-gray-700 transition-all duration-300 mr-2"
      >
        {buttonStatus[idx] ? "Unblock" : "Block"}
      </button>
      <button
        onClick={() => handleDelete(userData[idx])}
        className="underline text-red-500 hover:text-red-600 transition-all duration-300"
      >
        Delete
      </button>
    </td>
  );
}

export default TableBtn;

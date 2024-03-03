import { IoMdClose } from "react-icons/io";
import { useMyContext } from "../MyContext";
import DetailsChange from "./Details child/DetailsChange";

function Details() {
  const { details, handleClose, detailsData } = useMyContext();

  return (
    <section
      className={`absolute inset-0 flex justify-center items-center backdrop-blur-sm ${
        !details && "hidden"
      } `}
    >
      <div className="bg-white p-4 pt-6 rounded-md shadow-md relative">
        <IoMdClose
          onClick={handleClose}
          className="absolute top-2 right-2 hover:rotate-180 cursor-pointer transition-all duration-300 hover:scale-110"
        />
        {detailsData.length === 0 ? (
          <p>Fetching data...</p>
        ) : (
          <>
            <h1>
              <b>Full Name:</b> {detailsData.firstName} {detailsData.lastName}
            </h1>
            <h1>
              <b>Email:</b> {detailsData.email}
            </h1>
            <h1>
              <b>Phone:</b> +88{detailsData.phone}
            </h1>
          </>
        )}

        <h1 className="text-center text-xl my-2 font-semibold">
          Change Details
        </h1>
        <DetailsChange />
      </div>
    </section>
  );
}

export default Details;

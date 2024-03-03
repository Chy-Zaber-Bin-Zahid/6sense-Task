import { useMyContext } from "../MyContext";
import Form from "./Form";
import Table from "./Table";

function Container() {
  const { change } = useMyContext();

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-green-400">
      <div className="m-auto w-96 ">
        {change === "form" ? <Form /> : <Table />}
      </div>
    </main>
  );
}

export default Container;

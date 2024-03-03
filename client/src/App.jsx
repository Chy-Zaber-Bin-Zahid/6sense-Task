import { MyProvider } from "./MyContext";
import Form from "./components/Form";

function App() {
  return (
    <MyProvider>
      <main className="flex flex-col items-center justify-center h-screen bg-green-400">
        <div className="max-w-[50rem] m-auto ">
          <Form />
        </div>
      </main>
    </MyProvider>
  );
}

export default App;

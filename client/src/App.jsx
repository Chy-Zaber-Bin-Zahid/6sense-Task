import { MyProvider } from "./MyContext";
import Container from "./components/Container";

function App() {
  
  return (
    <MyProvider>
      <Container />
    </MyProvider>
  );
}

export default App;

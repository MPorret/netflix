import "./App.css";
import data from "./assets/data.json";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Main data={data} />
    </>
  );
}

export default App;

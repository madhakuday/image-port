import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
// import Nav from "./components/Nav";
import HamburgerMenu from "./components/Nav";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <HamburgerMenu />

        <Card />
      </BrowserRouter>
    </>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
// import Nav from "./components/Nav";
import HamburgerMenu from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import SingalCard from "./components/SingalCard";
import RouteComp from "./Routes/Route";
function App() {
  return (
    <>
      <BrowserRouter>
        <RouteComp />
      </BrowserRouter>
    </>
  );
}

export default App;

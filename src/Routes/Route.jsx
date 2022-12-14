import React from "react";
import { Routes, Route } from "react-router";
import Card from "../components/Card";
import HamburgerMenu from "../components/Nav";
import SingalCard from "../components/SingalCard";
import TempNav from "../components/TempNav";

const RouteComp = () => {
  return (
    <div>
      {/* <HamburgerMenu /> */}
      <TempNav />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/card/:id" element={<SingalCard />} />
      </Routes>
    </div>
  );
};

export default RouteComp;

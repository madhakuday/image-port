import React from "react";
import { Routes, Route } from "react-router";
import Card from "../components/Card";
import HamburgerMenu from "../components/Nav";
import SingalCard from "../components/SingalCard";

const RouteComp = () => {
  return (
    <div>
      <HamburgerMenu />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/card/:id" element={<SingalCard />} />
      </Routes>
    </div>
  );
};

export default RouteComp;

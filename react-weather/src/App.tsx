import React from "react";
//import { Route } from "react-router-dom";
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import MonthStatistics from "./pages/MonthStatistics/MonthStatistics";
import Header from "./shared/header/Header";
import Popup from "./shared/Popup/Popup";

function App() {
  return (
    <div className="global-container">
      <Popup />
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/month-statistics" element={<MonthStatistics />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import "./globalStyles.css";

function App() {
  return (
    <div className="flex-col justify-around">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;

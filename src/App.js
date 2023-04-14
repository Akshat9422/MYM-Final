import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Midsection from "./components/Midsection";
import Rightsection from "./components/Rightsection";

const App = () => {
  return (
    <div className="body">
      <div className="left">
        <Sidebar />
      </div>
      <div className="middle">
        <Midsection />
      </div>
      <div className="right">
        <Rightsection />
      </div>
    </div>
  );
};

export default App;

import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";

function App() {
  console.log("App"); //1.

  useEffect(() => console.log("Effect"), []);

  //2.

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          onChange={console.log("IMG")} //1.
        />
        <div className="count">
          <button>+</button>
          {/* <p>{3.}</p>  */}
          <button>-</button>
        </div>
      </header>
    </div>
  );
}

export default App;

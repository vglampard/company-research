import logo from "./logo.png";
import "./App.css";
import { useState } from "react";

function App() {
  const [company, setCompany] = useState("");
  function handleChange(e) {
    setCompany(e.target.value);
    console.log("company:", company)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Enter company name</p>
        <input
          type="text"
          placeholder="company name here"
          onChange={handleChange}
        ></input>
        <button onClick={getLinkedIn}>LinkedIn</button>
      </header>
    </div>
  );
}

export default App;

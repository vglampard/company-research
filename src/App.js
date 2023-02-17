import logo from "./logo.png";
import "./App.css";
import { useState } from "react";
import ButtonsDisplay from "./ButtonsDisplay/ButtonsDisplay";
import ToolsDisplay from "./ToolsDisplay/ToolsDisplay";

function App() {
  const [company, setCompany] = useState("");
  function handleChange(e) {
    setCompany(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Enter company name and hit buttons for quick google results</p>
        <input
          type="text"
          placeholder="Company name here..."
          onChange={handleChange}
        ></input>

        <br></br>
        <div className="button-container">
         <ButtonsDisplay company = {company}/>
        </div>
        <div className = "tools-container">
<ToolsDisplay/>
        </div>
      </header>
    </div>
  );
}

export default App;

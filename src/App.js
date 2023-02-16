import logo from "./logo.png";
import "./App.css";
import { useState } from "react";
import { getLinkedIn } from "./searchFunctions/searchFunction";

function App() {
  const [company, setCompany] = useState("");
  function handleChange(e) {
    setCompany(e.target.value);
  }

  const TEXT_SEARCHES = {
    linkedin: "linkedIn" 
  }
const IMAGE_SEARCHES = {
favicon: "favicon"
}


  function search(company, e){
    window.open(`https://www.google.com/search?q=${company}+${e.currentTarget.value}`);
    console.log("button:", e.currentTarget.value)
  }

  function imageSearch(company, e){
    window.open(`https://www.google.com/search?q=${company}+${e.currentTarget.value}&tbm=isch`)
  }

  function searchAll(company, e){

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Enter company name and hit buttons for quick google results</p>
        <input
          type="text"
          placeholder="company name here"
          onChange={handleChange}
        ></input>
        <button onClick = {()=>searchAll(company)}>Get all! </button>
        <br></br>
        <button onClick={(e)=>search(company, e)} value="linkedIn">LinkedIn</button>
        <button onClick={(e)=>search(company, e)} value="crunchbase">Crunchbase</button>
        <button onClick={(e)=>search(company, e)} value="glassdoor">Glassdoor</button>
        <button onClick={(e)=>imageSearch(company, e)} value=
        "logo+high+resolution+transparent+background+svg">Logo</button>
             <button onClick={(e)=>imageSearch(company, e)} value=
        "favicon">Favicon</button>

        </header>
    </div>
  );
}

export default App;

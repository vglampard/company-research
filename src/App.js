import logo from "./logo.png";
import "./App.css";
import { useState } from "react";

function App() {
  const [company, setCompany] = useState("");
  function handleChange(e) {
    setCompany(e.target.value);
  }

  function search(company, e, param) {
    window.open(
      `https://www.google.com/search?q=${company}+${e.currentTarget.value}${param}`
    );
  }


  // TEST: render buttons from object
  const SEARCHES = {
    Linkedin: ["linkedIn", (e) => search(company, e)],
    Crunchbase: ["crunchbase", (e) => search(company, e)],
    Glassdoor: ["glassdoor", (e) => search(company, e)],
    Logo: [
      "logo+high+resolution+transparent+background+svg",
      (e) => search(company, e, "&tbm=isch"),
    ],
    Favicon: ["favicon", (e) => search(company, e, "&tbm=isch")],
    News: ["news", (e) => search(company, e, "&tbm=nws")],
    Founders: ["founders", (e) => search(company, e)],
    Address: ["company+legal+address+hq", (e) => search(company, e)],
    Mission: ["company+mission", (e) => search(company, e)],
    Values: ["company+values", (e) => search(company, e)],
    Benefits: ["employee+benefits", (e) => search(company, e)],
  };

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

        <br></br>
        <div className="button-container">
          {Object.keys(SEARCHES).map((searchTerm, i) => (
            <>
              <button
                key={i}
                value={SEARCHES[searchTerm][0]}
                onClick={SEARCHES[searchTerm][1]}
              >
                {" "}
                {searchTerm}
              </button>
            </>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;

import logo from "./logo.png";
import "./App.css";
import { useState } from "react";
import { getLinkedIn } from "./searchFunctions/searchFunction";

function App() {
  const [company, setCompany] = useState("");
  function handleChange(e) {
    setCompany(e.target.value);
  }

  function search(company, e) {
    window.open(
      `https://www.google.com/search?q=${company}+${e.currentTarget.value}`
    );
  }

  function imageSearch(company, e) {
    window.open(
      `https://www.google.com/search?q=${company}+${e.currentTarget.value}&tbm=isch`
    );
  }

  function newsSearch(company, e) {
    window.open(`https://www.google.com/search?q=${company}&tbm=nws`);
  }

  // TEST: render buttons from object
  const SEARCHES = {
    Linkedin: ["linkedIn", (e) => search(company, e)],
    Crunchbase: ["crunchbase", (e) => search(company, e)],
    Glassdoor: ["glassdoor", (e) => search(company, e)],
    Logo: [
      "logo+high+resolution+transparent+background+svg",
      (e) => imageSearch(company, e),
    ],
    Favicon: ["favicon", (e) => imageSearch(company, e)],
    News: ["news", (e) => newsSearch(company, e)],
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

// <button onClick={(e) => newsSearch(company, e)} value="news">
// News
// </button>
// <button onClick={(e) => search(company, e)} value="founders">
// Founders
// </button>
// <button onClick={(e) => search(company, e)} value="company+address+hq">
// Address
// </button>
// <button onClick={(e) => search(company, e)} value="mission">
// Mission
// </button>
// <button onClick={(e) => search(company, e)} value="values">
// Values
// </button>
// <button onClick={(e) => search(company, e)} value="employee+benefits">
// Benefits
// </button>

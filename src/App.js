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

    function searchAll(company){
  // take company from input
  // call search for every string value in the text search object
  // call image search for every string value in image search object

  // for (const searchTerm in TEXT_SEARCHES){
  //   setTimeout(function(){window.open(`https://www.google.com/search?q=${company}+${searchTerm}&tbm=isch`);
  // console.log("ST:", searchTerm)}, 1000)
  // }
    }

// TEST: render buttons from object 
const SEARCHES = {
  linkedin: ["linkedIn",(e) => search(company, e)] ,
  crunchbase: ["crunchbase",(e) => search(company, e)],
  glassdoor: ["glassdoor",(e) => search(company, e)]
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
        
{Object.keys(SEARCHES).map((searchTerm, i)=>(
  <>
  {console.log("fc:", SEARCHES[searchTerm][1])}
  <button key={i}> {searchTerm}</button>
  </>
))}
        <br></br>
        <div className="button-container">
 
        </div>
      </header>
    </div>
  );
}

export default App;


{/* <button onClick={(e) => search(company, e)} value="linkedIn">
LinkedIn
</button>
<button onClick={(e) => search(company, e)} value="crunchbase">
Crunchbase
</button>
<button onClick={(e) => search(company, e)} value="glassdoor">
Glassdoor
</button>
<button
onClick={(e) => imageSearch(company, e)}
value="logo+high+resolution+transparent+background+svg"
>
Logo
</button>
<button onClick={(e) => imageSearch(company, e)} value="favicon">
Favicon
</button>
<button onClick={(e) => newsSearch(company, e)} value="news">
News
</button>
<button onClick={(e) => search(company, e)} value="founders">
Founders
</button>
<button onClick={(e) => search(company, e)} value="company+address+hq">
Address
</button>
<button onClick={(e) => search(company, e)} value="mission">
Mission
</button>
<button onClick={(e) => search(company, e)} value="values">
Values
</button>
<button onClick={(e) => search(company, e)} value="employee+benefits">
Benefits
</button> */}

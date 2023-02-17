import React from "react";

export default function ButtonsDisplay({ company }) {
  
  // Object containing search parameters/queries that is mapped over to create buttons with correct onClick functions and values
  const SEARCHES = {
    Linkedin: ["linkedin", ""],
    Crunchbase: ["crunchbase", ""],
    Glassdoor: ["glassdoor", ""],
    Logo: ["logo+high+resolution+transparent+background+svg", "&tbm=isch"],
    Favicon: ["favicon", "&tbm=isch"],
    News: ["news", "&tbm=nws"],
    Founders: ["all+founders", ""],
    Address: ["company+legal+address+hq", ""],
    Mission: ["company+mission", ""],
    Values: ["company+values", ""],
    Benefits: ["employee+benefits", ""],
  };

  // function that uses values taken from input (company name) and button (additional search terms and search type parameter) to open google window with basic/news/image search results.
  function search(company, e, param) {
    window.open(
      `https://www.google.com/search?q=${company}+${e.currentTarget.value}${param}`
    );
  }

  // Return set of buttons that each run a different kind of google search on the company name
  return (
    <div>
      {Object.keys(SEARCHES).map((searchTerm, i) => (
        <>
          <button
            key={i}
            value={SEARCHES[searchTerm][0]}
            onClick={(e) => search(company, e, SEARCHES[searchTerm][1])}
          >
            {" "}
            {searchTerm}
          </button>
        </>
      ))}
    </div>
  );
}

import React from "react";
import { GOOGLE_URL } from "../constants/constants";
export default function ButtonsDisplay({ company }) {
  
  // Object containing search parameters/queries that is mapped over to create buttons with correct onClick functions and values
  const SEARCHES = {
    Linkedin: ["linkedin", ""],
    Crunchbase: ["crunchbase", ""],
    Glassdoor: ["glassdoor", ""],
    Logo: ["logo+high+resolution+transparent+background+svg", "&tbm=isch"],
    Favicon: ["favicon+transparent+background", "&tbm=isch"],
    News: ["company+news", "&tbm=nws"],
    Founders: ["all+founders", ""],
    Address: ["company+legal+address+hq", ""],
    Mission: ["company+mission", ""],
    Values: ["company+values", ""],
    Benefits: ["employee+benefits+perks", ""],
    Controversies: ["controversy+scandal+issues", ""]
  };

  // function that uses values taken from input (company name) and button (additional search terms and search type parameter) to open google window with basic/news/image search results.
  function search(company, additionalStrings, param) {
    const searchString = `${company}+${additionalStrings}`
    window.open(
      GOOGLE_URL+searchString+param
    );
  }

// turn object into array of objects
// change object content to three kvs
// turn object.keys.map into normap arraay.map 
// change searchType param into optional param in the search function 
// change what e.target.value is passed down as 
// combine company & additional string into single variable to putin URL 
// pull out google uRL into its own config variable


  // Return set of buttons that each run a different kind of google search on the company name
  return (
    <div>
      {Object.keys(SEARCHES).map((searchTerm, i) => (
        <>
          <button
            key={i}
            value={SEARCHES[searchTerm][0]}
            onClick={(e) => search(company, e.target.value, SEARCHES[searchTerm][1])}
          >
            {" "}
            {searchTerm}
          </button>
        </>
      ))}
    </div>
  );
}

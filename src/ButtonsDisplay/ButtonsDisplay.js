import React from "react";
import { GOOGLE_URL, SEARCHES } from "../constants/constants";

export default function ButtonsDisplay({ company }) {
  // Object containing search parameters/queries that is mapped over to create buttons with correct onClick functions and values
  // const SEARCHES = {
  //   Linkedin: ["linkedin", ""],
  //   Crunchbase: ["crunchbase", ""],
  //   Glassdoor: ["glassdoor", ""],
  //   Logo: ["logo+high+resolution+transparent+background+svg", "&tbm=isch"],
  //   Favicon: ["favicon+transparent+background", "&tbm=isch"],
  //   News: ["company+news", "&tbm=nws"],
  //   Founders: ["all+founders", ""],
  //   Address: ["company+legal+address+hq", ""],
  //   Mission: ["company+mission", ""],
  //   Values: ["company+values", ""],
  //   Benefits: ["employee+benefits+perks", ""],
  //   Controversies: ["controversy+scandal+issues", ""]
  // };
// the searchType param is now oprional




  // function that uses values taken from input (company name) and button (additional search terms and search type parameter) to open google window with basic/news/image search results.
  function search(company, additionalStrings, searchType="") {
    const searchString = `${company}+${additionalStrings}`
    window.open(
      GOOGLE_URL+searchString+searchType
    );
  }

// turn object into array of objects
// put in constants file and im/export
// change object content to three kvs
// turn object.keys.map into normap arraay.map 
// change searchType param into optional param in the search function 


  // Return set of buttons that each run a different kind of google search on the company name
  return (
    <div>
      {SEARCHES.map((search, i) => (

        <>
          <button
            key={i}
            value={search.searchTerms}
            onClick={(e) => search(company, e.target.value, search.searchType)}
          >
            {" "}
            {search.buttonText}
          </button>
        </>
      ))}
    </div>
  );
}

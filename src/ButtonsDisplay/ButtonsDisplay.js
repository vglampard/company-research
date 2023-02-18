import React from "react";
import { GOOGLE_URL, SEARCHES } from "../constants/constants";

export default function ButtonsDisplay({ company }) {
  // function that uses values taken from input (company name) and button (additional search terms and search type parameter) to create google search URL. Opens google window with basic/news/image search results.
  function search(company, additionalStrings, searchType = "") {
    const searchString = `${company}+${additionalStrings}`;
    window.open(GOOGLE_URL + searchString + searchType);
  }

  // Return set of buttons that each run a different kind of google search on the company name
  return (
    <div>
      {SEARCHES.map((button, i) => (
        <>
          <button
            key={i}
            value={button.searchTerms}
            onClick={(e) => search(company, e.target.value, button.searchType)}
          >
            {button.buttonText}
          </button>
        </>
      ))}
    </div>
  );
}

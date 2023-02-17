import React from "react";

export default function ButtonsDisplay({ company }) {
  function search(company, e, param) {
    window.open(
      `https://www.google.com/search?q=${company}+${e.currentTarget.value}${param}`
    );
  }

  // Object containing
  const SEARCHES = {
    Linkedin: ["linkedin", ""],
    Crunchbase: ["crunchbase",  ""],
    Glassdoor: ["glassdoor", ""],
    Logo: [
      "logo+high+resolution+transparent+background+svg",
     "&tbm=isch",
    ],
    Favicon: ["favicon", "&tbm=isch"],
    News: ["news", "&tbm=nws"],
    Founders: ["founders", ""],
    Address: ["company+legal+address+hq", ""],
    Mission: ["company+mission", ""],
    Values: ["company+values",  ""],
    Benefits: ["employee+benefits",  ""],
  };

  return (
    <div>
      {Object.keys(SEARCHES).map((searchTerm, i) => (
        <>
          <button
            key={i}
            value={SEARCHES[searchTerm][0]}
            // onClick={SEARCHES[searchTerm][1]}
            onClick={ (e) => search(company, e, SEARCHES[searchTerm][1])}
          >
            {" "}
            {searchTerm}
          </button>
        </>
      ))}
    </div>
  );
}

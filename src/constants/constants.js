// Base URL fragment for the google search
export const GOOGLE_URL = "https://www.google.com/search?q=";

// Object used to create buttons that add extra terms and parameters to the search URL
export const SEARCHES = [
  {
    buttonText: "LinkedIn",
    searchTerms: "linkedin",
  },

  {
    buttonText: "Crunchbase",
    searchTerms: "crunchbase",
  },
  {
    buttonText: "Glassdoor",
    searchTerms: "glassdoor",
  },
  {
    buttonText: "Logo",
    searchTerms: "logo+high+resolution+transparent+background+svg",
    searchType: "&tbm=isch",
  },
  {
    buttonText: "Favicon ",
    searchTerms: "favicon+transparent+background",
    searchType: "&tbm=isch",
  },
  {
    buttonText: "News",
    searchTerms: "company+news",
    searchType: "&tbm=nws",
  },
  {
    buttonText: "Founders",
    searchTerms: "all+founders",
  },
  {
    buttonText: "Address",
    searchTerms: "company+legal+address+hq",
  },
  {
    buttonText: "Mission",
    searchTerms: "company+mission",
  },
  {
    buttonText: "Values",
    searchTerms: "company+values",
  },
  {
    buttonText: "Benefits",
    searchTerms: "employee+benefits+perks",
  },
  {
    buttonText: "Controversies",
    searchTerms: "controversy+scandal+issues",
  },
];

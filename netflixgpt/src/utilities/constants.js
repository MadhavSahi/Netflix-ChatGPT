export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+process.env.REACT_APP_TMBD_API,
  },
};
export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w300";

// export const OPEN_AI_API_KEY="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";
export const OPEN_AI_API_KEY=process.env.REACT_APP_OPEN_AI;

export const languages = {
  english: {
    search: "Search",
    placeholdertext: "Search : Retro hindi movies",
    greettext:"Welcome",
    signouttext:"Sign Out",
    homepagetext:"Home Page",
    selectLanguagetext:"Select Language",
  },
  hindi: {
    search: "खोज करें",
    placeholdertext: "खोज करें : रेट्रो हिंदी चलचित्र",
    greettext:"नमस्ते",
    signouttext:"साइन आउट",
    homepagetext:"होम पेज",
    selectLanguagetext:"भाषा चुने",
  },
  punjabi:{
    search:"ਖੋਜ",
    placeholdertext:"ਖੋਜ: ਰੀਟਰੋ ਹਿੰਦੀ ਫਿਲਮਾਂ",
    greettext:"ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ",
    signouttext:"ਸਾਇਨ ਆਉਟ",
    homepagetext:"ਮੁੱਖ ਪੰਨਾ",
    selectLanguagetext:"ਭਾਸ਼ਾ ਚੁਣੋ",
  }
};

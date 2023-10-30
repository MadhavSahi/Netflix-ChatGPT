export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      // process.env.REACT_APP_TMBD_API,
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjZiY2I5NTVlN2RmNWQ1YjVkOTY5MWY4YTE2NjRlOSIsInN1YiI6IjY1Mzk1MDkxZWM0NTUyMDBlYTRkM2UzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Mv91DmUgrOvtomI5D-cyzOc2T4Tkj4ZwTGTwYiyc4DE",
  },
};
export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w300";

// export const OPEN_AI_API_KEY="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";
export const OPEN_AI_API_KEY=process.env.REACT_APP_OPEN_AI;

export const languages = {
  english: {
    search: "Search",
    placeholdertext: "Search: retro hindi movies",
    greettext:"Welcome",
    signouttext:"Sign Out",
    homepagetext:"Home Page",
    selectLanguagetext:"Language",
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

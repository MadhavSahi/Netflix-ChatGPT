import React from "react";
import UserIcon from "../images/Netflix-avatar.png";
import { auth } from "../utilities/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
// import LoadingSpinner from "./LoadingSpinner";
import usePopularMovies from "../customHooks/usePopularMovies";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import { gptBtnToggle } from "../utilities/gptSlice";
import GPTContainer from "./GPTContainer";
import { languageSelectFxn } from "../utilities/languageSlice";
import { languages } from "../utilities/constants";

const Browse = () => {
  //custom hook
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userSelector = useSelector((store) => store?.user);
  const gptBtnSelector = useSelector((store) => store?.gpt?.gptBtnState);
  const languageSelector = useSelector(
    (store) => store?.language?.languageSelect
  );

  const handleSignOutBtn = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };
  const handleGPTBtn = (e) => {
    dispatch(gptBtnToggle()); //will toggle false->true and vv

    dispatch(languageSelectFxn("english"));
  };
  const handleLanguageChange = (e) => {
    // setSelectedLanguage(e.target.value);
    dispatch(languageSelectFxn(e.target.value));
  };
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between md:px-4 gap-0 bg-gradient-to-t from-black pb-5 md:pb-0">
          <Header />
        {userSelector?.displayName && (
          <p className="text-black text-4xl md:py-8 font-semibold">
            {languages?.[languageSelector]?.greettext}, {" "}
            {userSelector?.displayName}
          </p>
        )}
        <div className="flex flex-row my-5 gap-2">
          {gptBtnSelector && (
            <div className="flex flex-col gap-1">
              <label className="font-semibold mt-0 md:mt-0" htmlFor="languageSelect">
                {languages?.[languageSelector]?.selectLanguagetext}
              </label>
              <select
                className="bg-gray-400 font-semibold text-white"
                id="languageSelect"
                // value={selectedLanguage}
                onChange={handleLanguageChange}
              >
                {/* <option value="">Select a language</option> */}
                <option className="bg-black" default="english" value="english">
                  English
                </option>
                <option className="bg-black" value="hindi">
                  Hindi
                </option>
                <option className="bg-black" value="punjabi">
                  Punjabi
                </option>
              </select>
            </div>
          )}

          <button
            onClick={handleGPTBtn}
            className="bg-purple-800 text-white w-24 h-12 mt-2 font-bold hover:scale-90"
            // >{!gptBtnSelector ? "GPT Search" : "Home Page"}
          >
            {!gptBtnSelector
              ? "GPT Search"
              : languages?.[languageSelector]?.homepagetext}
          </button>
          <img className="w-20 h-16" src={UserIcon} alt="logo-user" />
          <button
            onClick={handleSignOutBtn}
            className="bg-red-500 w-20 h-12 text-white mt-2 hover:scale-90 font-bold"
          >
            {languages?.[languageSelector]?.signouttext}
          </button>
        </div>
      </div>
      {gptBtnSelector ? (
        <>
          <GPTContainer />
        </>
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
};
export default Browse;

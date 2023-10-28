import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gptMoviesAdd, gptSearchQueryByUserFxn } from "../utilities/gptSlice";
import { languages } from "../utilities/constants";
import { openai } from "../utilities/openAI";
import GPTMovies from "./GPTMovies";

const GPTContainer = () => {
  const languageSelector = useSelector(
    (store) => store?.language?.languageSelect
  );
  const gptQueryText = useRef(null);
  const dispatch = useDispatch();
  const handleGPTSearchBtn = async (e) => {
    e.preventDefault();
    dispatch(gptSearchQueryByUserFxn(gptQueryText.current.value));
    const PROMPT_GOOD =
      "Act as a movie recommendation system and give result for " +
      gptQueryText.current.value +
      ". Give 10 results in comma separted values like Movie 1,  Movie 2, Movie 3, Movie 4, Movie 5, Movie 6,  Movie 7, Movie 8, Movie 9, Movie 10. Don't add any extra text";
    // console.log(gptQueryText.current.value);
    // console.log(PROMPT_GOOD);
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: PROMPT_GOOD }],
      model: "gpt-3.5-turbo",
    });
    dispatch(gptMoviesAdd(chatCompletion.choices[0]?.message?.content));
    // console.log(chatCompletion.choices[0]?.message?.content);
  };
  return (
    <>
      {/* <p className="text-center">GPT CONTAINER</p> */}
      <div className="bg-bgBody h-[100vh] bg-cover bg-repeat">
      <div className=" text-white flex flex-col justify-center items-center p-5 gap-5">
        <form className="flex flex-row gap-5">
          <input
            ref={gptQueryText}
            type="text"
            // placeholder="Search : Retro hindi movies"
            placeholder={languages?.[languageSelector]?.placeholdertext}
            className="py-3 px-6 w-60 text-black rounded-md"
          />
          <button
            onClick={handleGPTSearchBtn}
            className="bg-gray-500 text-white py-2 px-5 font-bold text-xl rounded-md hover:scale-95"
          >
            {/* Search GPT */}
            {languages?.[languageSelector]?.search}
          </button>
        </form>
      </div>
      <GPTMovies />
      </div>
    </>
  );
};

export default GPTContainer;
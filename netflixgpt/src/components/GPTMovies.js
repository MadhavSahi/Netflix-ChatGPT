// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import MovieLists from "./MovieLists";
// import { API_OPTIONS } from "../utilities/constants";
// import { gptFinalMoviesArrayofObj } from "../utilities/gptSlice";
// import MovieCard from "./MovieCard";

// const GPTMovies = () => {
//   const dispatch = useDispatch();
//   const moviesArrayofObjSelector = useSelector(
//     (store) => store?.gpt?.gptFinalMoviesArrayofObj
//   );

//   const gptMoviesSelectorString = useSelector(
//     (store) => store?.gpt?.gptResultMovies
//   );
//   if (!gptMoviesSelectorString || !moviesArrayofObjSelector) {
//     return;
//   }

//   const String_To_Array = gptMoviesSelectorString.split(",");
//   console.log(gptMoviesSelectorString);
//   console.log(String_To_Array);
//   const GET_MOVIE_BY_NAME_FROM_ARRAY = async (each_movie) => {
//     // const result = await fetch(
//     //   "https://api.themoviedb.org/3/search/movie?query=deadpool?include_adult=false&language=en-US&page=1",
//     //   API_OPTIONS
//     const result = await fetch(
//       "https://api.themoviedb.org/3/search/movie?query=" +
//         each_movie +
//         "&include_adult=false&language=en-US&page=1",
//       API_OPTIONS
//     );
//     const json = await result.json();
//     return json.results;
//     // console.log(json);
//   };
//   //   useEffect(() => {
//   const PROMISE_ARRAY = String_To_Array.map((each_movie) =>
//     GET_MOVIE_BY_NAME_FROM_ARRAY(each_movie)
//   );
//   let newArray=null;
//   // console.log(PROMISE_ARRAY);
//   const resolvePromises = async () => {
//     const RESOLVED_PROMISES_ARRAY = await Promise.all(PROMISE_ARRAY);
//     const extractFields = (each_movie) => {
//       return {
//         title: each_movie?.title,
//         poster_path: each_movie?.poster_path,
//       };
//     };

//     // Use the map method to create a new array of objects with the desired fields
//      newArray = RESOLVED_PROMISES_ARRAY.flatMap((group) => {
//       return group.map((each_movie) => extractFields(each_movie));
//     });
//     dispatch(gptFinalMoviesArrayofObj(newArray));
//     // const moviesArray=RESOLVED_PROMISES_ARRAY.map((each_array)=>each_array.map(each_array_2)=>())
//     console.log(RESOLVED_PROMISES_ARRAY);
//     // console.log(RESOLVED_PROMISES_ARRAY[1]);
//     console.log(newArray);
//   };
//   resolvePromises();
//   //   }, [gptMoviesSelectorArray]);
//   return (
//     <>
//       <div className="py-3 mx-2 flex flex-col gap-2">
//         {/* <p className="text-5xl text-white font-semibold p-3">{title}</p> */}
//         <div className="flex flex-row gap-5 mx-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden ">
//           {newArray && newArray.map((each_movie, index) => {
//             return <MovieCard key={each_movie?.id} movie={each_movie} />;
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default GPTMovies;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utilities/constants";
import { gptFinalMoviesArrayofObj } from "../utilities/gptSlice";
import MovieCardGPT from "./MovieCardGPT";

const GPTMovies = ({ inputText }) => {
  const dispatch = useDispatch();
  const gptMoviesSelectorString = useSelector(
    (store) => store?.gpt?.gptResultMovies
  );
  const finalmoviesArrayofObj = useSelector(
    (store) => store?.gpt?.gptFinalMoviesArrayofObj
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (gptMoviesSelectorString) {
      const GET_MOVIE_BY_NAME_FROM_ARRAY = async (each_movie) => {
        try {
          // console.log(each_movie);
          const result = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=" +
              each_movie +
              "&include_adult=false&language=en-US&page=1",
            API_OPTIONS
          );
          const json = await result.json();
          const filteredMovieArray = json.results.filter((each_obj) => each_obj.title === each_movie);

          // console.log(filteredMovieArray);
          // console.log(filteredMovieArray);
          // return json.results;
          return filteredMovieArray;
        } catch (error) {
          // console.error("Error fetching movie data:", error);
          return [];
        }
      };

      const String_To_Array = gptMoviesSelectorString.split(",");
      const PROMISE_ARRAY = String_To_Array.map((each_movie) =>
        GET_MOVIE_BY_NAME_FROM_ARRAY(each_movie)
      );

      const resolvePromises = async () => {
        const RESOLVED_PROMISES_ARRAY = await Promise.all(PROMISE_ARRAY);
        // console.log(RESOLVED_PROMISES_ARRAY);

        const extractFields = (each_movie) => ({
          title: each_movie?.title,
          poster_path: each_movie?.poster_path,
        });

        if (Array.isArray(RESOLVED_PROMISES_ARRAY)) {
          const newArray = RESOLVED_PROMISES_ARRAY.flat()
            .filter(
              (each_movie) => each_movie?.title && each_movie?.poster_path
            ) // Filter valid objects
            .map((each_movie) => extractFields(each_movie));
          // console.log(newArray);
          // const OBJS_WITH_EXACT_NAMES = newArray.find(
          //   (obj) =>
          //     // obj.name === "Official Trailer" ||
          //     // obj.name === "Final Trailer" ||
          //     // obj.name === "Official Teaser" ||
          //     obj.title === "Trailer"
          // );
          dispatch(gptFinalMoviesArrayofObj(newArray));
          setLoading(false);
        } else {
          // console.error("RESOLVED_PROMISES_ARRAY is not an array.");
          setLoading(false);
        }
      };

      resolvePromises();
    }
    // eslint-disable-next-line
  }, [gptMoviesSelectorString]);
  // console.log(finalmoviesArrayofObj);
  // console.log(inputText);

  return (
    <>
      {inputText && (
        <p className="text-white pt-3 pb-7 text-center bg-black font-bold text-3xl">
          {inputText} -:
        </p>
      )}
      <div className="mx-0 flex flex-col gap-2 pb-16">
        <div className="flex flex-row gap-5 bg-bgBody py-0 flex-wrap justify-center overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {loading ? (
            <p className="text-black w-1/3 text-4xl font-semibold bg-white text-center"></p>
          ) : finalmoviesArrayofObj.length === 0 ? (
            <p className="text-black w-1/3 text-4xl font-semibold bg-white text-center">
              No movies found.
            </p>
          ) : (
            finalmoviesArrayofObj.map((each_movie, index) => (
              <MovieCardGPT key={index} movie={each_movie} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default GPTMovies;

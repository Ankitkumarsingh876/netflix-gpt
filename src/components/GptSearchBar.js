import React, { useRef } from "react";
import lang from "../utils/LangauageConstants";
import { useDispatch, useSelector } from "react-redux";
import gemini from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";
import { addGeminiMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
   

    const geminiQuery =
      "Act as a movie Recommendation system suggest some movies for query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example giving ahed. Example Result: gadar, sholay, Don , Golmaal , koi mil gaya";

    const geminiResult = await gemini.models.generateContent({
      model: "gemini-2.5-flash",
      contents: geminiQuery,
    });

    if (!geminiResult.text) {
      // todo array
    }
    
    const geminiMovies = geminiResult.text.split(",");

    const promiseArray = geminiMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResult = await Promise.all(promiseArray);
    

    dispatch(addGeminiMovieResult({moviesName:geminiMovies, moviesResult: tmdbResult}));
  };

  return (
    <div className="pt-[45%] md:pt-[10%] flex justify-center">
      <form
        className=" w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
     <>
     <div className="fixed inset-0 -z-10">
        <img className="w-full h-screen object-cover"
          src= {BG_URL}
          alt="Background"
        />
     </div>
    <div className="">
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
    </>
  );
};

export default GptSearch;

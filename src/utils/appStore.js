import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "../utils/userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice"


const appStore = configureStore({

    reducer: {
        user: useReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        config: configReducer,
    },

})

export default appStore; 
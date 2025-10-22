import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "../utils/userSlice";
import moviesReducer from "./moviesSlice";


const appStore = configureStore({

    reducer: {
        user: useReducer,
        movies: moviesReducer,
    },

})

export default appStore; 
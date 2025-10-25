import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addNowPlayingMovies } from "../../utils/moviesSlice";
import { use, useEffect } from "react";

const useNowPlayingMovies = () => {

  const dispatch = useDispatch();
  const NowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);
  
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() =>{
    if(!NowPlayingMovies) getNowPlayingMovies();
    
  }, []);

} 

export default useNowPlayingMovies;
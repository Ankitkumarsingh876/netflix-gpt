import { useEffect } from "react";
import { addTrailerVideo } from "../../utils/moviesSlice";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailor = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector(store => store.movie.trailerVideo);
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter((video) => (video.type === "Trailer"));
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailor;

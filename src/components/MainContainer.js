import { useSelector } from 'react-redux'
import VideosTitle from './VideosTitle';
import VideosBackground from './VideosBackground';


const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if(!movies)  return;

    const mainMovie = movies[0];
   

    const {orginal_title,overview, id } = mainMovie;
    return (
    <div className="pt-[30%] bg-black md:pt-0">
        <VideosTitle title={orginal_title} overview={overview}/>
        <VideosBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
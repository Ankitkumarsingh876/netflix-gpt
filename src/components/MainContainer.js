import { useSelector } from 'react-redux'
import VideosTitle from './VideosTitle';
import VideosBackground from './VideosBackground';


const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if(!movies)  return;

    const mainMovie = movies[0];
    console.log(mainMovie);

    const {orginal_title,overview, id } = mainMovie;
    return (
    <div>
        <VideosTitle title={orginal_title} overview={overview}/>
        <VideosBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
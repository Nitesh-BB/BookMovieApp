
import React,{useEffect,useState} from "react"
import Header from "../../common/header/Header"
import "./Home.css"
import Grid from "./Grid"
import ReleasedMovies from "./ReleasedMovies"
const Home = ({baseUrl}) => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [releasedMovies, setReleasedMovies] = useState([]);
  useEffect(() => {

    const fetchMovies = async () => {
      const response = await fetch(baseUrl + "/movies?page=1&limit=17");
      const data = await response.json()
      const upComingMovies = data.movies.filter((movie) => movie.status === "PUBLISHED");
      setUpcomingMovies(upComingMovies);
       const released = data.movies.filter(
         (movie) => movie.status === "RELEASED"
      );
      setReleasedMovies(released);
    }
    fetchMovies();
    
  },[])
    return (
      <div className="home__container">
        <Header />
        <div className="home__content">
          <div className="home__heading">Upcoming Movies</div>
          <Grid upComingMovies={upcomingMovies} />
          <ReleasedMovies baseUrl={baseUrl} releasedMovies={releasedMovies} />
        </div>
      </div>
    );
}

export default Home;
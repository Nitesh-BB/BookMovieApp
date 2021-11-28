import React, { useEffect, useState } from "react";
import Header from "../../common/header/Header";
import "./Home.css";
import Grid from "./Grid";
import ReleasedMovies from "./ReleasedMovies";
const Home = ({ baseUrl }) => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [releasedMovies, setReleasedMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(baseUrl + "/movies?page=1&limit=17");
      const data = await response.json();
      const upComingMovies = data.movies.filter(
        (movie) => movie.status === "PUBLISHED"
      );
      setUpcomingMovies(upComingMovies);
      const released = data.movies.filter(
        (movie) => movie.status === "RELEASED"
      );
      setReleasedMovies(released);
      setFilteredMovies(released);
    };
    fetchMovies();
  }, []);

  const filterMovies = (filterObject) => {
    const { name, artists, generes, releasedStartDate, releasedEndDate } =
      filterObject;

    let filtered = releasedMovies;

    if (name) {
      filtered = releasedMovies.filter((movie) =>
        movie.title.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (generes.length > 0) {
      filtered = filtered.filter((movie) =>
        movie.genres.some((genre) => generes.includes(genre))
      );
    }
    if (artists.length > 0) {
      filtered = filtered.filter((movie) =>
        movie.artists.some((artist) =>
          artists.includes(`${artist.first_name} ${artist.last_name}`)
        )
      );
    }

    if (releasedStartDate) {
      filtered = filtered.filter(
        (movie) =>
          Date.parse(movie.release_date) >= Date.parse(releasedStartDate)
      );
    }
    if (releasedEndDate) {
      filtered = filtered.filter(
        (movie) => Date.parse(movie.release_date) < Date.parse(releasedEndDate)
      );
    }

    setFilteredMovies(filtered);
  };
  return (
    <div className="home__container">
      <Header baseUrl={baseUrl} />
      <div className="home__content">
        <div className="home__heading">Upcoming Movies</div>
        <Grid upComingMovies={upcomingMovies} />
        <ReleasedMovies
          baseUrl={baseUrl}
          releasedMovies={filteredMovies}
          filterMovies={filterMovies}
        />
      </div>
    </div>
  );
};

export default Home;

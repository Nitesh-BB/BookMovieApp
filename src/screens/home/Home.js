
import React from "react"
import Header from "../../common/header/Header"
import "./Home.css"
import Grid from "./Grid"
import ReleasedMovies from "./ReleasedMovies"
const Home = () => {
    console.log("Home")
    return (
      <div className="home__container">
        <Header />
        <div className="home__content">
          <div className="home__heading">
            Upcoming Movies
          </div>
          <Grid />
          <ReleasedMovies />
        </div>
      </div>
    );
}

export default Home;
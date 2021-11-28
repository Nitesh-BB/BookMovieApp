import React,{useState,useEffect} from "react";
import Header from "../../common/header/Header";
import { useParams } from "react-router-dom";
import "./Details.css"
import { Typography } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import YouTube from "react-youtube";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
const Details = ({baseUrl}) => {
  const { id } = useParams();
  const [rating, setRating] = useState(0);
    const [details, setDetails] = useState({});
  const [videoId, setVideoId] = useState("");
  const handleRating = (rate) => {
    setRating(rate);
    // Some logic
  };
    useEffect(() => {

        const fetchMovieDetails = async () => {
            const response = await fetch(baseUrl + `movies/${id}`);
            const data = await response.json();
            setDetails(data);
            const videoCode = data.trailer_url.split("v=")[1].split("&")[0];
            setVideoId(videoCode);

        }
        fetchMovieDetails();

        
    },[id])
    return (
      <div>
        <Header movieId={id} baseUrl={baseUrl} />
        <Typography className="details__goBack">
          <Link to={"/"}>&#60; Back to Home</Link>
        </Typography>
        <div className="details__container">
          <section className="details__left">
            <img src={details.poster_url} />
          </section>
          <section className="details__center">
            <Typography variant="h2">{details.title}</Typography>
            <Typography>
              <b>Genres </b> : {details?.genres?.join(", ")}
            </Typography>
            <Typography>
              <b>Duration </b> : {details?.duration}
            </Typography>
            <Typography>
              <b>Release Date </b> :{" "}
              {new Date(details?.release_date).toDateString()}
            </Typography>
            <Typography>
              <b>Rating </b> : {details?.rating}
            </Typography>

            <div style={{ marginTop: 16 }}>
              <b>Plot </b> :{" "}
              <span>
                <a href={details.wiki_url}>Wiki Link</a> {details.storyline}
              </span>
            </div>
            <div style={{ marginTop: 16 }}>
              <b>Trailer </b> :{" "}
              <span>
                <YouTube videoId={videoId} />
              </span>
            </div>
          </section>
          <section className="details__right">
            <Rating
              onClick={handleRating}
              ratingValue={rating} 
            />
            <div style={{ marginTop: 16, marginBottom: 16 }}>Artists</div>

            <ImageList cols={2} rowHeight={160}>
              {details.artists?.length > 0 &&
                details.artists.map((item) => (
                  <ImageListItem key={item.id}>
                    <img
                      style={{ objectFit: "cover", height: 100 }}
                      src={`${item.profile_url}`}
                      alt={item.first_name}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      title={`${item.first_name} ${item.last_name}`}
                    />
                  </ImageListItem>
                ))}
            </ImageList>
          </section>
        </div>
      </div>
    );
};

export default Details;

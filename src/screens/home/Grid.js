import React from "react"
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
});
const Grid = (props) => {
    const { classes } = props;
 
    const defaultImage= (ev)=>{
         ev.target.src = "https://source.unsplash.com/random";
    }
    return (
      <div className={classes.root}>
        <ImageList
          sx={{ width: "100%",height:310 }}
          cols={6}
          className={classes.gridList}
          
        >
          {props.upComingMovies?.length > 0 &&
            props.upComingMovies.map((movie) => (
              <ImageListItem key={movie.id}>
                <img
                  src={movie.poster_url}
                  alt={"img"}
                  onError={defaultImage}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={movie.title}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                />
              </ImageListItem>
            ))}
        </ImageList>
      </div>
    );
}

Grid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Grid);

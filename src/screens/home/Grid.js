import React from "react"
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
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
    flexWrap: "nowrap",
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
 
    return (
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={5}>
          <GridListTile key={1}>
            <img src="https://source.unsplash.com/random" alt={"img"} />
            <GridListTileBar
              title="title"
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
          <GridListTile key={1}>
            <img src="https://source.unsplash.com/random" alt={"img"} />
            <GridListTileBar
              title="title"
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
          <GridListTile key={1}>
            <img src="https://source.unsplash.com/random" alt={"img"} />
            <GridListTileBar
              title="title"
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
          <GridListTile key={1}>
            <img src="https://source.unsplash.com/random" alt={"img"} />
            <GridListTileBar
              title="title"
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
          <GridListTile key={1}>
            <img src="https://source.unsplash.com/random" alt={"img"} />
            <GridListTileBar
              title="title"
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
          <GridListTile key={1}>
            <img src="https://source.unsplash.com/random" alt={"img"} />
            <GridListTileBar
              title="title"
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        </GridList>
      </div>
    );
}

Grid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Grid);

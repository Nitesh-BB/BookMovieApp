import React, { useEffect } from "react";
import "./ReleasedMovies.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardHeader from "@mui/material/CardHeader";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from "react-router-dom";
import defaultImageJpg from "../../assets/defaultImage.jpg";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      
    },
  },
};
const styles = (theme) => ({
  card: {
    maxWidth: 240,
    minWidth: 240,
    margin: theme.spacing(1),
  },
  heading: {
    color: theme.palette.primary.light,
    marginLeft: 20,
  },
  fields: {
    marginBottom: theme.spacing(2),
  },
});
const ReleasedMovies = (props) => {
  const navigate = useNavigate();
  const [generes, setGeneres] = React.useState([]);

  const [artists, setArtists] = React.useState([]);


  const [filterData, setFilterData] = React.useState({
    name: "",
    artists: [],
    generes: [],
    releasedStartDate: "",
    releasedEndDate: "",
  });

  useEffect(() => {
    const fetchGeners = async () => {
      const response = await fetch(props.baseUrl + "genres");
      const data = await response.json();
      setGeneres(data.genres);
    };
    const fetchArtists = async () => {
      const response = await fetch(props.baseUrl + "artists?page=1&limit=20");
      const data = await response.json();
      setArtists(data.artists);
    };
    fetchGeners();
    fetchArtists();
  }, []);
  const defaultImage = (ev) => {
    ev.target.src = defaultImageJpg;
  };
  const onChangeHandler = (event) => {
    setFilterData({ ...filterData, [event.target.name]: event.target.value });
  };

  const applyFilter = () => {
    props.filterMovies(filterData);
  };
  const { classes } = props;

  const handleArtistChange = (event) => {
    const {target: { value }} = event;

    let data = typeof value === "string" ? value.split(",") : value;
    setFilterData({  ...filterData, artists: data });
  };
  const handleGenereChange = (event) => {
    const {target: { value }} = event;

    const data = typeof value === "string" ? value.split(",") : value;
    setFilterData({
      ...filterData,
      generes: data,
    });
  };
  return (
    <div className="released__main__container">
      <div className="released__images__grid">
        <ImageList sx={{ width: "100%", height: 350 }} cols={4}>
          {props.releasedMovies.length > 0 &&
            props.releasedMovies.map((item) => (
              <ImageListItem
                key={item.id}
                onClick={() => {
                  navigate(`/movie/${item.id}`);
                }}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={item.poster_url}
                  alt={item.title}
                  loading="lazy"
                  onError={defaultImage}
                  style={{ height: 350 }}
                />
                <ImageListItemBar title={item.title} subtitle={`Released Date:${new Date(item.release_date).toDateString()}`} />
              </ImageListItem>
            ))}
        </ImageList>
      </div>
      <div className="released__filters_container">
        <Card className={classes.card}>
          {/* <CardHeader className={classes.heading} title="FIND MOVIES BY:" /> */}
          <p className={classes.heading}>FIND MOVIES BY:</p>

          <CardContent>
            <form>
              <div className={classes.fields}>
                <TextField
                  label="Movie Name"
                  variant="standard"
                  size="small"
                  name="name"
                  onChange={onChangeHandler}
                />
              </div>

              <div className={classes.fields}>
                <FormControl sx={{ width: "90%" }}>
                  <InputLabel id="demo-multiple-checkbox-label">
                    Genere
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={filterData.generes}
                    onChange={handleGenereChange}
                    input={<Input label="Genere" size="small" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {generes.length > 0 &&
                      generes.map((item) => (
                        <MenuItem key={item.id} value={item.genre}>
                          <Checkbox
                            checked={
                              filterData.generes.indexOf(item.genre) > -1
                            }
                          />
                          <ListItemText primary={item.genre} />
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </div>
              <div className={classes.fields}>
                <FormControl sx={{ width: "90%" }}>
                  <InputLabel id="demo-multiple-checkbox-label">
                    Artists
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={filterData.artists}
                    onChange={handleArtistChange}
                    input={<Input label="Artists" size="small" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {artists.length > 0 &&
                      artists.map((artist) => (
                        <MenuItem
                          key={artist.id}
                          value={`${artist.first_name} ${artist.last_name}`}
                        >
                          <Checkbox
                            checked={
                              filterData.artists.indexOf(
                                `${artist.first_name} ${artist.last_name}`
                              ) > -1
                            }
                          />
                          <ListItemText
                            primary={`${artist.first_name} ${artist.last_name}`}
                          />
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </div>
              <div className={classes.fields}>
                <TextField
                  fullWidth
                  onChange={onChangeHandler}
                  name="releasedStartDate"
                  size="small"
                  label="Release Date Start"
                  variant="standard"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <div className={classes.fields}>
                <TextField
                  fullWidth
                  onChange={onChangeHandler}
                  name="releasedEndDate"
                  size="small"
                  label="Release Date End"
                  variant="standard"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>

              <div className={classes.fields}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="small"
                  onClick={applyFilter}
                >
                  Apply
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

ReleasedMovies.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReleasedMovies);

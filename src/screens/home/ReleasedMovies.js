import React,{useEffect} from "react";
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
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
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
    useEffect(() => {
        const fetchGeners = async () => {
            const response = await fetch(props.baseUrl + "genres");
            const data = await response.json();
            setGeneres(data.genres);
        }
        const fetchArtists = async () => {
            const response = await fetch(
              props.baseUrl + "artists?page=1&limit=20"
            );
            const data = await response.json();
            setArtists(data.artists);
        }
        fetchGeners();
        fetchArtists();
    },[])
    const defaultImage = (ev) => {
      ev.target.src = "https://source.unsplash.com/random";
    };
    const { classes } = props;
    const [personName, setPersonName] = React.useState([]);
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a the stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    };
  return (
    <div className="released__main__container">
      <div className="released__images__grid">
        <ImageList sx={{ width: "100%", height: 350 }} cols={4}>
          {props.releasedMovies.length > 0 &&
            props.releasedMovies.map((item) => (
                <ImageListItem key={item.id} onClick={() =>{navigate(`/movie/${item.id}`)}} style={{cursor:"pointer"}}>
                <img
                  src={item.poster_url}
                  alt={item.title}
                  loading="lazy"
                  onError={defaultImage}
                />
                <ImageListItemBar title={item.title} />
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
                <TextField label="Movie Name" variant="standard" size="small" />
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
                    value={personName}
                    onChange={handleChange}
                    input={<Input label="Genere" size="small" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {generes.length > 0 &&
                      generes.map((item) => (
                        <MenuItem key={item.id} value={item.genre}>
                          <Checkbox
                            checked={personName.indexOf(item.genre) > -1}
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
                    value={personName}
                    onChange={handleChange}
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
                              personName.indexOf(
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

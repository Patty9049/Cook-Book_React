import React, { useContext, useState } from "react";
import styles from "./RecipeSearchForm.module.scss";
import { fade, makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import AppContext from "../../context";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    // marginTop: theme.spacing(2),
    marginTop: "10px",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    margin: "8px",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btnSearch: {
    margin: "8px",
  },
}));

const RecipeSearchForm = () => {
  const classes = useStyles();
  const [quantity, setQuantity] = useState("");

  const context = useContext(AppContext);

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <form onSubmit={context.getRecipes}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>{/* <SearchIcon /> */}</div>
        <InputBase
          type="search"
          name="recipeName"
          placeholder="Recipe name…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      <FormControl
        name="recipeNumber"
        id="recipeNumber"
        variant="filled"
        className={classes.formControl}
      >
        <InputLabel id="demo-simple-select-filled-label">Results</InputLabel>
        <Select
          name="recipeNumber"
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={quantity}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </FormControl>
      <Button className={classes.btnSearch} type="submit" variant="outlined">
        <SearchIcon />
      </Button>
    </form>
  );
};

export default RecipeSearchForm;

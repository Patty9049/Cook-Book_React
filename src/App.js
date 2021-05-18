import React, { useState } from "react";
// import styles from "./App.module.scss";
import axios from "axios";
import Router from "./routing/Router";

// class App extends Component {
//   state = {
//     recipes: [],
//     baseImgUrl: "",
//   };

//   getRecipes = (e) => {
//     e.preventDefault();

//     const recipeName = e.target.recipeName.value;
//     console.log("recipeName", recipeName);
//     const recipeNumber = e.target.recipeNumber.value;

//     axios
//       .get(
//         `https://api.spoonacular.com/recipes/search?apiKey=${process.env.REACT_APP_API_KEY}&query=${recipeName}&number=${recipeNumber}`
//       )
//       .then((res) => {
//         console.log(res);
//         this.setState({
//           recipes: res.data.results,
//           baseImgUrl: res.data.baseUri,
//         });
//       })
//       .catch((err) => console.log(err));

//     e.target.reset();
//   };

//   render() {
//     return (
//       <>
//         <Router
//           recipes={this.state.recipes}
//           baseImgUrl={this.state.baseImgUrl}
//           getRecipes={this.getRecipes}
//         />
//       </>
//     );
//   }
// }
// export default App;

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [baseImgUrl, setBaseImgUrl] = useState("");

  const getRecipes = (e) => {
    e.preventDefault();

    const recipeName = e.target.recipeName.value;
    console.log("recipeName", recipeName);
    const recipeNumber = e.target.recipeNumber.value;

    axios
      .get(
        `https://api.spoonacular.com/recipes/search?apiKey=${process.env.REACT_APP_API_KEY}&query=${recipeName}&number=${recipeNumber}`
      )
      .then((res) => {
        console.log(res);
        // this.setState({
        //   recipes: res.data.results,
        //   baseImgUrl: res.data.baseUri,
        // });
        setRecipes(res.data.results);
        setBaseImgUrl(res.data.baseUri);
      })
      .catch((err) => console.log(err));

    e.target.reset();
  };

  return (
    <>
      <Router
        recipes={recipes}
        baseImgUrl={baseImgUrl}
        getRecipes={getRecipes}
      />
    </>
  );
};

export default App;

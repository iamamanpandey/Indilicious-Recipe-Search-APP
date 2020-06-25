import React, { useState, useEffect } from "react";
import "./App.css";
import Header from './component/Header';
import Recipes from './component/Recipes';
import RecipeItem from './component/RecipeItem';
import Axios from "axios";

function App() {
  const [search, setSerach] = useState("Paneer");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "Your_ID";
  const APP_KEY = "Your_KEY";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(res.data.hits);
  };

  const onInputChange = e => {
    setSerach(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };
  return (
    <div className="App">
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default  App;

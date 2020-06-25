  
import React from "react";

const RecipeItem = props => {
  const { name, image, ingredientLines } = props;
  return (
      <div class="card py-2 text-center">
        <img src={image} className="mx-auto img-fluid card-img-top" />
        <div class="card-body">
          <h5>{name}</h5>
        </div>
        <div className=" list-group list-group-flush">
          {ingredientLines.map(ingredient => (
            <li className="list-group-item">{ingredient}</li>
          ))}
        </div>
      </div>
  );
};

export default RecipeItem;
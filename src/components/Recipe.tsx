import React from "react";

interface IRecipeProps {
  imageRecipe: string;
}

const Recipe: React.FC<IRecipeProps> = ({ imageRecipe }) => {
  return (
    <div>
      <img src={imageRecipe} alt="cook" />
    </div>
  );
};

export default Recipe;

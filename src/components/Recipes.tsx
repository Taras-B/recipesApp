import React from "react";
import { useSelector } from "react-redux";
import { RecipesDataT } from "../stores/actions/recipesActions";
import { AppRootState } from "../stores/redux-store";
import Recipe from "./Recipe";

export const Recipes: React.FC = () => {
  //@ts-ignore
  const recipes = useSelector((state: AppRootState) => state.recipes.fetchRecipes);

  if (recipes === undefined) return <div>loading</div>;
  return (
    <div>
      {recipes &&
        recipes.map((r: RecipesDataT) => (
          <Recipe key={r.recipe.totalWeight} imageRecipe={r.recipe.image} />
        ))}
    </div>
  );
};

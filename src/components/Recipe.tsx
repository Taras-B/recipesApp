import React from "react";
import { Card, CardHeader, CardMedia, Typography, CardContent } from "@material-ui/core";
 // import styled from "styled-components";

interface IRecipeProps {
  imageRecipe: string;
  label: string;
  ingredients: Array<string>;
}

const Recipe: React.FC<IRecipeProps> = ({ imageRecipe, label, ingredients }) => {
  return (
    <>
      <Card style={{ maxWidth: "600px" }}>
        <CardHeader title={label} />
        <CardMedia style={{ height: "350px" }} image={imageRecipe} title={label} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="ul" align='left' >
            {ingredients.map((recipe: string, id: number) => (
              <Typography key={id} style={{ listStyle: "none" }} component="li">
                {recipe}
              </Typography>
            ))}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};



export default Recipe;

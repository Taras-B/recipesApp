import React from 'react'
import { useSelector } from 'react-redux'
import { RecipesDataT } from '../stores/actions/recipesActions'
import { AppRootState } from '../stores/redux-store'
import Recipe from './Recipe'
import styled from 'styled-components'
import { CircularProgress } from '@material-ui/core'

export const Recipes: React.FC = () => {
  //@ts-ignore
  const recipes = useSelector((state: AppRootState) => state.recipes.fetchRecipes)
  const loading = useSelector((state: AppRootState) => state.app.loading)

  // FIXME:  - add style center component
  if (loading) return <CircularProgress />

  return (
    <RecipesContainer>
      {recipes.map((r: RecipesDataT, id: number) => (
        <Recipe
          key={id}
          label={r.recipe.label}
          ingredients={r.recipe.ingredientLines}
          imageRecipe={r.recipe.image}
        />
      ))}
    </RecipesContainer>
  )
}

const RecipesContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  & .MuiCard-root {
    display: flex;
    flex-direction: column;
    align-self: center;
  }
  && .MuiPaper-root {
    margin: 20px;
    background-color: #979292;
  }
`

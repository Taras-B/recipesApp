import React, { useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import { Recipes } from "./components/Recipes";
import { actions } from "./stores/actions/recipesActions";
import { useDispatch } from "react-redux";
import SearchForm from "./components/SearchForm";
// import { RootState } from "./stores/redux-store";

const SearchContainer = styled.div`
  background-color: red;
  height: 5vh;
`;

function App() {
  const dispatch = useDispatch();
  // const recipes = useSelector((state: any) => state.recipes);

  useEffect(() => {
    dispatch(actions.loadRecipes());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSearchRecipe = (word: string) => {
    dispatch(actions.searchRecipes(word));
  };

  return (
    <div className="App">
      <SearchContainer>
        <SearchForm searchRecipesForm={onSearchRecipe} />
      </SearchContainer>
      <Recipes />
    </div>
  );
}

export default App;

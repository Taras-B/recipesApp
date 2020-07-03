import React, { useEffect } from "react";
import "./App.css";
import styled, { keyframes } from "styled-components";
import { Recipes } from "./components/Recipes";
import { actions } from "./stores/actions/recipesActions";
import { useDispatch, useSelector } from "react-redux";
import SearchForm from "./components/SearchForm";
import { AppRootState } from "./stores/redux-store";

import { Alert } from "@material-ui/lab";

function App() {
  const dispatch = useDispatch();
  const alert = useSelector((state: AppRootState) => state.app.alert);
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
      {alert && (
        <AlertFixed variant="filled" severity="warning">
          {alert}
        </AlertFixed>
      )}
    </div>
  );
}

const SearchContainer = styled.div`
  background-color: red;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  & form {
    display: flex;
    align-items: center;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    left: -100px;
  }
  20% {
    opacity: 1;
    left: 0;
  }
  80% {
    opacity: 1;
    left: 0;
  }
  100% {
    opacity: 0;
    left: -100px;
  }
`;

const AlertFixed = styled(Alert)`
  position: fixed;
  bottom: 10px;
  left: 0;
  width: 500px;
  animation: 6s ${fadeIn} ease-out;
`;

export default App;

import React, { ChangeEvent } from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { Button } from "@material-ui/core";

interface ISearchFormProps {
  searchRecipesForm(word: string): void;
}

const SearchForm: React.FC<ISearchFormProps> = ({ searchRecipesForm }) => {
  const [word, setWord] = React.useState<string>("");

  const updateWord = (event: ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
  };

  const onSearchRecipeClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRecipesForm(word.trim());
    setWord("");
  };
  return (
    <>
      <form onSubmit={onSearchRecipeClick}>
        <InputTextField
          onChange={updateWord}
          name="searchWord"
          id="outlined-basic"
          label="Search Recipe"
          variant="filled"
          // helperText="Incorrect entry."
        />
        <ButtonSearch variant="contained" color="primary" type="submit">
          Search
        </ButtonSearch>
      </form>
    </>
  );
};

const InputTextField = styled(TextField)`
  && {
    background-color: white;
    max-width: 450px;
    width: 400px;
    /* padding: 45px; */
    border-radius: 19px;
    border-bottom: transparent;
    margin: 10px;
    & .MuiFilledInput-underline:before {
      border-bottom: transparent;
    }
    @media (max-width: 768px) {
      max-width: 200px;
    }
  }
`;

const ButtonSearch = styled(Button)`
  /* margin: 10px; */
`;

export default SearchForm;

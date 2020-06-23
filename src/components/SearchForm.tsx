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
    searchRecipesForm(word);
    setWord("");
  };
  return (
    <div>
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
    </div>
  );
};

const InputTextField = styled(TextField)`
  background-color: white;
  width: 450px;
  padding: 45px;
  border-radius: 19px;
  border-bottom: transparent;
  margin: 100px;
  & .MuiFilledInput-underline:before {
    border-bottom: transparent;
  }
`;

const ButtonSearch = styled(Button)`
  margin: 100px;
`;

export default SearchForm;

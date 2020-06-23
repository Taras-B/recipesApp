import React, { ChangeEvent } from "react";

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
        <input type="text" onChange={updateWord} name="searchWord" />
        <button type="submit">search</button>
      </form>
    </div>
  );
};

export default SearchForm;

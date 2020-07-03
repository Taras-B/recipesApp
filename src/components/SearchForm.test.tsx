import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchForm from "./SearchForm";

it("renders correctly", () => {
  const { queryByTestId, queryByText } = render(
    <SearchForm searchRecipesForm={() => {}} />
  );

  expect(queryByTestId("search-button")).toBeTruthy();
  expect(queryByText("Search Recipe")).toBeTruthy();
});

describe("input value", () => {
  it("update on change", () => {
    const { queryByPlaceholderText } = render(
      <SearchForm searchRecipesForm={() => {}} />
    );

    const searchInput = queryByPlaceholderText("Search Recipe");
    //@ts-ignore
    fireEvent.change(searchInput, { target: { value: "banana" } });

    expect(searchInput?.value).toBe("banana");
  });
});

describe("Search button", () => {
  describe("with empty query", () => {
    it("does not trriger search function", () => {
      const requestSearch = jest.fn();

      const { queryByTestId } = render(<SearchForm searchRecipesForm={requestSearch} />);

      //@ts-ignore
      fireEvent.click(queryByTestId("search-button"));

      expect(requestSearch).not.toHaveBeenCalled();
    });
  });
  describe("with data inside query", () => {
    it("trrigers search function", () => {
      const requestSearch = jest.fn();

      const { queryByTestId, queryByPlaceholderText } = render(
        <SearchForm searchRecipesForm={requestSearch} />
      );

      const searchInput = queryByPlaceholderText("Search Recipe");
      //@ts-ignore
      fireEvent.change(searchInput, { target: { value: "banana" } });
      //@ts-ignore
      fireEvent.click(queryByTestId("search-button"));

      expect(requestSearch).toHaveBeenCalled();
    });
  });
});

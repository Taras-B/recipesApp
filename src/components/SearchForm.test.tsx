import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchForm from "./SearchForm";

it("renders correctly button and input", () => {
  const requestSearch = jest.fn();

  const { queryByTestId, queryByLabelText } = render(
    <SearchForm searchRecipesForm={requestSearch} />
  );

  expect(queryByTestId("search-button")).toBeTruthy();
  expect(queryByLabelText(/Search Recipe/i)).toBeInTheDocument();
});

describe("input value", () => {
  it("update on change", () => {
    const requestSearch = jest.fn();

    const { queryByLabelText } = render(<SearchForm searchRecipesForm={requestSearch} />);

    const searchInput = queryByLabelText(/Search Recipe/i) as HTMLElement;
    fireEvent.change(searchInput, { target: { value: "banana" } });

    expect(searchInput.value).toBe("banana");
  });
});

describe("Search button", () => {
  describe("with empty query", () => {
    it("does not trriger search function", () => {
      const requestSearch = jest.fn();

      const { queryByTestId } = render(<SearchForm searchRecipesForm={requestSearch} />);

      fireEvent.click(queryByTestId("search-button") as HTMLElement);

      expect(requestSearch).not.toHaveBeenCalled();
    });
  });
  describe("with data inside query", () => {
    it("trrigers search function", () => {
      const requestSearch = jest.fn();

      const { queryByTestId, queryByLabelText } = render(
        <SearchForm searchRecipesForm={requestSearch} />
      );

      const searchInput = queryByLabelText(/Search Recipe/i) as HTMLElement;

      fireEvent.change(searchInput, { target: { value: "banana" } });

      fireEvent.click(queryByTestId("search-button") as HTMLElement);

      expect(requestSearch).toHaveBeenCalled();
    });
  });
});

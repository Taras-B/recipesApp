import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./stores/redux-store";

test("renders search link", () => {
  const { getAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = getAllByText(/search/i)[0];
  expect(linkElement).toBeInTheDocument();
});

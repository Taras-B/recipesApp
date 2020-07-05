import { actions } from "../stores/actions/recipesActions";
import * as types from "../stores/types";

describe("actions", () => {
  it("should create an action to load recipes", () => {
    const expectedAction = {
      type: types.FETCH_RECIPES,
    };
    expect(actions.loadRecipes()).toEqual(expectedAction);
  });
  it("should create an action to search recipes", () => {
    const word = "eggs";
    const expectedAction = {
      type: types.SEARCH_RECIPES,
      payload: word,
    };
    expect(actions.searchRecipes(word)).toEqual(expectedAction);
  });
});

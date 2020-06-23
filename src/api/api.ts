const APP_ID = "7f75598c";
const APP_KEY = "4fafb7696cca6876414337de83d09e87";

export async function fetchRecipeData(searchWord: string = "chicken") {
  const response = await fetch(
    `https://api.edamam.com/search?q=${searchWord}&app_id=${APP_ID}&app_key=${APP_KEY}`
  );
  return await response.json();
}

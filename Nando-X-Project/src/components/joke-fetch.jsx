const URL = "https://v2.jokeapi.dev/joke/Any";

export const fetchJokes = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();

    if (data.type === "single") {
      return data.joke;
    } else {
      return `${data.setup} ... ${data.delivery}`;
    }
  } catch (error) {
    console.error("Failed to fetch joke.", error);
    return "Oops! Something went wrong";
  }
};
export default fetchJokes;

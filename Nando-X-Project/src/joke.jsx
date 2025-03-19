import React, { use, useEffect, useState } from "react";

const URL = "https://v2.jokeapi.dev/joke/Any";

function FetchData() {
  const [joke, setJoke] = useState("");

  // fetch joke function
  const fetchJokes = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();

      if (data.type === "single") {
        setJoke(data.joke);
      } else {
        setJoke(`${data.setup} ... ${data.delivery}`);
      }
    } catch (error) {
      console.error("Failed to fetch joke.", error);
      setJoke("Oops! Something went wrong");
    }
  };

  return (
    <div className="Joke">
      <h1>Do you want to hear a joke?</h1>
      <div className="buttons">
        <button onClick={fetchJokes}>Yes</button>
        <button onClick={() => setJoke("Maybe next time!")}>No</button>
      </div>
      {joke && <p>{joke}</p>}
    </div>
  );
}
export default FetchData;

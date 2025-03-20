import React, { useState } from "react";
import { fetchJokes } from "./joke-fetch";

function JokePage() {
  const [joke, setJoke] = useState("");

  const handleFetchJoke = async () => {
    const newJoke = await fetchJokes();
    setJoke(newJoke);
  };

  return (
    <div className="Joke">
      <h1>Do you want to hear a joke?</h1>
      <div className="buttons">
        <button onClick={handleFetchJoke}>Yes</button>
        <button onClick={() => setJoke("Maybe next time!")}>No</button>
      </div>
      {joke && <p>{joke}</p>}
    </div>
  );
}

export default JokePage;
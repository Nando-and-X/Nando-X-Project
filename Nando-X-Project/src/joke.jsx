import React, { use, useEffect, useState } from "react";

const URL = "https://sv443.net/jokeapi/v2/";

function FetchData() {
  const [joke, setJoke] = useState("");

  const fetchJokes = () => {
    fetch("https://sv443.net/jokeapi/v2/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      }, []);
  };
  useEffect(() => {
    fetchJokes();
  }, []);
  return (
    <div className="Joke">
      <h1>Do you want to hear a joke?</h1>
      <div className="buttons">
        <button onClick={fetchJokes}>Yes</button>
        <button>No</button>
      </div>
    </div>
  );
}
export default FetchData;

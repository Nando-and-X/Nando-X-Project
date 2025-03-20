import React, { useEffect, useState } from "react";

const URL = "https://xkcd.vercel.app/?comic=latest";

function Comic() {
  const [comic, setComic] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setComic(data));
  }, []);

  return (
    <div>
      {comic ? (
        <div>
          <h1>Welcome to Comic4Comic</h1>
          <h1>{comic.title}</h1>
          <img src={comic.src} alt={comic.alt} />
          <p>{comic.alt}</p>
        </div>
      ) : (
        <p>Loading comic...</p>
      )}
    </div>
  );
}

export default Comic;

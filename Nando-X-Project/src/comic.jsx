import React, { useEffect, useState } from "react";

const XKCDComic = () => {
  const [comic, setComic] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [latestComicNumber, setLatestComicNumber] = useState(null);

  // Fetch comic by number or latest
  const fetchComic = (num = "latest") => {
    setLoading(true);
    setError(null);

    fetch(`https://xkcd.vercel.app/?comic=${num}`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch comic");
        return response.json();
      })
      .then((data) => {
        setComic(data);
        // Set the latest comic number only if it's not already set (to avoid overriding the value)
        if (latestComicNumber === null) {
          setLatestComicNumber(data.num); // Get the current latest comic number
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  // Initial fetch for the latest comic
  useEffect(() => {
    fetchComic();
  }, []);

  // Get a random comic number (1 to latest number)
  const getRandomComic = () => {
    const randomNum = Math.floor(Math.random() * latestComicNumber) + 1;
    fetchComic(randomNum);
  };

  // Next comic
  const handleNext = () => {
    if (comic.num < latestComicNumber) {
      fetchComic(comic.num + 1);
    }
  };

  // Previous comic
  const handlePrevious = () => {
    if (comic.num > 1) {
      fetchComic(comic.num - 1);
    }
  };

  if (loading) return <p>Loading comic...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <h1>Welcome to Comic4Comic</h1>
      <h1 className="comic-title">{comic.title}</h1>
      <img
        className="comic-img"
        src={comic.img}
        alt={comic.alt}
        title={comic.alt}
      />
      <p className="comic-num">Comic #{comic.num}</p>
      <div className="comic-buttons">
        <button
          onClick={handlePrevious}
          disabled={comic.num <= 1}
          className="comic-previous"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={comic.num >= latestComicNumber}
          className="comic-next"
        >
          Next
        </button>
        <button onClick={getRandomComic} className="comic-random">
          Random Comic 🎲
        </button>
      </div>
    </div>
  );
};

export default XKCDComic;

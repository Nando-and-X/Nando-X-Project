import React, { useEffect, useState } from "react";
import { getWeatherData } from "./forecast-fetch";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import "bootstrap/dist/css/bootstrap.min.css";
import "./forecast-page.css"; // Import the CSS file

function ForecastPage() {
  const [forecast, setForecast] = useState([]);
  const [openCardIndex, setOpenCardIndex] = useState(null); // Track which card is open

  useEffect(() => {
    getWeatherData().then((data) => {
      if (data) {
        setForecast(data); // Set the 7-day forecast
      }
    });
  }, []);

  // Function to convert date to day of the week
  const getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>7-Day Weather Forecast</h1>
      {forecast.length > 0 ? (
        <div className="forecast-container">
          {forecast.map((day, index) => (
            <Card key={index} className="forecast-card">
              <Card.Body>
                <Card.Title>{getDayOfWeek(day.date)}</Card.Title>
                <Button
                  variant="primary"
                  onClick={() =>
                    setOpenCardIndex(openCardIndex === index ? null : index)
                  }
                  aria-controls={`collapse-${index}`}
                  aria-expanded={openCardIndex === index}
                >
                  {openCardIndex === index ? "Hide Details" : "Show Details"}
                </Button>
                <Collapse in={openCardIndex === index}>
                  <div id={`collapse-${index}`} className="mt-3">
                    <Card.Text>
                      <strong>Max Temp:</strong> {day.maxTemperature}°F <br />
                      <strong>Min Temp:</strong> {day.minTemperature}°F <br />
                      <strong>Precipitation:</strong> {day.precipitation} inches
                    </Card.Text>
                  </div>
                </Collapse>
              </Card.Body>
            </Card>
          ))}
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default ForecastPage;
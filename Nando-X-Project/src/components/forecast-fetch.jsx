// FETCH 7-DAY WEATHER DATA
export const getWeatherData = () => {
  const url1 =
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=America%2FNew_York&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch";

  return fetch(url1)
    .then((data) => data.json())
    .then((parsedData) => {
      console.log(parsedData);

      // Parse daily data for 7 days
      const forecast = parsedData.daily.time.map((date, index) => ({
        date,
        maxTemperature: parsedData.daily.temperature_2m_max[index],
        minTemperature: parsedData.daily.temperature_2m_min[index],
        precipitation: parsedData.daily.precipitation_sum[index],
      }));

      console.log(forecast);
      return forecast;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      return null;
    });
};
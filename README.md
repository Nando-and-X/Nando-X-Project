# [Nando & X Project]

Created by Fernando and X.

Mission statement
Our application, API Base is for students  who want to see APIs in action in a React webpage that uses ROuting to connect different sites and APIs.

## API & React Router

This application will use the [name of API] API. Below are the documentation and specific endpoints we intend to use and the front-end pages that will use them.

Link to API documentation: [\[Link goes here\]](https://www.weatherapi.com/docs/)

### API endpoint #1 : Forecast

- The forecast endpoint is where we will get out weather data from
- List of data values used by the endpoint :
  - maxtemp_f
  - mintemp_f
  - daily_chance_of_rain
  - And many more

### API endpoint #2 : Astronomy

- The astronomy endpoint is whee we will get our astronomy data from
- List of data values used by the endpoint :
  - sunrise
  - sunset
  - moonrise
  - moonset
  - moon phase
  - moon illumination

### API endpoint #3 : Joke API

- This endpoint generates a a different random joke
- List of data values used by the endpoint :
  - type
  - setup
  - delivery

[Only two end points use the same API key.]

Example:

- `https://www.weatherapi.com/api-explorer.aspx#forecast`
  - This will fetch an object of relevant weather data depending on the amount of days we want in our forecast
  - For each day I want the maximum temperature in fahrenheit, minimum temperature in F, and daily chance of rain
- `https://www.weatherapi.com/api-explorer.aspx#astronomy`
  - This will fetch an object of relevant astronomy data depending on how many days I need in my forecast
  - I will use the sunrise, sunset, moonrise, and moonset data
- `https://sv443.net/jokeapi/v2/`
  - This will fetch a a single joke divided into two parts: setup and delivery
  - For each joke, I will use the setup and delivery

## 👩‍💻 MVP User Stories & Frontend Routes

The application will feature the following frontend routes and core features:

- On the /weather page, users can view a grid of all days and the corresponding data for that day along with astronomy data
- On the /Home page, users can see cards with descriptions of the APIs available in the other pages and a button that generates a different joke every time when pressed

## 🤔 Stretch User Stories

If time permits, the following stretch features will be implemented in order of priority:

- Users will be able to change their location for weather data
- Users will be able to change the kinds of jokes they want to receive or blacklist certain kinds of jokes

## 📆 Timeline for reaching MVP in 1 week

To ensure that we can complete all core features of the application in 1 week, we will aim to complete tasks according to the following timeline:

### Day 1

- Initiate Vite project
- Complete wire frame
- Identify APIs that we will use and read documentation

### Day 2

- Work on routing and different pages
- Get at least 1 API working (Weather API)
- Work on page layout

### Day 3 (MVP due by the end of the day)

- Get remaining APIs to work (Joke API)
- Work on CSS

### Day 4
- Work on last API (Astronomy)
- Debug any issues with routing

### Day 5
- Deploy
- Rectify any existing issues

## Wireframes of each page in your application
Below, you can find wireframes for our project. Each wireframe shows a different page of our application as well as the key components of the application. Details such as specific text values or images are intentionally not included:

- ![Wireframe for page 1](/Nando-X-Project/Screenshot 2025-03-17 142633.png) - [Wireframe for home page]

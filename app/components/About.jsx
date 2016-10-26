var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application build on React.
        I have built this for the complte react web app dev course</p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react/"> React</a> - This wad the JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weathe Map</a> - I used this to search for weather data by city name.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;

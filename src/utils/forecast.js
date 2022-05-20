const request = require("postman-request");

const forecast = (lat, long, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=963a5be541f0087c83daee3df4d8efb9&query=" +
    lat +
    "," +
    long +
    "&units=f";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect...", undefined);
    } else if (body.error) {
      callback("Unable to find forecast", undefined);
      console.log(body.error);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out. The humidity is ${body.current.humidity}`
      );
    }
  });
};

module.exports = forecast;

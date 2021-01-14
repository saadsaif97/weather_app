const process = require('process')
const geocode = require('./utils/geocode')
const getWeatherInfo = require('./utils/get_weather_info')

geocode(process.argv[2], (err, data) => {
  if (err) {
    return console.log(err)
  }

  getWeatherInfo(`${data.latitude},${data.longitude}`, (err, weatherData) => {
    if (err) {
      return console.log(err)
    }

    console.log(data.place_name)
    console.log(weatherData)
  })
})

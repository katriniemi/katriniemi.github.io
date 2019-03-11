var apiCall = 'http://api.openweathermap.org/data/2.5/weather?q=Los Angeles&appid=a986ca4003f63a8daf609fbfcc6145a8';

$.getJSON(apiCall, weatherCallback);

function weatherCallback(weatherData){
    console.log(weatherData);
}
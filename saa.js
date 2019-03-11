function getWeather(){
  var city = document.getElementById("mySelect").value;
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=a986ca4003f63a8daf609fbfcc6145a8&units=metric').then(
    function(response) {
    response.json().then(function(data) {
      console.log(data); 
      document.getElementById('temp').innerHTML = data.main.temp ;
      document.getElementById('humid').innerHTML = data.main.humidity ;   
    });
    }
  )
}

var pageUpdate= null;

function startUpdate() {
  pageUpdate = setInterval(function(){getWeather();}, 600);
}

function stopUpdate() {
  clearInterval(pageUpdate);
}

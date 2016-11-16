$(document).ready(function(){

  var lon;
  var lat;
  var isFahrenheit = true;

  //When user clicks on 'Click' text...
  $('#getWeather').click(function(){
    //removes the Click text
    $( this ).hide( 2000, function() {
      $( this ).remove();
    });
    //Get geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        lon = position.coords.longitude;
        lat = position.coords.latitude;
        //openweather.org api
        var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=imperial&appid=89461475f6a025a753f64b5ef99a4060'

        $.getJSON(api, function(data){
          var weather = data.weather[0].main;//weather
          var weatherDesc = data.weather[0].description;//description of clouds **Not Used**
          var cloudPercent = data.clouds.all;//percentage of cloudiness **Not Used**
          var city = data.name;//city name
          var country = data.sys.country;//country code
          var tempF = (data.main.temp).toFixed(1);//temperature in fahrenheit
          var tempC = ((tempF - 32)*5/9).toFixed(1);//temperature in celsius

          $('#location').html(city+", "+country);
          $('#temp').html(tempF+"   "+"&#8457");

          //toggle between fahrenheit and celsius when temperature is clicked
          $('#temp').click(function(){
            if(isFahrenheit === true){
              $('#temp').html(tempC+"   "+"&#8451");
              isFahrenheit = false;
            }
            else{
              $('#temp').html(tempF+"   "+"&#8457");
              isFahrenheit = true;
            }
          });

          //display the respective weather icons according
          //to the weather from the api.
          switch (weather) {
            case 'clear':
              $('#icon').html("&#9788");
              break;
            case 'Clear':
              $('#icon').html("&#9788");
              break;
            case 'clouds':
              $('#icon').html("&#9729");
              break;
            case 'Clouds':
              $('#icon').html("&#9729");
              break;
              case 'rain':
              $('#icon').html("&#9730");
              break;
              case 'Rain':
              $('#icon').html("&#9730");
              break;
              case 'snow':
              $('#icon').html("&#10054");
              break;
              case 'Snow':
              $('#icon').html("&#10054");
              break;
              default:
              $('#icon').html("&#10052");
            }
          });
        });
      }
  });
});

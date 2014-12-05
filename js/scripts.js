
var cheney = '99004';
var spokane ='99201'


$(document).ready(function() {
  $.simpleWeather({
    location: 'seattle',
    woeid: '',
    unit: 'f',

    
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      $('.temp').text(weather.temp)
      $('.current').text(weather.currently)
      $('.header').text(weather.city)
      $('.low').text(weather.low)
      $('.high').text(weather.high)
      //html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      //html += '<li class="currently">'+weather.currently+'</li>';
     // html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
  
    // display weather
      $("#weather").html(html);
    },

  
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
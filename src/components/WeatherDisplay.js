import React from 'react';

function formatDate(string){
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(string).toLocaleDateString([],options);
}
function WeatherDisplay({ data, city }) {
  return (
    <div>
      <div>
        <h3>Next Hours</h3>
        {data.hourly.slice(0, 12).map((hour, index) => ( 
          <div className="Weather-Hourly-Display" key={index}>
            <p className="Temperature-Display">{hour.temp}°C</p>
            <img src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`} alt={hour.weather[0].main} />
            <p className="Time-Hourly-Display">{new Date(hour.dt * 1000).toLocaleTimeString()}</p>
          </div>
        ))}
      </div>
      <div>
        <h3>Next 5 days</h3>
        {data.daily.slice(0, 5).map((day, index) => (
          <div className="Weather-Display" key={index}>
            <div className="Temp-Display">
            <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt={day.weather[0].description} /> 
            </div>
            <div>
            <p>{formatDate(new Date(day.dt * 1000)) }</p>
            <p>{day.weather[0].description}</p>
            </div>
            <div className="Temp-Display"> {day.temp.day}°C</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherDisplay;

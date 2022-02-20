import React from 'react';

const WeatherDetails = props => {
  return (
    <div>
      <div>Temp : {props.getData}&deg;C</div>
    </div>
  );
};

export default WeatherDetails;

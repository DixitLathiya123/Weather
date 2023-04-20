import React from 'react';
import Temperature from '../CurrentWeather/Temperature';
import WeatherIcon from '../CurrentWeather/WeatherIcon';
import { ForecastItemContainer } from './styled';

interface IForecastItemProps {
  date: string;
  hours: string;
  weatherCode: number;
  high: number;
  low: number;
  main: string;
}
const ForecastItem: React.FC<IForecastItemProps> = (props) => {
  return (
    <ForecastItemContainer>
      <h6>{props.date}</h6>
      <h6>{props.hours}</h6>
      <WeatherIcon code={props.weatherCode} />
      <p>{props.main}</p>
      <span>
        <Temperature value={props.high} />
        <sup>&deg;</sup>
        <small>/</small>
        <Temperature value={props.low} />
        <sup>&deg;</sup>
      </span>
    </ForecastItemContainer>
  );
};

export default ForecastItem;

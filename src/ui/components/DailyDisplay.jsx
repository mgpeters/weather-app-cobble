/**
 * ************************************
 *
 * @module  DailyDisplay.jsx
 * @author  mpeters
 * @date    10/03/2020
 * @description Weekly Weather display
 * for the current locations next 7 days
 *
 * ************************************
 */

import React from 'react';

import Day from './Day.jsx';

import styles from '../../styles/components/DailyDisplay.scss';

const DailyDisplay = ({ daily, weatherIcon, formatTime, dailyDate }) => {
  const dailyArray = [];

  // Only want the next 7 days
  for (let i = 1; i < daily.length; i += 1) {
    const { dt } = daily[i];
    const { day } = daily[i].temp;
    const { icon, main } = daily[i].weather[0];

    const date = dailyDate(dt);

    dailyArray.push(
      <Day
        key={`daily-key${i}`}
        main={main}
        temp={day}
        date={date}
        weatherIcon={weatherIcon(icon)}
      />
    );
  }

  return daily ? (
    <div className="weather-display--current-weather__daily-display">
      {dailyArray}
    </div>
  ) : (
    <h2>Loading...</h2>
  );
};

export default DailyDisplay;
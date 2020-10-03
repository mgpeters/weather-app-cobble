/**
 * ************************************
 *
 * @module  weatherDataReducer.js
 * @author  mpeters
 * @date    09/30/2020
 * @description reducer for fetched weather data
 * from OpenWeatherMap.org
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  // currentLocation: { name: 'Weather App' },
  // locationData: {},
};

const weatherDataReducer = (state = initialState, action) => {
  const locationState = {
    ...state.locationData,
  };

  switch (action.type) {
    case types.FETCH_WEATHER_BY_LOCATION:
      return {
        ...state,
        loading: true,
      };

    case types.FETCH_WEATHER_SUCCEEDED:
      locationState[action.locationData.keyName] = action.locationData;

      return {
        ...state,
        loading: false,
        //currentLocation: `${action.locationData.name}, ${action.locationData.state}`,
        currentLocation: action.locationData,
        locationData: locationState,
      };

    case types.FETCH_WEATHER_FAILED:
      console.log(`Error Fetching Weather Data: ${action.message}`);

      return {
        ...state,
        loading: false,
        error: true,
      };

    case types.UPDATE_LOCATION:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default weatherDataReducer;

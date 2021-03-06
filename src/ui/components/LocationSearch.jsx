/**
 * ************************************
 *
 * @module  LocationSearch.jsx
 * @author  mpeters
 * @date    10/02/2020
 * @description Location NavBar search
 * component to select a city
 *
 * ************************************
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '../../styles/components/LocationSearch.scss';

import {
  searchNewLocation,
  handleSearchChange,
} from '../../state/actions/actions';

const mapStateToProps = (store) => ({
  searchedLocation: store.nav.searchedLocation,
  locations: store.nav.locations,
});

const mapDispatchToProps = (dispatch) => ({
  handleSearchChange: (input) => {
    dispatch(handleSearchChange(input));
  },
  searchNewLocation: (input) => {
    dispatch(searchNewLocation(input));
  },
});

// fx checks if we already searched location
const locationNotIncluded = (array, location) => {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].includes(location)) return false;
  }
  return true;
};

const LocationSearch = (props) => {
  return (
    <div className="navbar--location-search">
      <form
        onSubmit={(event) => {
          // Checks to see if the user input all requires text (City, State, Country)
          if (props.searchedLocation.split(', ').length !== 3) {
            const showError = document.getElementById('location-search');
            showError.value = 'Improper Submission';
            setTimeout(() => {
              showError.value = 'City, State, Country';
            }, 1500);
          } else if (
            locationNotIncluded(props.locations, props.searchedLocation)
          ) {
            props.searchNewLocation(props.searchedLocation);
          }
          event.preventDefault();
        }}
      >
        <label htmlFor="location-search">
          Search Locations
          <input
            type="text"
            id="location-search"
            name="location-search"
            placeholder="City, State, Country"
            value={props.searchedLocation}
            onChange={(event) => props.handleSearchChange(event.target.value)}
          />
        </label>
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

LocationSearch.propTypes = {
  searchedLocation: PropTypes.string,
  handleSearchChange: PropTypes.func,
  searchNewLocation: PropTypes.func,
  locations: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationSearch);

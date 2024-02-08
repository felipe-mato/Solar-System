import React from 'react';
import PropTypes from 'prop-types';

export default class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;

    return (
      <div data-testid="mission-card" className="mission__card">
        <p
          data-testid="mission-name"
          className="mission__name"
        >
          {name}
        </p>
        <p
          data-testid="mission-year"
          className="mission__year"
        >
          {year}
        </p>
        <p
          data-testid="mission-country"
          className="mission__country"
        >
          {country}
        </p>
        <p
          data-testid="mission-destination"
          className="mission__destination"
        >
          {destination}
        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

import React from 'react';
import missions from '../data/missions';
import MissionCard from './MissionCard';

export default class Missions extends React.Component {
  render() {
    const missonsinhas = missions;
    return (
      <div data-testid="missions" className="missions">
        {
          missonsinhas.map((mission, index) => (
            <MissionCard
              key={ index }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />
          ))
        }
      </div>
    );
  }
}

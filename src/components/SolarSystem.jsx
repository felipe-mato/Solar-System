import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import Missions from './Missions';
import Line from './Line';

export default class SolarSystem extends React.Component {
  render() {
    const planetinhas = planets;

    return (
      <div className="solar-system" data-testid="solar-system">
        <div className="cards__container">
          <Title headline="Planetas" />

          <Line />
          {
            planetinhas.map((planet, index) => (
              <PlanetCard
                key={ index }
                className={ planet.name }
                planetName={ planet.name }
                planetImage={ planet.image }
              />
            ))
          }
        </div>

        <div className="missions__container">
          <Title headline="Missões" />
          <Missions />
        </div>
      </div>
    );
  }
}

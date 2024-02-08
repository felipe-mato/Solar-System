import React from 'react';
import Header from './Header';
import SolarSystem from './SolarSystem';

export default class MainComponent extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
      </>
    );
  }
}

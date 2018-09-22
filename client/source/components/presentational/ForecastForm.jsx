import React from 'react';
import Forecast from './Forecast';

class ForecastForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { forecasts, sunRise, sunSet } = this.props;
    return (
      <div style={{ backgroundColor: '#aaaaaa' }}>
        <Forecast forecasts={forecasts} sunRise={sunRise} sunSet={sunSet} />
      </div>
    );
  }
}

export default ForecastForm;

import React, { Component } from 'react';
import { InfoWindow } from 'react-google-maps';

export class RiverInfoWindow extends Component {
  render() {
    const {description, name, fish} = this.props

    return(
      <InfoWindow onCloseClick={this.props.closeWindow}>
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
          <span>{fish}</span>
        </div>
      </InfoWindow>
    );
  }
}

export default RiverInfoWindow;
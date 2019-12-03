import React, { Component } from 'react';
import { Marker } from 'react-google-maps';
import { RiverInfoWindow } from './RiverInfoWindow';

export class RiverMarker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showTooltip: false
    }
  }

  clickTooltip() {
    this.setState({ showTooltip: !this.state.showTooltip })
  }

  closeWindow() {
    this.setState({ showTooltip: false })
  }

  render() {
    const {showTooltip} = this.state
    const {lat, lng, name, fish, description, id} = this.props

    return(
      <Marker
        markerWithLabel={window.MarkerWithLabel}
        onClick={this.clickTooltip.bind(this)}
        position={{
          lat: parseFloat(lat),
          lng: parseFloat(lng)
        }}
        opacity={0}
        labelClass='map-fish-container'
        labelContent={`<div class="map-fish-marker"><span>$${fish}</span></div>`}
        key={`marker${id}`}>
        {showTooltip && (
          <RiverInfoWindow key={`info${id}`}
                           description={description}
                           name={name}
                           fish={fish}
                           closeWindow={this.closeWindow.bind(this)}/>
        )}
      </Marker>
    );
  }
}

export default RiverMarker;
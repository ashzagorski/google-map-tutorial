import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import { RiverMarker } from '../RiverMarker';
import './Map.css';


export const RiverMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapMounted}
    onZoomChanged={props.handleMapChanged}
    onDragEnd={props.handleMapChanged}
    onBoundsChanged={props.handleMapFullyLoaded}
    defaultCenter={props.center}
    defaultZoom={props.zoom}
  >
    {
      props.rivers.length > 0 && props.rivers.map(river => (
        <RiverMarker key={`river${river.id}`}
                     id={river.id}
                     lat={river.latitude}
                     lng={river.longitude}
                     description={river.description}
                     name={river.name}
                     fish={river.fish} />
      ))
    }
  </GoogleMap>
));

class Map extends Component {
  constructor(props) {
    super(props)

    this.xMapBounds = { min: null, max: null }
    this.yMapBounds = { min: null, max: null }

    this.mapFullyLoaded = false
    this.zoom = 7

    this.state = {
      rivers: [],
      lat: 50.0515918,
      lng: 19.9357531
    };
  }

  handleMapChanged() {
    // this.getMapBounds()
    this.setMapCenterPoint()
    this.fetchRiversFromApi()
  }

  handleMapMounted(map) {
    this.map = map
  }

  handleMapFullyLoaded() {
    if (this.mapFullyLoaded)
      return

    this.mapFullyLoaded = true
    this.handleMapChanged()
  }

  setMapCenterPoint() {
    this.setState({
      lat: this.map.getCenter().lat(),
      lng: this.map.getCenter().lng()
    })
  }

  fetchRiversFromApi() {
    this.setState({ rivers: [] })

    fetch(`/api/rivers?min_lng=${this.xMapBounds.min}&max_lng=${this.xMapBounds.max}&min_lat=${this.yMapBounds.min}&max_lat=${this.yMapBounds.max}`,
      { method: 'GET' })
      .then((response) => response.json())
      .then((response) => this.setState({ rivers: response }))
  }

  // getMapBounds() {
  //   var mapBounds = this.map.getBounds()
  //   var xMapBounds = mapBounds.b
  //   var yMapBounds = mapBounds.f

  //   this.xMapBounds.min = xMapBounds.b
  //   this.xMapBounds.max = xMapBounds.f

  //   this.yMapBounds.min = yMapBounds.f
  //   this.yMapBounds.max = yMapBounds.b
  // }

  render() {
    const {lat, lng, rivers} = this.state

    return(
      <div style={{width: `750px`, height: `750px`}}>
        <RiverMap
          onMapMounted={this.handleMapMounted.bind(this)}
          handleMapChanged={this.handleMapChanged.bind(this)}
          handleMapFullyLoaded={this.handleMapFullyLoaded.bind(this)}
          center={{
            lat: lat,
            lng: lng
          }}
          rivers={rivers}
          zoom={this.zoom}
          containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
        />
      </div>
    );
  }
}

export default Map;
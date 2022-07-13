import React from "react"
import { compose, withProps } from "../../../../node_modules/recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "../../../../node_modules/react-google-maps"
import '../Search/search.css'

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBJfQUfetiFlIWMxEuXalSMUtkkghhJspE&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `90%` }} />,
    containerElement: <div style={{ height: `90%` }} />,
    mapElement: <div style={{ height: `90%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

export default class Maps extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div className="map-container" />}
        mapElement={<div style={{ height: `300px` }} />}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}
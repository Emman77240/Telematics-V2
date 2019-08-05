/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

  
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          showingInfoWindow: false,
          activeMarker: {},
          selectedPlace: {}
        }
        // binding this to event-handler functions
        this.onMarkerClick = this.onMarkerClick.bind(this);
        //this.onMapClick = this.onMapClick.bind(this);
      }
      onMarkerClick = (props, marker, e) => {
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });
      }
      /*onMapClick = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          });
        }
      }*/
    
    render() {
        return (
            <div className="dashboard-container">
                <ul className="dashboard__side-navigation">
                    <li className="dashboard__side-navigation-item">
                        <a href="#" className="dashboard__side-navigation-link">Google map</a>
                    </li>
                </ul>

                <div className="google-map-view">
                <Map
                    item
                    xs = { 12 }
                    google = { this.props.google }
                    onClick = { this.onMapClick }
                    zoom = { 17 }
                    initialCenter = {{ lat: 6.434782, lng: 3.424602 }}
                >
                <Marker
                    onClick = { this.onMarkerClick }
                    title = { 'Fortune Towers' }
                    position = {{ lat: 6.438782, lng: 3.4254602 }}
                    name = { 'Fortune Towers' }
                />
                    <InfoWindow
                        marker = { this.state.activeMarker }
                        visible = { this.state.showingInfoWindow }
                        >
                        <Paper>
                            <Typography
                            variant = 'headline'
                            component = 'h4'
                            >
                            Fortune Towers
                            </Typography>
                            <Typography
                            component = 'p'
                            >
                            Adeyemo Alakija Street, Itirin 500001, Lagos, Nigeria.<br />
                            811-042-6911
                            </Typography>
                        </Paper>
                    </InfoWindow>
                </Map>
                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA7aICvl5x6XMkSpkbj4pRtbYwM9B3Ffyw'
  })(Dashboard);

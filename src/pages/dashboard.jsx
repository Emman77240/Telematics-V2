/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

//import FactoryReactMapboxGl from 'react-mapbox-gl';

/*const Map = FactoryReactMapboxGl({
  accessToken: '<your token>',
});*/


const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZW1tYW43NzI0MCIsImEiOiJjanN1Z3F0bGQxMTZqNDNxenpwdW9ud3BzIn0.YnLy28cO2MXMS_lf_n4yxQ"
});
const zoom = [12];

class Dashboard extends React.Component {
    onMapLoad = (map) => {
      map.addControl({ 
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true });
    };
    
    render() {
        //const coordinate=[6.483014, 3.385871]
        const coordinate=[29.371532589441756,40.896189603433761];
        return (
            <div className="dashboard-container">
                <ul className="dashboard__side-navigation">
                    <li className="dashboard__side-navigation-item">
                      <a href="/dashboard" className="dashboard__side-navigation-link">Google map</a>
                    </li>
                    <li className="dashboard__side-navigation-item">
                      <a href="/chart" className="dashboard__side-navigation-link">Chart</a>
                    </li>
                </ul>

                <div className="google-map-view">
                  <Map
                      // eslint-disable-next-line react/style-prop-object
                      style="mapbox://styles/mapbox/streets-v9"
                      zoom={zoom}
                      containerStyle={{
                        height: "72vh",
                        width: "81vw"
                      }}
                      center={coordinate}
                    >
                    <Layer
                      type="symbol"
                      id="marker"
                      layout={{ "icon-image": "marker-15" }}>  
                      <Feature coordinates={coordinate}/>
                    </Layer>
                  </Map>
                </div>
            </div>
        );
    }
}

export default Dashboard;
/*<Map
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
                </Map>*/

                
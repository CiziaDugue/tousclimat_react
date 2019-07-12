import React, { Fragment } from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup, ScaleControl, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import iconGreen from './marker-icon-green-v2.png'
import iconGreen1 from './marker-icon-green.png'
import iconShadow from './marker-shadow.png'
// import MarkerClusterGroup from 'react-leaflet-markercluster'

let icon = L.icon({
    iconRetinaUrl: iconGreen,
    iconUrl: iconGreen,
    shadowUrl: iconShadow,
    iconSize:     [25, 41], // size of the icon
    shadowSize:   [25, 64], // size of the shadow
    iconAnchor:   [17.5, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [12, 65],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
let icon1 = L.icon({
    iconRetinaUrl: iconGreen1,
    iconUrl: iconGreen1,
    shadowUrl: iconShadow,
    iconSize:     [25, 41], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [17.5, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

// import data from '../src/data/data1.json';

class MyMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        let targetUrl = 'http://localhost/react/tousclimat/src/map/data.json';
        fetch(targetUrl)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    items: result.items
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            })
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        }
        else if (!isLoaded) {
            return <div>Chargement…</div>;
        }
        else {
            return (
                <Fragment>
                    <LeafletMap
                        className="markercluster-map carte"
                        center={[46.487333, 2.617625]}
                        zoom={5}
                        maxZoom={10}
                        attributionControl={true}
                        zoomControl={false}
                        doubleClickZoom={true}
                        scrollWheelZoom={true}
                        dragging={true}
                        animate={true}
                        easeLinearity={0.35}>
                        <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
                        {this.state.items.map((item) => (
                            <Marker
                                key={item.tel}
                                position={item.coord}
                                icon={icon}>
                                <Popup>
                                    {item.tel}<br />{item.date}
                                </Popup>
                            </Marker>
                        ))}
                    <ZoomControl position="topright" />
                    <ScaleControl position="bottomleft" />
                    </LeafletMap>
                </Fragment>
            );
        }
    }
}
export default MyMap

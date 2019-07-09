import React from 'react'

import axios from 'axios';
import { Map as LeafletMap, TileLayer, Marker, Popup, ScaleControl, ZoomControl } from 'react-leaflet';
// import worldGeoJSON from 'world-map-geojson';
// import Mark from '../src/Marker.js'
import L from 'leaflet';

import iconGreen from './marker-icon-green-v2.png'
import iconShadow from './marker-shadow.png'

delete L.Icon.Default.prototype._getIconUrl;

var icon = L.icon({
    iconRetinaUrl: iconGreen,
    iconUrl: iconGreen,
    shadowUrl: iconShadow,
    // iconSize:     [38, 95], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
    // iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

// import data from '../src/data/data1.json';

class GeoJsonMap extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [
    // {
    //   coord: [
    //     45.434177,
    //     4.383501
    //   ],
    //   tel: '0615151515',
    //   date: '15-06-2019'
    // },
    // {
    //   coord: [
    //     45.176178,
    //     2.633189
    //   ],
    //   tel: '0615151516',
    //   date: '15-06-2019'
    // },
    // {
    //   coord: [
    //     43.76777,
    //     -0.786657
    //   ],
    //   tel: '0615151517',
    //   date: '15-06-2019'
    // },
    // {
    //   coord: [
    //     47.751005,
    //     -1.030267
    //   ],
    //   tel: '0615151518',
    //   date: '15-06-2019'
    // },
    // {
    //   coord: [
    //     49.040116,
    //     1.160964
    //   ],
    //   tel: '0615151519',
    //   date: '15-06-2019'
    // },
    // {
    //   coord: [
    //     48.7906,
    //     6.754565
    //   ],
    //   tel: '0615151520',
    //   date: '15-06-2019'
    // }
]
}}

  componentDidMount() {
      var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      targetUrl = 'http://192.168.0.160:3000/react/data/data.json'
      // axios.get(targetUrl)
      //   .then(res => res.json())
      //   .then(
      //     (result) => {
      //       this.setState({
      //         isLoaded: true,
      //         items: result.items
      //       });
      //     },
          // Remarque : il est important de traiter les erreurs ici
          // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
          // des exceptions provenant de réels bugs du composant.
        //   (error) => {
        //     this.setState({
        //       isLoaded: true,
        //       error
        //     });
        //   }
        // )
        // console.log(this.state.items)
      fetch(targetUrl, { mode: 'no-cors'})
        // .then(res => res.json())
        .then(res => res.text())          // convert to plain text
        .then(text => console.log(text))
        .then(text => JSON.parse(text))
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
            });
          },
          // Remarque : il est important de traiter les erreurs ici
          // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
          // des exceptions provenant de réels bugs du composant.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
        console.log(this.state.items)
    }

  render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Erreur : {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Chargement…</div>;
      } else {
        return (
            <LeafletMap
                className="carte"
              center={[46.487333, 2.617625]}
              zoom={5}
              maxZoom={10}
              attributionControl={true}
              zoomControl={false}
              doubleClickZoom={true}
              scrollWheelZoom={true}
              dragging={true}
              animate={true}
              easeLinearity={0.35}
            >

          <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
              <Marker position={[46.487333, 2.617625]} icon={icon}>
                <Popup>
                  Popup for any custom information.
                </Popup>
              </Marker>
              {this.state.items.map((item) => (
                  <Marker key={item.tel} position={item.coord} icon={icon}>
                            <Popup>
                              {item.tel}
                              <br />
                              {item.date}
                            </Popup>
                          </Marker>

          ))}
              <ZoomControl position="topright" />
              <ScaleControl position="bottomleft" />
            </LeafletMap>
        );
      }
}
}
export default GeoJsonMap

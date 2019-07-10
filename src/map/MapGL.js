import React, {Component} from 'react'
import ReactMapGL from 'react-map-gl';
import {fromJS} from 'immutable';

import axios from 'axios';
import { Map as LeafletMap, TileLayer, Marker, Popup, ScaleControl, ZoomControl } from 'react-leaflet';

import iconGreen from './marker-icon-green-v2.png'
import iconGreen1 from './marker-icon-green.png'
import iconShadow from './marker-shadow.png'

// delete L.Icon.Default.prototype._getIconUrl;
const mapStyle = fromJS({
    version: 8,
    sources: {
        points: {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: [
                    {type: 'Feature', geometry: {type: 'Point', coordinates: [-122.45, 37.78]}}
                ]
            }
        }
    },
    layers: [
        {
            id: 'my-layer',
            type: 'circle',
            source: 'points',
            paint: {
                'circle-color': '#f00',
                'circle-radius': 4
            }
        }
    ]
});
export default class MapGL extends Component {

    state = {
        viewport: {
            width: 700,
            height: 300,
            latitude: 46.487333,
            longitude: 2.617625,
            zoom: 4,
        },
        token: 'pk.eyJ1IjoiY2l6aWFkdWd1ZSIsImEiOiJjanh4MzJoYnIwa2NxM25wOHNtNHZkN25wIn0.3CH05d0UrSLtUcZZzoW_4Q'
    };
    render() {
        return (
            <ReactMapGL mapStyle={mapStyle} mapboxApiAccessToken={this.state.token}
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({viewport})}
            />
        );
    }
}
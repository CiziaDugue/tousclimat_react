import React, { Component } from 'react'
import { Marker, Popup } from 'react-leaflet';

export default class Mark extends Component {

  render() {
    return (<Marker position={this.props.coord}>
              <Popup>
                {this.props.tel}
                <br />
                {this.props.date}
              </Popup>
            </Marker>
          )
      }
    }

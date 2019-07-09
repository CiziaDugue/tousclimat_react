import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

export default class ButtonTest extends Component {
    
  render() {
      return (
          <Button
          href={this.props.href}
      target="_blank"
      className="btn"
      variant="contained"
    >
      {this.props.title}
    </Button>
)}
}

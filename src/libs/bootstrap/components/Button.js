import React, { Component } from 'react'
import Button from 'react-bootstrap/Button.js'

export default class ButtonB extends Component {
    render() {
        return (
            <Button variante={this.props.color} href={this.props.url}>
                {this.props.title}
            </Button>
        )
    }
}

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Button from "react-bootstrap/Button";

export default class ButtonBar extends React.Component {
    render() {
        return (
            <div className="d-flex align-items-center justify-content-between button-bar">
                <Button
                    variant="outline-secondary"
                    href="https://ctc-42.org/application-tous-climat.html"
                    target="_blank">
                    En savoir plus...
                </Button>
                <Button
                    variant="primary"
                    className="text-white">
                    Moi aussi
                    <FontAwesomeIcon
                        className="text-white ml-2"
                        icon={faMapMarkerAlt}
                    />
                </Button>
                <Button
                    variant="outline-secondary"
                    href="https://www.helloasso.com/associations/loire-en-transition/formulaires/2"
                    target="_blank">
                    J'aide le projet
                </Button>
            </div>
        )
    }
}
import React from 'react'
import {FacebookShareButton, LinkedinShareButton, TwitterShareButton, TelegramShareButton} from 'react-share';
import {FacebookIcon,TwitterIcon,TelegramIcon,LinkedinIcon,} from 'react-share';


export default class ShareButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            siteURL: '',
        }
    }

    componentDidMount() {
        this.setState({
            siteURL: window.location.href
        })
    }

    render() {
        return (
            <div>
                <label>
                    Nom :
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Envoyer" />
            </div>
        );
    }
}
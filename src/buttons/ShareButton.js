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
            <div className="d-flex align-items-center justify-content-center">
                <FacebookShareButton
                    url="https://www.npmjs.com/package/react-fontawesome"
                    className="mx-1 share-btn">
                    <FacebookIcon round="true" size="30"/>
                </FacebookShareButton>
                <LinkedinShareButton
                    url={this.state.siteURL}
                    className="mx-1 share-btn">
                    <LinkedinIcon round="true" size="30"/>
                </LinkedinShareButton>
                <TwitterShareButton
                    url={this.state.siteURL}
                    className="mx-1 share-btn">
                    <TwitterIcon round="true" size="30"/>
                </TwitterShareButton>
                <TelegramShareButton
                    url={this.state.siteURL}
                    className="mx-1 share-btn">
                    <TelegramIcon round="true" size="30"/>
                </TelegramShareButton>
            </div>
        )
    }
}
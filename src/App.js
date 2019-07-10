import React from "react";
import '../src/libs/bootstrap/main.scss'

import Header from '../src/header/Header.js';
import Footer from '../src/footer/Footer.js';
import MyMap from '../src/map/Map.js';
import ButtonBar from '../src/buttons/ButtonBar.js';
import ShareButton from '../src/buttons/ShareButton.js';

function App() {
    return (
        <div className="d-flex flex-column align-items-center">
            <Header />
            <MyMap id="map" />
            <ButtonBar />
            <ShareButton />
            <Footer />
        </div>
    );
}

export default App;

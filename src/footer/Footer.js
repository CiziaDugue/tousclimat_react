import React from 'react';

import Modale from '../bootstrapComponents/Modale.js'


function Footer() {
  // Import result is the URL of your image
    return (
        <footer>
            <div id="foot" className="d-flex justify-content-around">
                <a href="#" id="desinscrire">Se désinscrire</a>
                <Modale linkText="Politique de confidentialité" />
            </div>
        </footer>
    );
}

export default Footer;

import React from "react";

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Header from '../src/header/Header.js';
import Footer from '../src/footer/Footer.js';
import ButtonTest from '../src/buttons/Button.js';
import GeoJsonMap from '../src/map/Map.js';

function App() {
  return (
      <div style={{ width: '100%' }}>
        <Box display="flex" flexDirection="column" p={1} bgcolor="background.paper" justifyContent="center" alignItems="center">
            <Header />
            <GeoJsonMap id="map" />
            <div className="btn-block">
                <Grid container className="buttons" spacing={4}>
                  <Grid item xs={4}>
                    <ButtonTest title="En savoir plus..." href="https://ctc-42.org/application-tous-climat.html" />
                  </Grid>
                  <Grid item xs={4}>
                    <ButtonTest title="Moi aussi" href=""/>
                  </Grid>
                  <Grid item xs={4}>
                    <ButtonTest title="J'aide le projet" href="https://www.helloasso.com/associations/loire-en-transition/formulaires/2"/>
                  </Grid>
                </Grid>
            </div>
        </Box>
        <Footer />
    </div>
  );
}

export default App;

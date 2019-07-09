import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Modale from '../modale/Modale.js'


function Footer() {
  // Import result is the URL of your image
  return (
      <footer>
          <Container id="foot">
              <Grid container className="buttons" spacing={2} justify="center">
                <Grid item xs={5}>
                  <a href="#" id="desinscrire">Se désinscrire</a>
                </Grid>
                <Grid item xs={5}>
                  <Modale />
                </Grid>
              </Grid>
          </Container>
      </footer>
);
}

export default Footer;

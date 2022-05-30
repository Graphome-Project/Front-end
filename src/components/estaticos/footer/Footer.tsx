import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Link} from 'react-router-dom';
import { Typography, Box, Grid } from '@material-ui/core';
import './Footer.css';

function Footer() {
  return (
    <>
      <Grid className='container-principal'>
        <Grid className="grid-footer" item xs={12}>
          <Box className="textos">
            <Typography variant="h4" align="left" gutterBottom > GrapHome </Typography>
            <ul>
              <li className="list-decorator-none">Sobre</li>
              <li className='list-decorator-none'>Desenvolvedores</li>
            </ul>
          </Box>
          <Box className="textos">
            <Typography variant="h4" align="left" gutterBottom > Linkedin </Typography>
            <ul>
              <li className="list-decorator-none"><Link to='/Sobre'  className="textos">Beatriz Alves</Link></li>
              <li className="list-decorator-none"><Link to='/Sobre' className="textos">Viviane Emilie</Link></li>
              <li className="list-decorator-none"><Link to='/Sobre' className="textos">Patryck Silva</Link></li>
              <li className="list-decorator-none"><Link to='/Sobre' className="textos">Cipriana Luis</Link></li>
              <li className="list-decorator-none"><Link to='/Sobre' className="textos">Jonathan</Link></li>
              <li className="list-decorator-none"><Link to='/Sobre' className="textos"> Pedro Henrique</Link></li>
            </ul>
          </Box>
        </Grid>
        <Grid>
        <Box>
            <Box paddingTop={1}>
              <Typography variant="subtitle2" align="center" gutterBottom className='textos' >© 2020 Copyright:</Typography>
            </Box>
            <Box>
              <a target="_blank" href="https://brasil.generation.org">
                <Typography variant="subtitle2" gutterBottom className='textos' align="center">graphomegen@gmail.com</Typography>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}


export default Footer;
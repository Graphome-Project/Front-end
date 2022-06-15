import React from 'react'
import "./Footer.css"
import { Box, Typography, Grid, Button } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {
  return (
    <>

      <Grid item xs={12} className='footer'>

        <Typography className='footer-texto-principal'>GRAPHOME</Typography>

        <Box className='footer-menus'>
          <Typography className='footer-texto-secundario'>Inicio</Typography>
          <Typography className='footer-texto'>
            <a href='/home'>Home</a>
            <a href='/cadastro'>Cadastro</a>
            <a href='/Login'>Login</a>
          </Typography>
        </Box>

        <Box className='footer-menus'>
          <Typography className='footer-texto-secundario'>Sobre Nós</Typography>
          <Typography className='footer-texto'>
            <a href='/sobre#gh-sobre'>O que é a Graphome</a>
            <a href='/sobre#sobre-devs'>Conheça os devs</a>
            <a href='/sobre#sobre-contato'>Fale conosco</a>
          </Typography>
        </Box>

        <Box className='footer-redes'>
          <Typography align="center" gutterBottom className='textoFooter'>Siga a GrapHome</Typography>
          <Box className='footer-redes-icones'>
            <a href="https://github.com/Graphome-Project" target="_blank">
              <FacebookIcon className='icone' />
            </a>
            <a href="https://github.com/Graphome-Project" target="_blank">
              <InstagramIcon className='icone' />
            </a>
            <a href="https://github.com/Graphome-Project" target="_blank">
              <GitHubIcon className='icone' />
            </a>
          </Box>
        </Box>


      </Grid>

    </>
  )
}

export default Footer;

import { Grid, Typography, Box } from '@material-ui/core'
import React from 'react'
import CadastroPostagem from '../../components/postagem/cadastroPostagem/CadastroPostagem'
import ListaPostagem from '../../components/postagem/listaPostagem/ListaPostagem'
import './FeedPostagem.css'
import Perfil from './perfil.tsx/Perfil'


function FeedPostagem() {
    return (
        <>
            <Grid container xs={12} className='gridContainer'>
                <Grid xs={1} item className='MenuTemas'>
                    <a href="" className="BotaoTema">TEMA 01</a>
                    <a href="" className="BotaoTema">TEMA 02</a>
                    <a href="" className="BotaoTema">TEMA 03</a>
                    <a href="" className="BotaoTema">TEMA 04</a>
                    <a href="" className="BotaoTema">TEMA 05</a>
                    <a href="" className="BotaoTema">TEMA 06</a>
                </Grid>
                <Grid xs={8} className='gridPostagens'>
                    <Box>
                        <CadastroPostagem />
                    </Box>
                    <ListaPostagem />
                </Grid>
                <Grid xs={3} className='gridPerfil'>
                    <Box className='boxPerfil'>
                        <Perfil />
                    </Box>
                </Grid>
                {/* <div>
                <div>
                    <CadastroPost />
                </div>
                <div>
                    <Perfil />
                </div>
            </div>
            <div>
                <div className='BlocoPerfil'></div>
                <div className='BlocoBio'></div>
            </div> */}
            </Grid>
        </>
    )
}

export default FeedPostagem
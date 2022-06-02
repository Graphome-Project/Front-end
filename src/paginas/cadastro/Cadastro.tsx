import React from 'react'
import { Grid, Typography, Button, Box } from '@material-ui/core';
import { TextField } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';

import './Cadastro.css';

function cadastro() {
    return (

        <>

            {/* <form onSubmit={onSubmit}> */}
            <form>
                <Typography variant="h3" gutterBottom color="textPrimary" component='h3' align='center' style={{ fontWeight: 'bold', color: '#c23616' }}>CADASTRO</Typography>

                <TextField
                    // value={user.nome}
                    // onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                    id='nome'
                    label='nome'
                    variant='outlined'
                    name='nome'
                    margin='normal'
                    fullWidth required />

                <TextField
                    // value={user.usuario}
                    // onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                    id='usuario'
                    label='email'
                    variant='outlined'
                    name='usuario'
                    margin='normal'
                    type='email'
                    fullWidth required />

                <TextField
                    // value={user.senha}
                    // onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                    id='senha'
                    label='senha'
                    variant='outlined'
                    name='senha'
                    margin='normal'
                    type='password'
                    fullWidth required />

                <TextField
                    // value={confirmarSenha}
                    // onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                    id='confirmarSenha'
                    label='confirmar senha'
                    variant='outlined'
                    name='confirmarSenha'
                    margin='normal'
                    type='password'
                    fullWidth required />

                <Box marginTop={2} textAlign='center'>
                    <Link to='/login' className="text-decorator-none">
                        <Link to='/login' className="text-decorator-none">
                            <Button type="submit" variant="outlined" className='cancelar'>Cancelar</Button>
                        </Link>
                        <Button type="submit" variant="outlined" className='confirmar'>Confirmar</Button>
                    </Link>
                </Box>


            </form>



        </>






    )
}

export default cadastro
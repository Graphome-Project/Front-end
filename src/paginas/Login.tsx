import React from 'react'
import './Login.css'
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
function Login() {
  return (
    // grid da imagem da esquerda
    <Grid container className='gridMaiorLogin'>
      <Grid className='grid1Login' xs={12}>
        <Box className='BoxForm'>
          <form>
            <Typography className='textoLogin'
            >Entrar</Typography>
            <TextField id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
            <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
            {/* box do botao */}
            <Box textAlign='center' >
              <Link to='/home' className='text-decorator-nome'>
                <Button className='botaoLogar' type='submit' variant='contained'>
                  Logar
                </Button>
              </Link>
            </Box>
          </form>
          <Box marginTop={2} >
            <Typography className='textoSemConta'>Não tem uma conta?</Typography>
          </Box>
          <Link to='/cadastro' className='text-decorator-nome'>
            <Typography align='center' className='textoCadastro' style={{ fontWeight: 'bold' }}>Cadastre-se</Typography>
          </Link>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Login
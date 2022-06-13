import React, { useState, ChangeEvent, useEffect } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';
import { useDispatch } from 'react-redux';
import { addId, addToken } from '../../store/tokens/actions';
import { toast } from 'react-toastify';

function Login() {

  let navigate = useNavigate();

  const dispatch = useDispatch();

  const [token, setToken] = useState('');

  const [userLogin, setUserLogin] = useState<UserLogin>(
    {
      id: 0,
      nome: '',
      usuario: '',
      senha: '',
      foto: '',
      bio: '',
      dataNascimento: '',
      tipo: '',
      token: ''
    }
  )

  // Crie mais um State para pegar os dados retornados a API
  const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    token: '',
    foto: '',
    bio: '',
    dataNascimento: '',
    tipo: ''
  })

  useEffect(() => {
    // if que verifica se o token está vazio ou nao,
    if (token !== "") {
      //adiciona o token no dispatch
      dispatch(addToken(token))
      //fazendo redirecionamento, aciono a variavel que contém o useNavigate indicando a rota que ele tem q ir '/home'
      navigate('/feed')
    }
  }, [token])

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if (respUserLogin.token !== "") {

      // Verifica os dados pelo console (Opcional)
      console.log("Token: " + respUserLogin.token)
      console.log("ID: " + respUserLogin.id)
      // Guarda as informações dentro do Redux (Store)
      dispatch(addToken(respUserLogin.token))
      dispatch(addId(respUserLogin.id.toString()))    // Faz uma conversão de Number para String
      navigate('/feed')
    }
  }, [respUserLogin.token])

  async function logar(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    try {
      await login(`/usuarios/logar`, userLogin, setRespUserLogin)
      toast.success('Usuário logado com sucesso!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",

      });

    } catch (error) {
      toast.error('Seu usuário ou senha estão incorretos', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    }
  }

  return (

    // grid da imagem da esquerda
    <Grid container className='gridMaiorLogin'>
      <Grid className='grid1Login' xs={12}>
        <Box className='BoxForm'>
          <form onSubmit={logar}>
            <Typography className='textoLogin'
            >Entrar</Typography>
            <TextField placeholder='Digite o seu e-mail' value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
            <TextField placeholder='Digite o sua senha' value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
            {/* box do botao */}
            <Box textAlign='center' >
              <Button className='botaoLogar' type='submit' variant='contained'>
                Logar
              </Button>
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
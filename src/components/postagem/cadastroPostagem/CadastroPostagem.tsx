import React, { ChangeEvent, useEffect, useState } from 'react'
import { Box, Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText, Grid } from "@material-ui/core"
import { useNavigate, useParams } from 'react-router-dom';
import Temas from '../../../models/Temas';
import Postagem from '../../../models/Postagem';
import { busca, buscaId, post, put } from '../../../services/Service';
import './CadastroPostagem.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify'
function CadastroPost() {
  let navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const [temas, setTemas] = useState<Temas[]>([])
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  useEffect(() => {
    if (token === "") {
      toast.error('Você precisa estar logado para completar a ação', {
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
  }, [token])

  const [tema, setTema] = useState<Temas>({
    id: 0,
    descricao: '',
    nome: ''
  })

  const [posts, setPosts] = useState<Postagem>({
    id: 0,
    titulo: "",
    data: '',
    texto: '',
    curtir: 0,
    temas: null,
    midia: ''
  })

  useEffect(() => {
    setPosts({
      ...posts,
      temas: tema
    })
  }, [tema])

  async function getTemas() {
    await busca('/temas', setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }

  async function findPostagensById(id: string) {
    await buscaId(`/postagem/${id}`, setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getTemas()
    if (id !== undefined) {
      findPostagensById(id)
    }
  }, [id])

  function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {
    setPosts({
      ...posts,
      [e.target.name]: e.target.value,
      temas: tema
    })
  }
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
      try {
        await put(`/postagem`, posts, setPosts, {
          headers: {
            'Authorization': token
          }
        })
        toast.success('Postagem atualizada com sucesso', {
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
        console.log(`Erro: ${error}`);
        toast.error('Ocorreu algum erro ao atualizar a postagem, verifique os campos e tente novamente! ', {
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
    } else {
      try {
        await post(`/postagem`, posts, setPosts, {
          headers: {
            'Authorization': token
          }
        })
        toast.success('Postagem criada com sucesso!', {
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
        console.log(`Error: ${error}`);
        toast.error('Ocorreu algum erro ao criar uma postagem, verifique os campos e tente novamente! ', {
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
    back()
  }


  function back() {
    navigate('/postagem')
  }


  return (
    <Grid container >
      <Grid xs={12} className='GridBackCadastroPost'>
        <Container maxWidth="sm" className='containerStylePost'>
          <form className='formCadastroPost' onSubmit={onSubmit} >
            <Typography variant="h3" align="center" >Formulário de criação de uma postagem</Typography>
            <TextField value={posts.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />
            <TextField value={posts.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="texto" label="texto" name="texto" variant="outlined" margin="normal" fullWidth />
            <FormControl >
              <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                onChange={(e) => buscaId(`/temas/${e.target.value}`, setTema, {
                  headers: {
                    'Authorization': token
                  }
                })}>
                {
                  temas.map(item => (
                    <MenuItem value={item.id}>{item.descricao}</MenuItem>
                  ))
                }
              </Select>
              <FormHelperText>Escolha um tema para a postagem</FormHelperText>
              <Button type="submit" variant="contained" color="primary" className='buttonCadastroPost'>
                Finalizar
              </Button>
            </FormControl>
          </form>
        </Container>
      </Grid>
    </Grid>
  )
}
export default CadastroPost;
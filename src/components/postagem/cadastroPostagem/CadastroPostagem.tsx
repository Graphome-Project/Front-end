import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText, Box } from "@material-ui/core"
import './CadastroPostagem.css';
import { useNavigate, useParams } from 'react-router-dom';
import Temas from '../../../models/Temas';
import Postagem from '../../../models/Postagem';
import { busca, buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function CadastroPost() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [temas, setTemas] = useState<Temas[]>([])
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  useEffect(() => {
    if (token == "") {
      alert('Você precisa estar logado');
      navigate("/login")

    }
  }, [token])

  const [tema, setTema] = useState<Temas>(
    {
      id: 0,
      descricao: '',
      nome: ''

    })
  const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    titulo: '',
    texto: '',
    tema: null,
    curtir: 0,
    data: '',
    midia: ''
  })

  useEffect(() => {
    setPostagem({
      ...postagem,
      tema: tema
    })
  }, [tema])

  useEffect(() => {
    getTemas()
    if (id !== undefined) {
      findByIdPostagem(id)
    }
  }, [id])

  async function getTemas() {
    await busca("/temas", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }

  async function findByIdPostagem(id: string) {
    await buscaId(`/postagem/${id}`, setPostagem, {
      headers: {
        'Authorization': token
      }
    })
  }

  function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

    setPostagem({
      ...postagem,
      [e.target.name]: e.target.value,
      tema: tema
    })
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
      try {
        await put(`/postagem`, postagem, setPostagem, {
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
        await post(`/postagem`, postagem, setPostagem, {
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
    <Container className="GridContainer">
      <form onSubmit={onSubmit} className='Forms'>
        <Box className='BoxPositionForm'>
          <Box className='BoxInputs'>
            <input type='text' name='titulo' className='inputTitle' placeholder='Titulo' value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id='titulo' />
            <input type='text' name='midia' className='inputTitle' value={postagem.midia} placeholder='Link da Imagem' id='midia' onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} />
          </Box>

          <textarea placeholder='Texto da postagem' name="texto" id="texto" className='inputTextArea' cols={5} rows={5}></textarea>
        </Box>
        <FormControl >
          <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
          <Select
            className='selectTema'
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            onChange={(e) => buscaId(`/temas/${e.target.value}`, setTema, {
              headers: {
                'Authorization': token
              }
            })}>
            {
              temas.map(tema => (
                <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
              ))
            }
          </Select>
          <FormHelperText>Escolha um tema para a postagem</FormHelperText>
          <Button type="submit" variant="contained" color="primary" className='BotaoForm'>
            <span className="button-content"> Criar postagem</span>
          </Button>
        </FormControl>
      </form>
    </Container>
  )
}
export default CadastroPost;
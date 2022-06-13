import React, { useEffect, useState } from 'react'
import { Box } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import User from '../../../models/User'
import { buscaId } from '../../../services/Service'

import './Perfil.css'
import { TokenState } from '../../../store/tokens/tokensReducer'

function Perfil() {

  let navigate = useNavigate()

  // Pega o ID guardado no Store
  const id = useSelector<TokenState, TokenState["id"]>(
    (state) => state.id
  );

  // Pega o Token guardado no Store
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  const [user, setUser] = useState<User>({
    id: +id,    // Faz uma conversão de String para Number
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    bio: '',
    dataNascimento: '',
    tipo: ''
  })

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado")
      navigate("/login")
    }
  }, [token])

  // Métedo para pegar os dados de um Usuário especifico pelo ID
  async function findById(id: string) {
    await buscaId(`/usuarios/${id}`, setUser, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  console.log(id)

  return (
    <Box className='card-principal'>
      <Box className='card-container-imagem'>
        <img className='card-imagem'
          src='https://i.imgur.com/uOqE6Lc.jpg'
          alt={user.nome} />
      </Box>

      <Box className='card-container-info'>
        <Box>
          <h1>NOME DO USUARIO</h1>
          <hr />
        </Box>
      </Box>

      <h4>Bio:</h4>
      <p className='card-container-texto'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus maiores illum, omnis optio quisquam labore, autem dolor a quae maxime corporis ratione magni deserunt fugiat laboriosam blanditiis, officiis aperiam perferendis.
      </p>

      <h4>Data de nascimento</h4>
      <p className='card-container-texto2'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quos veritatis a ratione. Voluptate maiores atque veniam pariatur, doloribus quam corrupti quidem quia quasi modi sapiente natus ullam dolore adipisci.
      </p>
    </Box>
  )
}

export default Perfil
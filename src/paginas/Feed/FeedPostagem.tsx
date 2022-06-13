import React from 'react'
import CadastroPost from '../../components/postagem/cadastroPostagem/CadastroPostagem'
import './FeedPostagem.css'

function FeedPostagem() {
    return (
        <>
            <div className="MenuTemas">
                <a href="" className="BotaoTema">TEMA 01</a>
                <a href="" className="BotaoTema">TEMA 02</a>
                <a href="" className="BotaoTema">TEMA 03</a>
                <a href="" className="BotaoTema">TEMA 04</a>
                <a href="" className="BotaoTema">TEMA 05</a>
                <a href="" className="BotaoTema">TEMA 06</a>
            </div>
            <div>
                <div>
                    <CadastroPost/>
                </div>
                <div></div>
            </div>
            <div>
                <div className='BlocoPerfil'></div>
                <div className='BlocoBio'></div>
            </div>

        </>
    )
}

export default FeedPostagem
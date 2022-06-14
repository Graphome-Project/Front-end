import React from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';
import { Link } from 'react-router-dom';
function Home() {
  return (



    <>


      <Grid className='homePrincipal '>
        <Grid item xs={3} className="fundoHome"></Grid>

        <Grid item xs={9}>

          <div className="conteudo-direita">

            <h1 className="titulo-Home">PINTOU MUDANÇA!</h1>

            <h4 className="texto-Home">Uma rede social para compartilhar projetos de arquitetura colaborativo entre comunidade e profissionais, voltado para a reforma da paisagem urbana através de intervenção artística e gráfica com o objetivo de construir assentamentos urbanos mais agradáveis e seguros.
              O intuito é fornecer um espaço voltado para organizar, construir e executar ideias e por fim, incentivar e inspirar pessoas com os resultados apresentados.</h4>
            <div className='botao-Home'>
              <Link to='/login'>
              <Typography align='left' className='textoCadastro'>
               clique aqui para começar!
              </Typography>
              </Link>
            </div>
          </div>

        </Grid>
      </Grid>
    </>
  );
}

export default Home;
import React from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';

import Data from './data/dados_iniciais.json';

function App() {

  const dados = Data.categorias;

  const categorias = dados.map(category => ({
    titulo: category.titulo,
    cor: category.cor,
    link_extra: category.link_extra,
    videos: category.videos
  }))

  console.log(categorias);

  const url = categorias[0].videos[0].url;
  const videoTitle = categorias[0].videos[0].titulo;
  const videoDescription = categorias[0].videos[0].titulo;

  return (
    <div className="App">
      <Menu />      
      <BannerMain videoTitle={videoTitle} videoDescription={videoDescription} url={url} />
      <Carousel ignoreFirstVideo category={categorias[0]} />      
      <Carousel category={categorias[1]} />      
      <Carousel category={categorias[2]} />      
      <Carousel category={categorias[3]} />      
      <Carousel category={categorias[4]} />      
      <Carousel category={categorias[5]} />            
      <Footer />
    </div>
  );
}

export default App;

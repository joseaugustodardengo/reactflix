import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroVideo() {
	return (	
		<PageDefault>
			<h1>Cadastro de vídeo</h1>

			<Link to="/cadastro/categoria">
				Cadastro de categorias
			</Link>
		</PageDefault>
			
	)
}

export default CadastroVideo;
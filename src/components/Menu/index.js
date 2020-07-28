import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink';

function Menu() {
	return (
		<nav className="Menu">
			<a href="/">
				<img className="Logo" src={Logo} alt="Imagem de logo Reactflix" />
			</a>

			<ButtonLink className="ButtonLink" href="/">
				Novo vídeo
			</ButtonLink>
		</nav>
	)
}

export default Menu;

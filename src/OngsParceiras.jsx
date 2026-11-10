import "./OngsParceiras.css";

import amigoFiel from "./assets/1.png";
import patinhas from "./assets/2.png";
import vidaAnimal from "./assets/3.jpg";
import anjosDePelos from "./assets/4.jpg";

const ongs = [
	{
		nome: "ONG Amigo Fiel",
		responsavel: "Isabel",
		imagem: amigoFiel,
		link: "https://github.com/isabelmatoss",
	},
	{
		nome: "ONG Patinhas",
		responsavel: "Flávia",
		imagem: patinhas,
		link: "https://github.com/FlaviaFigueiredo86",
	},
	{
		nome: "ONG Vida Animal",
		responsavel: "Renata",
		imagem: vidaAnimal,
		link: "https://github.com/renata-lang",
	},
	{
		nome: "ONG Anjos de Pelos",
		responsavel: "Tales",
		imagem: anjosDePelos,
		link: "https://github.com/talesgadret",
	},
];

function OngsParceiras() {
	return (
		<section className="ongs-section">
			<h2>ONGs Parceiras</h2>

			<div className="ongs-list">
				{ongs.map((ong) => (
					<div className="ong-item" key={ong.nome}>
						<img src={ong.imagem} alt={ong.nome} />

						<span>Responsável: {ong.responsavel}</span>

						<a href={ong.link} target="_blank" rel="noopener noreferrer">
							Visitar GitHub
						</a>
					</div>
				))}
			</div>
		</section>
	);
}

export default OngsParceiras;

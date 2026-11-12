import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './AnimalDetails.css';

const petsData = {
  1: {
    nome: "Belinha",
    especie: "Cachorro",
    genero: "Fêmea",
    idade: "2 anos",
    porte: "Pequeno",
    ong: "ONG Vida Animal",
    vacinas: "Em dia",
    castrado: "Sim",
    foto: "/Animais/Belinha.jpg",
    historia: "Belinha está com seu responsável desde os 2 meses de idade. É uma cachorra tranquila, carinhosa e companheira. Gosta de receber carinho e também tem seu lado cuidador: adora ficar pelo pátio, observando tudo e cuidando do seu espaço. É uma ótima companhia e merece um lar cheio de amor e cuidado."
  },
  2: {
    nome: "Cindy",
    especie: "Cachorro",
    genero: "Fêmea",
    idade: "13 anos",
    porte: "Pequeno",
    ong: "ONG Amigo Fiel",
    vacinas: "Em dia",
    castrado: "Sim",
    foto: "/Animais/Cindy.jpg",
    historia: "Cindy é uma cachorrinha SRD de 13 anos que ainda adora se divertir jogando bola. Tem uma personalidade forte e é bastante temperamental: gosta de carinho, mas no seu próprio tempo e sem insistências. É uma companheira especial, que precisa de uma família paciente, que respeite seu espaço e entenda seu jeitinho. Cindy merece viver essa fase da vida cercada de cuidado, tranquilidade e amor."
  },
  3: {
    nome: "Mel",
    especie: "Gata",
    genero: "Fêmea",
    idade: "1 ano",
    porte: "A confirmar",
    ong: "ONG Vida Animal",
    vacinas: "Em dia",
    castrado: "Sim",
    foto: "/Animais/Mel.jpg",
    historia: "Mel está com seu responsável desde os 3 meses de idade. É uma gatinha que adora um colo e não dispensa carinho. Tem uma boa convivência e é dócil, mas também tem sua personalidade forte: às vezes fica um pouquinho bravinha e gosta de mostrar que sabe o que quer. Uma companheira cheia de charme e personalidade!"
  },
  4: {
    nome: "Mia",
    especie: "Gata",
    genero: "Fêmea",
    idade: "2 anos",
    porte: "A confirmar",
    ong: "ONG Amigo Fiel",
    vacinas: "Em dia",
    castrado: "Sim",
    foto: "/Animais/Mia.jpg",
    historia: "Mia é uma gatinha SRD de 2 anos, que adora conforto e tem um lugar especial para descansar: a cama! Gosta de aproveitar momentos tranquilos e ter seu cantinho para relaxar. Não tem afinidade com crianças, por isso procura um lar tranquilo, onde suas características e seu espaço sejam respeitados. Mia espera encontrar uma família que a acolha com muito amor e cuidado."
  },
  5: {
    nome: "Mimi",
    especie: "Gato",
    genero: "Macho",
    idade: "3 anos",
    porte: "A confirmar",
    ong: "ONG Patinhas",
    vacinas: "Em dia",
    castrado: "Sim",
    foto: "/Animais/Mimi.jpg",
    historia: "Mimi apareceu de surpresa na casa de seu atual responsável e, com seu jeitinho especial, acabou conquistando um lugar no lar e no coração de todos. Muito carinhoso e bem-educado, chegou sem avisar e encontrou ali seu cantinho definitivo. Às vezes, os melhores encontros acontecem quando menos esperamos, e Mimi é a prova disso!"
  },
  6: {
    nome: "Ozzy",
    especie: "Cachorro",
    genero: "Macho",
    idade: "9 anos",
    porte: "Grande",
    ong: "ONG Patinhas",
    vacinas: "Em dia",
    castrado: "Não",
    foto: "/Animais/Ozzy.jpg",
   historia: "Ozzy Labrador, está com seu responsável desde filhote. É um cão de temperamento brincalhão, alegre e cheio de energia. Adora correr, brincar e aproveitar cada momento de diversão. É um companheiro que está sempre pronto para uma nova aventura e espera encontrar um lar onde possa continuar recebendo muito carinho e atenção."
  },
  7: {
    nome: "Preta",
    especie: "Cachorro",
    genero: "Fêmea",
    idade: "11 anos",
    porte: "Grande",
    ong: "ONG Patinhas",
    vacinas: "Em dia",
    castrado: "Sim",
    foto: "/Animais/Preta.jpg",
    historia: "Preta é uma Labradora que foi abandonada após ser descartada como matriz e encontrou acolhimento com seu atual responsável, onde vive há cerca de 6 anos. É uma cachorra muito carinhosa, companheira e cheia de amor para oferecer. Adora brincar com sua bolinha e está sempre pronta para receber carinho. Agora, merece continuar sua história cercada de cuidado, respeito e muito amor."
  },
  8: {
    nome: "Raul",
    especie: "Cachorro",
    genero: "Macho",
    idade: "3 anos",
    porte: "Grande",
    ong: "ONG Patinhas",
    vacinas: "Em dia",
    castrado: "Sim",
    foto: "/Animais/Raul.jpg",
    historia: "Raul é um Husky que está com seu responsável desde filhote. Tem um jeitinho tranquilo e adora uma boa soneca, principalmente em seu cantinho favorito, em cima do sofá. Também é apaixonado por comida! Apesar de ter uma doença autoimune intestinal, recebe os cuidados necessários por meio de uma alimentação natural e muito carinho. Raul é um companheiro especial, que conquista todos com seu jeito sossegado e amoroso."
  },
  9: {
    nome: "Sky",
    especie: "Cachorro",
    genero: "Fêmea",
    idade: "10 anos",
    porte: "Médio",
    ong: "ONG Anjos de Pelos",
    vacinas: "Em dia",
    castrado: "Sim",
    foto: "/Animais/Sky.jpg",
    historia: "Sky é uma linda Pitbull de 10 anos, muito dócil, amorosa e cheia de energia. Adora brincar, está sempre pronta para se divertir e tem um instinto protetor muito forte. Apesar de ser uma companheira protetora, é extremamente carinhosa e adora demonstrar seu amor. Sky tem muito carinho para oferecer e merece uma família que valorize todo esse amor e sua personalidade especial."
  }
};

// Cada animal poderá ter seu próprio link de adoção.
// Os endereços serão preenchidos depois.
const linksAdocao = {
  1: "https://github.com/renata-lang",       // Belinha
  2: "https://github.com/isabelmatoss",      // Cindy
  3: "https://github.com/renata-lang",       // Mel
  4: "https://github.com/isabelmatoss",      // Mia
  5: "",                                     // Mimi - falta definir
  6: "https://github.com/FlaviaFigueiredo86", // Ozzy
  7: "https://github.com/FlaviaFigueiredo86", // Preta
  8: "https://github.com/FlaviaFigueiredo86", // Raul
  9: "https://github.com/talesgadret"        // Sky
};

export default function AnimalDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const pet = petsData[id];

  if (!pet) {
    return (
      <div className="details-container">
        <h2>Animal não encontrado.</h2>
        <button className="btn-back" onClick={() => navigate(-1)}>
          Voltar para a vitrine
        </button>
      </div>
    );
  }

  const handleQueroAdotar = () => {
    const link = linksAdocao[id];

    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      alert("O link de adoção deste animal ainda será cadastrado.");
    }
  };

  return (
    <div className="details-container">

      <button className="btn-back" onClick={() => navigate(-1)}>
        ← Voltar para a vitrine
      </button>

      <div className="details-card">

        <div className="details-image-section">
          <img
            src={pet.foto}
            alt={pet.nome}
            className="pet-large-image"
          />
        </div>

        <div className="details-info-section">

          <span className="pet-ong-tag">{pet.ong}</span>

          <h1 className="pet-name">{pet.nome}</h1>

          <div className="info-grid">
            <div className="info-item">
              <strong>Espécie:</strong> {pet.especie}
            </div>

            <div className="info-item">
              <strong>Gênero:</strong> {pet.genero}
            </div>

            <div className="info-item">
              <strong>Idade aproximada:</strong> {pet.idade}
            </div>

            <div className="info-item">
              <strong>Porte:</strong> {pet.porte}
            </div>

            <div className="info-item">
              <strong>Vacinas em dia:</strong> {pet.vacinas}
            </div>

            <div className="info-item">
              <strong>Castrado:</strong> {pet.castrado}
            </div>
          </div>

          <div className="pet-story-section">
            <h3>Breve história de {pet.nome}</h3>
            <p>{pet.historia}</p>
          </div>

          <button className="btn-adopt" onClick={handleQueroAdotar}>
            Quero Adotar
          </button>

        </div>
      </div>
    </div>
  );
}
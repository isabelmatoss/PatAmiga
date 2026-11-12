import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Vitrine.css';

const animais = [
  { id: 1, nome: 'Belinha', idade: '2 anos', genero: 'Fêmea', porte: 'Pequeno', tipo: 'Cachorro', foto: '/Animais/Belinha.jpg' },
  { id: 2, nome: 'Cindy', idade: '13 anos', genero: 'Fêmea', porte: 'Pequeno', tipo: 'Cachorro', foto: '/Animais/Cindy.jpg' },
  { id: 3, nome: 'Mel', idade: '1 ano', genero: 'Fêmea', porte: 'Não informado', tipo: 'Gato', foto: '/Animais/Mel.jpg' },
  { id: 4, nome: 'Mia', idade: '2 anos', genero: 'Fêmea', porte: 'Não informado', tipo: 'Gato', foto: '/Animais/Mia.jpg' },
  { id: 5, nome: 'Mimi', idade: '3 anos', genero: 'Macho', porte: 'Não informado', tipo: 'Gato', foto: '/Animais/Mimi.jpg' },
  { id: 6, nome: 'Ozzy', idade: '9 anos', genero: 'Macho', porte: 'Grande', tipo: 'Cachorro', foto: '/Animais/Ozzy.jpg' },
  { id: 7, nome: 'Preta', idade: '11 anos', genero: 'Fêmea', porte: 'Grande', tipo: 'Cachorro', foto: '/Animais/Preta.jpg' },
  { id: 8, nome: 'Raul', idade: '3 anos', genero: 'Macho', porte: 'Grande', tipo: 'Cachorro', foto: '/Animais/Raul.jpg' },
  { id: 9, nome: 'Sky', idade: '10 anos', genero: 'Macho', porte: 'Médio', tipo: 'Cachorro', foto: '/Animais/Sky.jpg' }
];


function Vitrine() {
  const [filtro, setFiltro] = useState('Todos');

  const animaisFiltrados = animais.filter((animal) => {
    if (filtro === 'Todos') return true;
    return animal.tipo === filtro;
  });

  return (
    <main className="vitrine">
      <header className="vitrine-header">
        <h1>Animais Disponíveis</h1>
        <p>
          Esses bichinhos estão esperando uma família. Clique em "Tenho interesse" para falar com a ONG.
        </p>
      </header>

      <nav className="filtros">
        {['Todos', 'Cachorro', 'Gato'].map((opcao) => (
          <button
            key={opcao}
            className={filtro === opcao ? 'filtro ativo' : 'filtro'}
            onClick={() => setFiltro(opcao)}
          >
            {opcao === 'Cachorro' ? 'Cachorros' : opcao === 'Gato' ? 'Gatos' : opcao}
          </button>
        ))}
      </nav>

      <section className="animais-grid">
        {animaisFiltrados.map((animal) => (
          <article className="animal-card" key={animal.id}>
            <img
              src={animal.foto}
              alt={animal.nome}
              className="animal-foto"
            />

            <div className="animal-info">
              <h2>{animal.nome}</h2>
              <p>{animal.idade} · {animal.genero}</p>
              <p>Porte {animal.porte.toLowerCase()}</p>

              <Link to={`/detalhes/${animal.id}`} className="btn-interesse">
                Tenho interesse
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}


export default Vitrine;

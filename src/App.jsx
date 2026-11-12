import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Vitrine from './Vitrine.jsx';
import AnimalDetails from './AnimalDetails.jsx';
import OngsParceiras from './OngsParceiras.jsx';
import FAQ from './FAQ.jsx';


const guia = [
  {
    id: 'alimentacao', numero: '01', icone: '🥣', titulo: 'Alimentação', resumo: 'Nutrição adequada para cada fase da vida.',
    itens: [
      ['Escolha a alimentação adequada', 'Utilize alimento próprio para cães ou gatos, considerando espécie, idade, porte e necessidades individuais. Filhotes, adultos e idosos podem precisar de fórmulas diferentes.'],
      ['Mantenha horários e porções', 'Siga as orientações da embalagem e, quando possível, a recomendação do médico-veterinário. Evite oferecer comida em excesso ou mudar a dieta de forma brusca.'],
      ['Água fresca sempre disponível', 'Troque a água diariamente e mantenha o recipiente limpo e acessível.'],
      ['Cuidado com alimentos perigosos', 'Chocolate, uvas e passas, cebola, alho, bebidas alcoólicas e produtos com xilitol podem fazer mal. Não ofereça restos ou alimentos sem orientação.']
    ], dica: 'A alimentação ideal varia de um animal para outro. Converse com um veterinário antes de fazer mudanças importantes na dieta.'
  },
  {
    id: 'saude', numero: '02', icone: '🩺', titulo: 'Saúde e prevenção', resumo: 'Acompanhamento veterinário é parte do compromisso.',
    itens: [
      ['Consulta veterinária', 'Agende uma avaliação assim que possível após a adoção. O profissional poderá verificar a saúde geral e orientar os próximos cuidados.'],
      ['Vacinação e vermifugação', 'Mantenha o calendário indicado pelo veterinário. O protocolo pode variar conforme idade, histórico e estilo de vida do animal.'],
      ['Castração e identificação', 'Converse com o veterinário sobre o momento adequado para castrar e sobre formas seguras de identificação, como plaquinha e microchip.'],
      ['Higiene e prevenção', 'Cuide da limpeza dos ambientes, da escovação e dos cuidados com pele, ouvidos, dentes e unhas conforme a necessidade de cada pet.']
    ], dica: 'Peça à ONG todos os registros disponíveis: carteira de vacinação, exames, histórico de saúde e informações sobre tratamentos.'
  },
  {
    id: 'custos', numero: '03', icone: '💰', titulo: 'Custos da adoção', resumo: 'Planeje as despesas iniciais e as que virão ao longo dos anos.',
    itens: [
      ['Despesas iniciais', 'Prepare-se para itens como caminha, comedouro, bebedouro, caixa de transporte, guia, coleira, telas de proteção e adaptação do espaço.'],
      ['Despesas recorrentes', 'Inclua ração, areia sanitária para gatos, higiene, antiparasitários, vacinas e consultas de rotina no orçamento mensal ou anual.'],
      ['Emergências e imprevistos', 'Acidentes e doenças podem gerar gastos inesperados. Sempre que possível, mantenha uma reserva financeira para cuidados veterinários.'],
      ['Custos variam', 'Porte, idade, espécie, saúde e região influenciam os valores. Pesquise preços locais e faça um planejamento realista antes de adotar.']
    ], dica: 'A adoção responsável também exige disponibilidade financeira para oferecer cuidados adequados durante toda a vida do animal.'
  },
  {
    id: 'responsabilidades', numero: '04', icone: '❤️', titulo: 'Responsabilidades', resumo: 'Adotar é assumir um compromisso para a vida toda.',
    itens: [
      ['Tempo, atenção e carinho', 'Animais precisam de convivência, interação, brincadeiras e atenção diária. Considere sua rotina e quem poderá cuidar dele quando você estiver fora.'],
      ['Ambiente seguro', 'Prepare a casa antes da chegada. Proteja janelas e sacadas para gatos, guarde produtos tóxicos e objetos perigosos e mantenha portões seguros.'],
      ['Exercícios e enriquecimento', 'Cães precisam de passeios e atividades adequadas. Gatos também precisam brincar, explorar e ter estímulos, arranhadores e locais de descanso.'],
      ['Adaptação e educação', 'A mudança pode causar medo ou insegurança. Tenha paciência, respeite o tempo do animal e use métodos de educação positivos, sem violência.'],
      ['Compromisso permanente', 'Mudanças de casa, viagens, chegada de filhos ou dificuldades na rotina não devem ser motivos para abandono. Planeje alternativas responsáveis.']
    ], dica: 'Antes de decidir, converse com todas as pessoas da casa. A adoção precisa ser uma decisão consciente e compartilhada.'
  }
];

function Header() {
  const [aberto, setAberto] = useState(false);
  const fechar = () => setAberto(false);
  return <header className="header"><div className="container header__interno">
    <a className="logo" href="#inicio" onClick={fechar} aria-label="Pata Amiga, página inicial"><img className="logo__icone" src="/img/logo-icone.png" alt="" /><span className="logo__texto">Pata Amiga</span></a>
    <button className="menu-btn" type="button" aria-expanded={aberto} aria-controls="menu" aria-label={aberto ? 'Fechar menu' : 'Abrir menu'} onClick={() => setAberto(!aberto)}><span className="menu-btn__linha"/><span className="menu-btn__linha"/><span className="menu-btn__linha"/></button>
    <nav id="menu" className={`nav ${aberto ? 'is-aberto' : ''}`} aria-label="Principal">
      <a href="#como-funciona" onClick={fechar}>Como funciona</a><a href="/vitrine" onClick={fechar}>Animais</a><a href="#guia-adocao" onClick={fechar}>Guia de adoção</a><a href="#ajudar" onClick={fechar}>Ajudar uma ONG</a><a href="/faq" onClick={fechar}>FAQ</a>
    </nav>
  </div></header>;
}

function GuiaAdocao() {
  return <section className="secao guia" id="guia-adocao" aria-labelledby="guia-titulo"><div className="container">
    <span className="selo">Informação para uma escolha consciente</span>
    <h2 className="secao__titulo" id="guia-titulo">Guia de adoção responsável</h2>
    <p className="secao__sub guia__intro">Adotar é abrir espaço na família para um novo companheiro. Antes de tomar essa decisão, conheça os cuidados, os custos e as responsabilidades que acompanham essa escolha.</p>
    <div className="guia__alerta"><span aria-hidden="true">🐾</span><p><strong>Uma decisão para muitos anos</strong><br/>Cães e gatos dependem de seus tutores para viver com saúde, segurança e bem-estar. Planejar antes da adoção faz toda a diferença.</p></div>
    <div className="guia__grade">{guia.map((secao) => <article className="guia-card" key={secao.id}>
      <div className="guia-card__cabecalho"><span className="guia-card__icone" aria-hidden="true">{secao.icone}</span><span className="guia-card__numero">{secao.numero}</span></div>
      <h3>{secao.titulo}</h3><p className="guia-card__resumo">{secao.resumo}</p>
      <ul className="guia-card__lista">{secao.itens.map(([titulo, texto]) => <li key={titulo}><h4>{titulo}</h4><p>{texto}</p></li>)}</ul>
      <aside className="guia-card__dica"><strong>Dica importante</strong><p>{secao.dica}</p></aside>
    </article>)}</div>
    <div className="checklist"><div><span className="checklist__icone" aria-hidden="true">✓</span><div><h3>Está preparado para adotar?</h3><p>Reflita: tenho tempo, condições financeiras, espaço seguro e disposição para cuidar desse animal durante toda a vida dele?</p></div></div><a className="btn btn--primario" href="/vitrine">Conhecer animais disponíveis</a></div>
    <p className="guia__nota">Conteúdo educativo geral. As necessidades de cada animal são diferentes; para orientações específicas sobre alimentação, vacinação, saúde e comportamento, procure um médico-veterinário.</p>
  </div></section>;
}

function HomePage() {
  return <><a className="pular-link" href="#conteudo">Pular para o conteúdo</a><Header/><main id="conteudo">
    <section className="secao hero" id="inicio"><div className="container hero__interno"><div className="hero__texto"><span className="selo">Adoção responsável</span><h1>Um lar para cada patinha.</h1><p>Conheça os animais que esperam por uma família na nossa cidade e veja como ajudar as ONGs que cuidam deles.</p><div className="hero__botoes"><a className="btn btn--primario" href="/vitrine">Ver animais disponíveis</a><a className="btn btn--secundario" href="#ajudar">Ajudar uma ONG</a></div></div><div className="hero__imagem"><img className="hero__logo" src="/img/logo-completa.png" alt="Pata Amiga: adoção de animais" /></div></div></section>
    <section className="secao secao--branca" id="como-funciona"><div className="container"><h2 className="secao__titulo">Como funciona</h2><p className="secao__sub">Adotar é simples: em 3 passos você fala direto com a ONG. Ficou com dúvida? Confira as perguntas frequentes.</p><ol className="passos"><li className="passo"><span className="passo__numero">1</span><h3>Escolha um animal</h3><p>Navegue pela vitrine e conheça cada pet e a ONG responsável.</p></li><li className="passo"><span className="passo__numero">2</span><h3>Demonstre interesse</h3><p>Clique no botão e fale direto com a ONG, sem cadastro.</p></li><li className="passo"><span className="passo__numero">3</span><h3>Conheça e adote</h3><p>Combine a visita e leve seu novo amigo para casa com segurança.</p></li></ol><div className="secao__acao"><a className="btn btn--secundario" href="/faq">Ver perguntas frequentes</a></div></div></section>
    <GuiaAdocao/>
    <section className="secao" id="ajudar"><div className="container"><h2 className="secao__titulo secao__titulo--esq">Ajude uma ONG</h2><p className="secao__sub secao__sub--esq">Nem todo mundo pode adotar, mas todo mundo pode ajudar. Escolha como:</p><ul className="formas"><li className="forma"><h3>Doar</h3><p>Ração, medicamentos ou valores direto para a ONG.</p></li><li className="forma"><h3>Ser voluntário</h3><p>Ajude em feiras de adoção, passeios e cuidados.</p></li><li className="forma"><h3>Lar temporário</h3><p>Abrigue um animal até ele encontrar uma família.</p></li></ul><OngsParceiras /></div></section>
  </main><footer className="rodape"><div className="container rodape__interno"><a className="logo logo--rodape" href="#inicio"><img className="logo__icone" src="/img/logo-icone.png" alt=""/><span className="logo__texto">Pata Amiga</span></a><nav className="rodape__links" aria-label="Rodapé"><a href="#como-funciona">Como funciona</a><a href="/vitrine">Animais</a><a href="#guia-adocao">Guia de adoção</a><a href="#ajudar">Ajudar uma ONG</a><a href="/faq">FAQ</a></nav><p className="rodape__credito">Projeto acadêmico · Residência Full Stack</p></div></footer></>;
}

function FAQPage() {
  return (
    <>
      <a className="pular-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo" className="secao secao--branca">
        <div className="container">
          <FAQ />
          <div className="secao__acao">
            <a className="btn btn--secundario" href="/">Voltar para a página inicial</a>
          </div>
        </div>
      </main>
      <footer className="rodape">
        <div className="container rodape__interno">
          <a className="logo logo--rodape" href="/">
            <img className="logo__icone" src="/img/logo-icone.png" alt="" />
            <span className="logo__texto">Pata Amiga</span>
          </a>
          <nav className="rodape__links" aria-label="Rodapé">
            <a href="/">Página inicial</a>
            <a href="/vitrine">Animais</a>
            <a href="/faq">FAQ</a>
          </nav>
          <p className="rodape__credito">Projeto acadêmico · Residência Full Stack</p>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vitrine" element={<Vitrine />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/detalhes/:id" element={<AnimalDetails />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

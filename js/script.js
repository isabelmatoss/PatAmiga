/* ==========================================================
   Pata Amiga · página inicial (ONGs + menu)
   Para adicionar uma ONG, basta incluir um item na lista abaixo.
   A vitrine de animais fica na página vitrine.html.
   ========================================================== */

// Troque os links de contato pelo WhatsApp ou Instagram de cada ONG.
// Exemplo de WhatsApp: https://wa.me/55DDDNUMERO
const ongs = [
  { nome: 'ONG Patinhas',    desc: 'Resgate de cães e gatos',          formas: ['Doar', 'Voluntariado', 'Lar temporário'], contato: '#' },
  { nome: 'ONG Vida Animal', desc: 'Castração e adoção responsável',   formas: ['Doar', 'Voluntariado'],                   contato: '#' },
  { nome: 'ONG Amigo Fiel',  desc: 'Abrigo e reabilitação',            formas: ['Doar', 'Lar temporário'],                 contato: '#' },
];

const iconePata = '<svg aria-hidden="true"><use href="#icone-pata"/></svg>';

/* ---------- ONGs ---------- */
document.getElementById('ongs').innerHTML = ongs.map(o => `
  <article class="card-ong">
    <div class="card-ong__topo">
      <div class="card-ong__logo">${iconePata}</div>
      <div class="card-ong__textos">
        <h3 class="card-ong__nome">${o.nome}</h3>
        <p class="card-ong__desc">${o.desc}</p>
      </div>
    </div>
    <div class="card-ong__chips">
      ${o.formas.map(f => `<span class="chip chip--info">${f}</span>`).join('')}
    </div>
    <a class="btn btn--secundario" href="${o.contato}" target="_blank" rel="noopener noreferrer">Falar com a ONG</a>
  </article>`).join('');

/* ---------- Menu hambúrguer (celular) ---------- */
const menuBtn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');

function alternarMenu(abrir) {
  const aberto = abrir ?? !menu.classList.contains('is-aberto');
  menu.classList.toggle('is-aberto', aberto);
  menuBtn.setAttribute('aria-expanded', String(aberto));
  menuBtn.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
}

menuBtn.addEventListener('click', () => alternarMenu());
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => alternarMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') alternarMenu(false); });



import React, { useState } from 'react'
import './FAQ.css'

function FAQ() {
  const [perguntaAberta, setPerguntaAberta] = useState(null)

  const perguntas = [
    {
      pergunta: 'Quais documentos são necessários para adotar?',
      resposta: 'Geralmente, é necessário apresentar documento de identidade, CPF e comprovante de residência. Os requisitos podem variar conforme a instituição responsável.'
    },
    {
      pergunta: 'Quem pode adotar um animal?',
      resposta: 'Qualquer pessoa maior de 18 anos, que tenha condições de oferecer cuidados, segurança, carinho e um ambiente adequado ao animal.'
    },
    {
      pergunta: 'Como preparar a casa para receber um animal?',
      resposta: 'É importante preparar um espaço seguro, organizar caminha, potes de água e comida, brinquedos e retirar objetos que possam oferecer riscos.'
    },
    {
      pergunta: 'Quais cuidados básicos o animal precisa?',
      resposta: 'O animal precisa de alimentação adequada, água fresca, higiene, vacinação, acompanhamento veterinário, carinho e atenção diária.'
    },
    {
      pergunta: 'A adoção é gratuita?',
      resposta: 'Muitas instituições realizam adoções gratuitas, mas algumas podem solicitar uma contribuição para ajudar nos cuidados dos animais. É importante consultar a instituição.'
    }
  ]

  function alternarPergunta(index) {
    setPerguntaAberta(perguntaAberta === index ? null : index)
  }

  return (
    <section className="faq">
      <h2>Perguntas frequentes</h2>

      <p className="faq-descricao">
        Tire suas dúvidas e descubra como realizar uma adoção responsável.
      </p>

      <div className="faq-lista">
        {perguntas.map((item, index) => (
          <div className="faq-item" key={index}>
            <button
              className="faq-pergunta"
              onClick={() => alternarPergunta(index)}
              aria-expanded={perguntaAberta === index}
            >
              {item.pergunta}
              <span>{perguntaAberta === index ? '−' : '+'}</span>
            </button>

            {perguntaAberta === index && (
              <p className="faq-resposta">
                {item.resposta}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ
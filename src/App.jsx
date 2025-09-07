import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header';
import Accordion from './components/Accordion';
import Footer from './components/Footer';
import img1 from "./assets/img/img1.jpg";
import img2 from "./assets/img/img2.jpg";

import "./App.css";


function App() {
  return (
    <div className="app-container">
      {/* Cabeçalho */}
      <Header />

      {/* Conteúdo principal */}
      <main className="main-content">
        {/* Seção de boas-vindas */}
        <section className="welcome-section">
          <h1 className="title">Bem-vindo ao Cultura+</h1>
          <p className="subtitle">
            Um ambiente de acolhimento a imigrantes em situação de vulnerabilidade social..
          </p>
          <img
            src={img1} // Coloque a imagem que você tiver
            alt="Cultura"
            className="main-image"
          />
        </section>

        {/* Seção de conteúdo com Accordion */}
        <section className="content-section">
          <p className="content-intro">Aqui, você terá acesso aos seguintes conteúdos:</p>
          <Accordion
            title="Guia de Documentação"
            content="A cultura brasileira é formada por uma rica mistura de influências indígenas, africanas e europeias."
          />
          <Accordion
            title="Direitos e Deveres"
            content="A Espanha é famosa por sua gastronomia, dança flamenca e arquitetura histórica."
          />
          <Accordion
            title="Serviços Públicos"
            content="O Reino Unido possui tradições marcantes como o chá da tarde e a literatura clássica."
          />
        </section>

        {/* Seção de mensagem final */}
        <section className="final-message-section">
          <p className="final-message-text">
            Toda chegada merece acolhimento: você não está sozinho.
          </p>
          <img
            src={img2} // Outra imagem ilustrativa
            alt="Diversidade cultural"
            className="final-image"
          />
          <p>
            Saiba mais em{" "}
            <a
              href="https://pt.wikipedia.org/wiki/Cultura"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Wikipedia
            </a>
          </p>
        </section>
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}

export default App

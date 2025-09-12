import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header';
import Accordion from './components/Accordion';
import Footer from './components/Footer';
import img1 from "./assets/img/img1.jpg";
import img2 from "./assets/img/img2.png";

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
            Um ambiente de acolhimento a imigrantes em situação de vulnerabilidade social
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
            content={
              <>
                <p>Página do governo em que você pode encontrar as documentações principais. Selecione sua nacionalidade e selecione seu objetivo:</p>
                <a
                  href="https://www.gov.br/pf/pt-br/assuntos/imigracao/pt/nacionalidade/nacionalidade"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#2563EB", fontWeight: "600", textDecoration: "underline" }}
                >
                  Acessar portal do governo
                </a>
              </>
            }
          />
          <Accordion
            title="Direitos e Deveres"
            content={
              <>
              <p>Página do governo que você encontra direitos e deveres do imigrante:</p>
              <a
                href="https://www.gov.br/mdh/pt-br/navegue-por-temas/migrantes-refugiados-e-apatridas"
                target= "_blank"
                rel="noopener noreferrer"
                style={{color: "#2563EB", fontWeight: "600", textDecoration: "underline"}}
              >
                Acessar portal do governo
              </a>
              </>
            }
          />
          <Accordion
            title="Serviços Públicos"
            content={
              <>
              <p>Os imigrantes no Brasil têm direito a serviços públicos como saúde (através do SUS), 
                assistência social, educação, assistência jurídica, e regularização migratória. Onde buscar apoio:</p>
              <a
                href="https://prefeitura.sp.gov.br/web/imigrantes_e_trabalho_decente/crai"
              >
                · CRAI 
              </a>
              <br />
              <a
                href="https://portaldeimigracao.mj.gov.br/pt/"
              >
                · Ministério da Justiça e Segurança Pública
              </a>
              <p>Encontre ONGs:</p>
              <a
                href="https://museudaimigracao.org.br/iniciativas-para-migrantes-e-refugiados"
              >
                Sugestão de ONGs pelo Museu da Imigração
              </a>
              </>
            }
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
              href="https://www.gov.br/pt-br"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Gov.br
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

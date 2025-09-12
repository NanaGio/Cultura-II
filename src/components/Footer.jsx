import React from 'react';

// Estilos para o Footer
const FooterStyles = () => (
  <style>{`
    .app-footer {
      width: 100%;
      background-color: #1D4ED8;
      color: #FFFFFF;
      text-align: center;
      padding: 1rem;
      margin-top: auto; /* Garante que o footer fique no final da página */
    }

    .footer-title {
      font-size: 1.5rem;
      font-weight: 700;
      margin: 0 0 0.25rem 0;
    }

    .footer-copyright {
      margin: 0;
      font-size: 0.875rem;
      opacity: 0.8;
    }

    .footer-credits {
      margin: 0.25rem 0 0 0;
      font-size: 0.75rem;
      opacity: 0.7;
    }
  `}</style>
);


function Footer() {
  return (
    <>
      <FooterStyles />
      <footer className="app-footer">
        <h2 className="footer-title">Cultura+</h2>
        <p className="footer-copyright">2024 ©</p>
        <p className="footer-credits">Colegiado de Sistemas de Informação - UNEX</p>
      </footer>
    </>
  );
}

export default Footer

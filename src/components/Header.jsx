import React from 'react';

// Estilos para o Header
const HeaderStyles = () => (
  <style>{`
    .app-header {
      width: 100%;
      max-width: 384px;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      margin: 0 auto;
    }

    .header-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1D4ED8;
      margin: 0;
    }

    .flags-container {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  `}</style>
);

// SVGs das bandeiras
const BrazilFlagIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" width="30" height="20">
        <rect width="30" height="20" fill="#009739"/>
        <path d="M15 2l12 8-12 8L3 10z" fill="#FEDD00"/>
        <circle cx="15" cy="10" r="4" fill="#002776"/>
    </svg>
);

const SpainFlagIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" width="30" height="20">
        <rect width="30" height="20" fill="#C60B1E"/>
        <rect y="5" width="30" height="10" fill="#FFC400"/>
    </svg>
);

const UKFlagIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" width="30" height="20">
        <rect width="30" height="20" fill="#012169"/>
        <path d="M0 0l30 20M0 20L30 0" stroke="#FFF" strokeWidth="4"/>
        <path d="M0 0l30 20M0 20L30 0" stroke="#C8102E" strokeWidth="2"/>
        <path d="M15 0v20M0 10h30" stroke="#FFF" strokeWidth="6"/>
        <path d="M15 0v20M0 10h30" stroke="#C8102E" strokeWidth="4"/>
    </svg>
);

function Header() {
  return (
    <>
      <HeaderStyles />
      <header className="app-header">
        <h1 className="header-title">Cultura+</h1>
        <div className="flags-container">
          <BrazilFlagIcon />
          <SpainFlagIcon />
          <UKFlagIcon />
        </div>
      </header>
    </>
  );
}

export default Header

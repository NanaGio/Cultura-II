import { useState } from "react"

// Estilos para o Accordion
const AccordionStyles = () => (
  <style>{`
    .accordion-item {
      margin-bottom: 0.75rem;
    }

    .accordion-button {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background-color: #5EEAD4;
      color: #1F2937;
      font-weight: 700;
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1);
      border: none;
      cursor: pointer;
      font-size: 1rem;
      text-align: left;
    }

    .accordion-button:focus {
      outline: 2px solid #1D4ED8;
      outline-offset: 2px;
    }

    .chevron-icon {
      width: 1.5rem;
      height: 1.5rem;
      transition: transform 0.3s ease;
    }

    .chevron-icon.open {
      transform: rotate(180deg);
    }

    .accordion-content-wrapper {
      overflow: hidden;
      transition: max-height 0.3s ease-in-out;
      max-height: 0;
    }

    .accordion-content-wrapper.open {
      max-height: 24rem; /* Um valor alto para acomodar conteúdo variado */
    }

    .accordion-content {
      padding: 1rem;
      background-color: #FFFFFF;
      border-radius: 0.5rem;
      box-shadow: inset 0 2px 4px 0 rgba(0,0,0,0.05);
      margin-top: 0.5rem;
      text-align: left;
      line-height: 1.5;
    }
  `}</style>
);

const ChevronDownIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AccordionStyles />
      <div className="accordion-item">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="accordion-button"
        >
          <span>{title}</span>
          <ChevronDownIcon className={`chevron-icon ${isOpen ? 'open' : ''}`} />
        </button>
        <div className={`accordion-content-wrapper ${isOpen ? 'open' : ''}`}>
          <div className="accordion-content">
            {content}
          </div>
        </div>
      </div>
    </>
  );
};



export default Accordion

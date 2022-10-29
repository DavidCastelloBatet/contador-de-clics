import './Boton.css';

const Boton = ({ texto, esBotondeClic, manejarClic, colorFondo }) => {
  return (
    <button
      onClick={manejarClic}
      className={esBotondeClic ? 'boton-contador' : 'boton-reiniciar'}
      style={colorFondo}
    >
      {texto}
    </button>
  );
};

export default Boton;

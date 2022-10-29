import { useState } from 'react';
import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import logo from './images/logo.png';

function App() {
  // useState hook
  const [contador, setContador] = useState(0);
  // events
  const hacerClicMas = () => setContador(contador + 1);
  const hacerClicMenos = () => setContador(contador - 1);
  const hacerReiniciar = () => setContador(0);

  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" width={200} />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={contador} />
        <Boton
          texto="+1"
          esBotondeClic={true}
          manejarClic={hacerClicMas}
          colorFondo={{ backgroundColor: 'green' }}
        />
        <Boton
          texto="-1"
          esBotondeClic={true}
          manejarClic={hacerClicMenos}
          colorFondo={{ backgroundColor: 'red' }}
        />
        <Boton
          texto="Reiniciar"
          esBotondeClic={false}
          manejarClic={hacerReiniciar}
        />
      </div>
    </div>
  );
}

export default App;

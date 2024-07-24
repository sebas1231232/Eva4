import React, { useState, useEffect } from 'react';
import Formulario from './components/f';
import Tabla from './components/t';
import { obtenerplayerDeLocalStorage, eliminarplayerDeLocalStorage } from './utilidades/localStorageUtils';
import './components/s.css';

const App = () => {
  const [players, setplayers] = useState([]);
  const [playerEditando, setplayerEditando] = useState(null);

  useEffect(() => {
    setplayers(obtenerplayerDeLocalStorage());
  }, []);

  const manejarGuardar = () => {
    setplayers(obtenerplayerDeLocalStorage());
    setplayerEditando(null);
  };

  const manejarEditar = (jugador) => {
    setplayerEditando(jugador);
  };

  const manejarEliminar = (id) => {
    eliminarplayerDeLocalStorage(id);
    setplayers(obtenerplayerDeLocalStorage());
  };

  return (
    <div>
      <h1>Registro de players</h1>
      <Formulario onGuardar={manejarGuardar} playerEditando={playerEditando} />
      <Tabla players={players} onEditar={manejarEditar} onEliminar={manejarEliminar} />
    </div>
  );
};

export default App;

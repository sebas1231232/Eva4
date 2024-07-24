import React, { useState, useEffect } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, Checkbox, ListItemText } from '@mui/material';
import { guardarplayerEnLocalStorage } from '../utilidades/localStorageUtils';

const dificultad = ['Facil', 'Normal', 'Dificil', 'Muy Dificil'];
const ClasificacionCompetitiva = ['Bronce', 'Plata', 'Oro', 'Diamante', 'Mitico'];

const Formulario = ({ playerEditando, onGuardar }) => {
  const [player, setplayer] = useState({
    nick: '',
    edad: '',
    nacionalidad: '',
    puntos: '',
    dificultad: '',
    clasi: '',
  });

  useEffect(() => {
    if (playerEditando) {
      setplayer(playerEditando);
    }
  }, [playerEditando]);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setplayer((prev) => ({ ...prev, [name]: value }));
  };

  const manejarCambioMultiple = (e) => {
    const { name, value } = e.target;
    setplayer((prev) => ({ ...prev, [name]: value }));
  };

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (!player.nick.trim() || !player.edad.trim() || !player.nacionalidad.trim() || !player.puntos.trim() || !player.dificultad.trim() || !player.clasi.trim()) {

    }
    guardarplayerEnLocalStorage(player);
    onGuardar();
    setplayer({
      nick: '',
      edad: '',
      nacionalidad: '',
      puntos: '',
      dificultad: '',
      clasi: '',
    });
  };

  return (
    <form onSubmit={manejarSubmit} className="container">
      <TextField
        label="Nick"
        name="nick"
        value={player.nick}
        onChange={manejarCambio}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Edad"
        name="edad"
        value={player.edad}
        onChange={manejarCambio}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Nacionalidad"
        name="nacionalidad"
        value={player.nacionalidad}
        onChange={manejarCambio}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Puntos"
        name="puntos"
        value={player.puntos}
        onChange={manejarCambio}
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Dificultad</InputLabel>
        <Select
          value={player.dificultad}
          onChange={manejarCambio}
          name="dificultad"
        >
          {dificultad.map((dificultad) => (
            <MenuItem key={dificultad} value={dificultad}>
              {dificultad}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Clasificacion</InputLabel>
        <Select
          value={player.clasi}
          onChange={manejarCambioMultiple}
          name="clasi"
        >
          {ClasificacionCompetitiva.map((clasi) => (
            <MenuItem key={clasi} value={clasi}>
            {clasi}
          </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Guardar
      </Button>
    </form>
  );
};

export default Formulario;

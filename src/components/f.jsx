import React, { useState, useEffect } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, Checkbox, ListItemText } from '@mui/material';
import { guardarJugadorEnLocalStorage } from '../utilidades/localStorageUtils';

const dificultad = ['Facil', 'Normal', 'Dificil', 'Muy Dificil'];
const ClasificacionCompetitiva = ['Bronce', 'Plata', 'Oro', 'Diamante', 'Mitico'];

const Formulario = ({ jugadorEditando, onGuardar }) => {
  const [jugador, setJugador] = useState({
    nombre: '',
    edad: '',
    nacionalidad: '',
    equipo: '',
    dificultad: '',
    clasi: [],
  });

  useEffect(() => {
    if (playerEditando) {
      setplayer(playerEditando);
    }
  }, [jugadorEditando]);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setJugador((prev) => ({ ...prev, [name]: value }));
  };

  const manejarCambioMultiple = (e) => {
    const { name, value } = e.target;
    setJugador((prev) => ({ ...prev, [name]: value }));
  };

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (!jugador.nombre.trim() || !jugador.edad.trim() || !jugador.nacionalidad.trim() || !jugador.equipo.trim() || !jugador.posicion.trim() || !jugador.habilidades.length) {

    }
    guardarJugadorEnLocalStorage(jugador);
    onGuardar();
    setJugador({
      nombre: '',
      edad: '',
      nacionalidad: '',
      equipo: '',
      posicion: '',
      habilidades: [],
    });
  };

  return (
    <form onSubmit={manejarSubmit} className="container">
      <TextField
        label="Nombre"
        name="nombre"
        value={jugador.nombre}
        onChange={manejarCambio}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Edad"
        name="edad"
        value={jugador.edad}
        onChange={manejarCambio}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Nacionalidad"
        name="nacionalidad"
        value={jugador.nacionalidad}
        onChange={manejarCambio}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Equipo"
        name="equipo"
        value={jugador.equipo}
        onChange={manejarCambio}
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Posición</InputLabel>
        <Select
          value={jugador.posicion}
          onChange={manejarCambio}
          name="posicion"
        >
          {posicionesDisponibles.map((posicion) => (
            <MenuItem key={posicion} value={posicion}>
              {posicion}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Habilidades</InputLabel>
        <Select
          multiple
          value={jugador.habilidades}
          onChange={manejarCambioMultiple}
          name="habilidades"
          renderValue={(selected) => selected.join(', ')}
        >
          {habilidadesDisponibles.map((habilidad) => (
            <MenuItem key={habilidad} value={habilidad}>
              <Checkbox checked={jugador.habilidades.indexOf(habilidad) > -1} />
              <ListItemText primary={habilidad} />
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

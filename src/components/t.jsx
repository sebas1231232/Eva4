import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper } from '@mui/material';

const Tabla = ({ players, onEditar, onEliminar }) => {
  return (
    <TableContainer component={Paper} className="container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>nick</TableCell>
            <TableCell>Edad</TableCell>
            <TableCell>Nacionalidad</TableCell>
            <TableCell>Puntos</TableCell>
            <TableCell>Dificultad</TableCell>
            <TableCell>Clasificacion</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player) => (
            <TableRow key={player.id}>
              <TableCell>{player.nick}</TableCell>
              <TableCell>{player.edad}</TableCell>
              <TableCell>{player.nacionalidad}</TableCell>
              <TableCell>{player.puntos}</TableCell>
              <TableCell>{player.dificultad}</TableCell>
              <TableCell>{player.clasi}</TableCell>
              <TableCell>
                <Button onClick={() => onEditar(player)} color="primary">Editar</Button>
                <Button onClick={() => onEliminar(player.id)} color="secondary">Eliminar</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tabla;

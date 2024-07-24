export const obtenerplayerDeLocalStorage = () => {
    const player = localStorage.getItem('player');
    return player ? JSON.parse(player) : [];
  };
  
  export const guardarplayerEnLocalStorage = (jugador) => {
    const player = obtenerplayerDeLocalStorage();
    if (player.id) {
      const playerIndex = player.findIndex(j => j.id === jugador.id);
      jugadores[playerIndex] = jugador;
    } else {
      player.id = Date.now();
      player.push(jugador);
    }
    localStorage.setItem('player', JSON.stringify(player));
  };
  
  export const eliminarplayerDeLocalStorage = (id) => {
    const players = obtenerplayerDeLocalStorage();
    const playersActualizados = players.filter(players => players.id !== id);
    localStorage.setItem('jugadores', JSON.stringify(playersActualizados));
  };
  
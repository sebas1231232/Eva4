export const obtenerplayerDeLocalStorage = () => {
    const players = localStorage.getItem('players');
    return players ? JSON.parse(players) : [];
  };
  
  export const guardarplayerEnLocalStorage = (player) => {
    const players = obtenerplayerDeLocalStorage();
    if (player.id) {
      const playerIndex = players.findIndex(j => j.id === player.id);
      players[playerIndex] = player;
    } else {
      player.id = Date.now();
      players.push(player);
    }
    localStorage.setItem('players', JSON.stringify(players));
  };
  
  export const eliminarplayerDeLocalStorage = (id) => {
    const players = obtenerplayerDeLocalStorage();
    const playersActualizados = players.filter(player => player.id !== id);
    localStorage.setItem('players', JSON.stringify(playersActualizados));
  };
  
import React from "react";
import Player from "./Player";
import players from "./players";

// Component to display the list of players
function PlayersList() {
  const listStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  };

  return (
    <div style={listStyle}>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
}

export default PlayersList;

// 39-4 Understand the concept of useState and react hooks

import React, { useState } from "react";

function Team() {
  const [team, seTTeam] = useState(11);
  const teamStyle = {
    margine: "15px",
    padding: "15px",
    border: "2px solid purple",
    borderRadius: "15px",
  };

  const hanleTeamAdd = () => {
    seTTeam(team + 1);
  };
  const hanleTeamRemove = () => {
    team > 0 && seTTeam(team - 1);
};
    



  return (
    <div style={teamStyle}>
      <h2>Team: {team}</h2>
      <button onClick={hanleTeamAdd}>add</button>
      <button onClick={hanleTeamRemove}>remove</button>
    </div>
  );
}

export default Team;

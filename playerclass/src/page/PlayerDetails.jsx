import React from "react";
import { useParams } from "react-router-dom";
import { players } from "../data/players";
import Navbar from "../components/Navbar";

const PlayerDetails = () => {
  const { id } = useParams();
  const player = players.find((p) => p.id === id);

  return (
    
    <div className="p-5 h-screen flex justify-center items-center flex-col">
      <Navbar/>
      <img
        src={player.image}
        alt=""
        className="pb-4 max-w-sm bg-gray-950 rounded-xl"
      />
      <h1 className="text-2xl font-bold ">{player.name}</h1>
      <h1>{player.id}</h1>
      <h1>{player.nationality}</h1>
      <h1 className="text-green-500">{player.club}</h1>
      <h1 className="text-gray-700">{player.overview}</h1>
    </div>
  );
};

export default PlayerDetails;

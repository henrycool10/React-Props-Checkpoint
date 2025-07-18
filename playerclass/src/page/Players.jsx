import React from "react";
import Navbar from "../components/Navbar";
import PlayerCard from "../components/PlayerCard";
import { players } from "../data/players";

const Players = () => {
  return (
    <div className="">
      <div className=" mx-auto max-w-6xl p-4">
        <Navbar />
        <h1 className="text-5xl text-green-600">This are our Players</h1>
        <h1 className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione,
          harum?
        </h1>
        <div className=" grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {players.map((player) => (<PlayerCard key={player.id} player={player} />))}
        
        </div>
      </div>
    </div> 
  );
};

export default Players;

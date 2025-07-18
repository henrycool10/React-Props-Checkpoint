import React from "react";
import { Link } from "react-router-dom";

const PlayerCard = ({ player }) => {
  return (
    <Link to={`/player/${player.id}`}>
      <div className="">
        <img
          className="w-full p-6 bg-gray-950 rounded h-96 hover:scale-105 transition object-contain"
          src={player.image}
          alt=""
        />
        <h1 className=" text-3xl font-medium mt-4">{player.name}</h1>
        <h1>{player.id}</h1>
        <h1 className=" text-green-500 font-semibold">{player.club}</h1>
        <h1 className="">{player.nationality}</h1>

        <h1 className="truncate text-gray-600 text-xs">{player.overview}</h1>
      </div>
    </Link>
  );
};

export default PlayerCard;

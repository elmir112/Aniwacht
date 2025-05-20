import React from "react";
import { Link } from "react-router-dom";

function AnimeList() {
  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Anime Seriyalar</h2>
      <ul>
        <li>
          <Link
            to="/anime/attack-on-titan"
            className="text-blue-600 hover:underline"
          >
            Attack on Titan
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AnimeList;
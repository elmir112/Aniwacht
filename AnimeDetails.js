import React from "react";
import { useParams } from "react-router-dom";
import animeData from "../assets/animeData";

function AnimeDetails() {
  const { animeId } = useParams();
  const anime = animeData.find((a) => a.id === animeId);

  if (!anime) return <p className="p-4">Anime tapılmadı.</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">{anime.title}</h2>
      <p>{anime.description}</p>
      <div className="mt-4">
        <h3 className="text-xl">Bölümlər:</h3>
        <ul>
          {anime.episodes.map((ep, index) => (
            <li key={index}>
              <a
                href={ep.url}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {ep.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AnimeDetails;
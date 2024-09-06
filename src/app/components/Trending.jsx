"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export const Trending = () => {
  const [animeData, setAnimeData] = useState(null);

  // Fetch trending anime data
  const handleData = async () => {
    try {
      const response = await fetch("https://kitsu.io/api/edge/trending/anime");
      const data = await response.json();
      console.log(data);
      setAnimeData(data);
    } catch (error) {
      console.error("Error fetching anime data:", error);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div className="w-full h-auto bg-[red]">
      {animeData ? (
        animeData.data.map((anime) => (
          <div key={anime.id} className="flex items-center gap-4 p-2">
            {/* Anime Image */}
            <Image
              src={anime.attributes.posterImage.original}
              alt={anime.attributes.canonicalTitle}
              width={60}
              height={100}
            />
            {/* Anime Title */}
            <div>
              <h3 className="text-white text-lg">{anime.attributes.canonicalTitle}</h3>
            </div>
          </div>
        ))
      ) : (
        <p>Loading trending anime...</p>
      )}
    </div>
  );
};

"use client"
import { Header } from "./components/Header";
import { Trending } from "./components/Trending";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-[grey]">
      <Header />
      {/* <div className="p-4">
        {animeData ? (
          <pre>{JSON.stringify(animeData, null, 2)}</pre> 
        ) : (
          <p>Loading anime data...</p>
        )}
      </div> */}
      <Trending/>
    </div>
  );
}

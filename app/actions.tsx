"use server";
import AnimeCard, { AnimeProps } from "@/components/AnimeCard";

export const fecheAnimes = async (page: number) => {
  const res = await fetch(`https://shikimori.one/api/animes?${page}&limit=8&order=popularity`);
  const data = await res.json();

  return data.map((anime: AnimeProps, index: number) => <AnimeCard key={anime.id} anime={anime} index={index} />);
};

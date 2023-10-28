"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import ImageGrid from "./imagegrid";
import Ticket from "./ticket/ticket";

interface RouteParams {
  params: {
    name: string;
  };
}
type Film = {
  id: number;
  judul: string;
  banner: string;
  back: string;
  genre: string;
  durasi: string;
  sutradara: string;
  ratingusia: string;
  rate: string;
  star: number;
  viewer: number;
  sinopsisSatu: string;
  sinopsisDua: string;
};

async function getFilmData(name: string): Promise<Film> {
  const res = await fetch(`http://localhost:5000/films/${name}`);
  return res.json();
}

export default function DetailPage(e: RouteParams) {
  const [film, setFilm] = useState<Film | null>(null);
  const [show, setShow] = useState<boolean | false>(false);

  useEffect(() => {
    async function fetchData() {
      const { name } = e?.params ?? {};
      if (name) {
        const filmData: Film = await getFilmData(name);
        setFilm(filmData);
      }
    }

    fetchData();
  }, []);

  const handleTicket = () => {
    setShow(!show);
  };

  if (!film) {
    // Render a loading state or return null while waiting for film data
    return null;
  }

  const filmIdString = film.id.toString();

  return (
    <>
      <div className="duration-1000 flex flex-col relative">
        <div>
          <div className="w-full flex">
            <Image
              src={film.banner}
              width={1800}
              height={900}
              alt="banner"
              className="w-full 
            h-full object-cover aspect-[18/6]"
              loading="eager"
            />
          </div>
          <div className="flex w-full items-center justify-center px-[120px] pb-16">
            <div className="back justify-center flex w-1/4">
              <Image
                src={film.back}
                width={1800}
                height={900}
                alt="background"
                loading="eager"
                className="mt-[-80px] w-full h-full object-cover shadow-lg"
              />
            </div>
            <div className="text p-6 flex w-3/4">
              <div className="flex flex-col">
                <h1 className="text-3xl font-bold text-start">{film.judul}</h1>
                <div className="flex gap-16 mt-2">
                  <div className="flex-col">
                    <h3 className="text-xl font-medium">Genre</h3>
                    <h3 className="text-xl font-medium">Durasi</h3>
                    <h3 className="text-xl font-medium">Sutradara</h3>
                    <h3 className="text-xl font-medium">Rating Usia</h3>
                  </div>
                  <div className="flex-col">
                    <h3 className="text-xl font-medium">{film.genre}</h3>
                    <h3 className="text-xl font-medium">{film.durasi}</h3>
                    <h3 className="text-xl font-medium">{film.sutradara}</h3>
                    <h3 className="text-xl font-medium">{film.ratingusia}+</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full h-1 bg-gray-400"></div>
          <div className="rating flex w-full px-[120px] py-10  justify-between">
            <div className="flex w-1/3">
              <div className="flex item-center">
                <h1 className="text-8xl text-yellow-300 font-bold">
                  {film.rate}
                </h1>
                <div className="p-2">
                  <ImageGrid count={film.star} />
                </div>
              </div>
            </div>
            <div className="w-1 flex h bg-gray-400"></div>
            <div className="flex item-center w-1/3">
              <div className="flex flex-col items-center justify-center">
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#9ca3af"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#9ca3af"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  <h3 className="text-2xl font-bold">WATCHLIST</h3>
                </div>
                <p className="text-lg font-medium text-center">
                  {film.viewer}k Orang
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full h-6 bg-gray-400"></div>
          <h1 className="text-2xl font-bold py-10 text-center">SINOPSIS</h1>
          <div className="flex w-full h-1 bg-gray-400"></div>
          <div className="flex flex-col items-center justify-center py-10 px-[120px]">
            <p className="text-lg">{film.sinopsisSatu}</p>
            <br />
            <p className="text-lg">{film.sinopsisDua}</p>
          </div>
          <Ticket
            judul={film.judul}
            film={film.banner}
            back={film.back}
            id={filmIdString}
            showValue={show}
            showFunction={handleTicket}
          />
          <div className="button w-full justify-end flex px-[120px] py-10">
            <div
              onClick={handleTicket}
              // href={`/film/[id]/ticket/[idfilm]`}
              // as={`/film/${film.id}/ticket/${film.id}`}
              className="cursor-pointer bg px-10 py-4 rounded-full text-xl font-bold"
            >
              BELI TIKET
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

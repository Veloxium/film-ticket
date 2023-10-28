import Link from "next/link";
import React from "react";
import Image from "next/image";

type Films = {
  id: string;
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

async function getFilms() {
  const res = await fetch("http://localhost:5000/films",{cache: "no-store"});
  return res.json();
}
export default async function CardFilm() {
  const film: Films[] = await getFilms();

  return (
    <div>
      <div className="flex w-full items-center mb-8">
        <h1 className="font-bold text-2xl min-w-max pr-4">
          NOW SHOWING IN CINEMAS
        </h1>
        <div className="flex w-full h-1 bg-black"></div>
      </div>
      <div className="film flex justify-evenly gap-10">
        {film.map((e, index) => (
          <div className="card" key={index}>
            <Link
              href={`/film/[id]`}
              as={`/film/${e.id}`}
              className="p-4 hover:shadow-lg hover:shadow-yellow-300 duration-500 bg w-full h-full flex-col flex"
            >
              <Image src={e.back} width={400} alt="inception" height={10} />
              <h1 className="text-center pt-4 font-bold poppins">{e.judul}</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// .replace(/[:\s]/g, "").toLowerCase()

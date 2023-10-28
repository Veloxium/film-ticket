"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import bg4 from "./images/bg/1.png";
import bg2 from "./images/bg/2.png";
import bg3 from "./images/bg/3.png";
import bg1 from "./images/banner.png";

export default function Slides() {
  const contents = [
    {
      url: bg1,
    },
    {
      url: bg2,
    },
    {
      url: bg3,
    },
    {
      url: bg4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % contents.length;
      setCurrentIndex(newIndex);
    }, 5000);

    return () => clearInterval(interval); // Clean up the interval when the component is unmounted
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? contents.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === contents.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full h-full flex-col">
      <div className="object-cover bg-cover flex justify-center items-center relative">
        <Image
          src={contents[currentIndex].url}
          alt=""
          width={0}
          height={0}
          decoding="sync"
          className="duration-500 w-full z-10 aspect-[18/6] object-cover"
          loading="eager"
        />
        <button
          onClick={prevSlide}
          className="text-4xl p-6 absolute text-white z-20 left-0 hover:bg-slate-200 hover:bg-opacity-30 h-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="#FDCA16"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="text-4xl p-6 absolute text-white z-20 right-0 hover:bg-slate-200 hover:bg-opacity-30 h-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="#FDCA16"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

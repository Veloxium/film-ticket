"use client";

import { TicketContext } from "@/app/api/datacontext";
import Image from "next/image";
import React, { useContext } from "react";

function TicketListView() {
  const { tickets } = useContext(TicketContext);
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        {tickets.map((e, index) => {
          return (
            <div key={index} className="flex justify-between bg px-4 py-2">
              <div className="flex gap-4">
                <div className="w-[100px] relative items-center flex justify-center">
                  <Image
                    alt={"film"}
                    src={"/tickets.png"}
                    width={1800}
                    height={900}
                    className="w-full h-full aspect-auto absolute"
                  />
                  <div className="absolute font-bold text-center">
                    <p className="text-7xl">{e.no}</p>
                    <p className="text-white">No. Kursi</p>
                  </div>
                </div>
                <div className="flex-col py-4 justify-between flex">
                  <div className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                      />
                    </svg>
                    <p className="text-xl font-bold poppins">
                      {e.film}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <h3 className="text-lg text-white font-bold">
                      {e.name}
                    </h3>
                  </div>
                  <div className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                      />
                    </svg>
                    <div className="flex gap-2 bg-white px-2 items-center justify-center shadow-md">
                      <h3 className="font-bold">({e.time})</h3>
                      <h3 className="font-bold">-</h3>
                      <h3 className="font-bold">{e.date}</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="film w-[120px] items-center">
                <Image
                  alt={"film"}
                  src={e.back}
                  width={1800}
                  height={900}
                  className="w-full h-full object-cover aspect-auto"
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TicketListView;

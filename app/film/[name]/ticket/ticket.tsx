"use client";

import Image from "next/image";
import React, { useState } from "react";
import RadioGroup from "./radiogroup";
import { AnimatePresence, motion } from "framer-motion";

type TicketProps = {
  film: string;
  back: string;
  id: string;
  judul: string;
  showValue: boolean;
  showFunction: () => void;
};

export default function Ticket({
  film,
  back,
  showValue,
  judul,
  showFunction,
}: TicketProps) {
  const [show, setShow] = useState(false);

  const handleTicket = () => {
    showFunction();
  };

  const handleRefreshParent = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 1500);
    setTimeout(() => {
      showFunction();
    }, 2000);
  };

  return (
    <div className="flex">
      <AnimatePresence>
        {showValue && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="w-full h-full bg-black bg-opacity-50 fixed top-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 800 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 800 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className={`w-[40%] bg-white border-4 rounded-lg shadow-xl fixed top-6 left-1/3 h-min duration-500`}
            >
              <div className="w-full h-full mb-10 relative">
                <Image
                  src={film}
                  width={1800}
                  height={900}
                  className="w-full h-full aspect-[18/6] object-cover"
                  alt=".."
                  loading="eager"
                />
                <div
                  onClick={handleTicket}
                  className="absolute top-0 right-0 bg-red-600 cursor-pointer"
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex gap-4 justify-between px-4">
                <div className="shadow-lg shadow-yellow-500 cursor-pointer py-2 px-10 flex-col bg rounded-xl items-center justify-center text-center">
                  <p className="font-bold">1 JULY</p>
                  <h3 className="text-xl font-bold">HARI INI</h3>
                </div>
                <div className="shadow-md cursor-default py-2 px-10 flex-col bg-slate-300 rounded-xl items-center justify-center text-center">
                  <p className="font-bold">2 JULY</p>
                  <h3 className="text-xl font-bold">TUTUP</h3>
                </div>
                <div className="shadow-md cursor-default py-2 px-10 flex-col bg-slate-300 rounded-xl items-center justify-center text-center">
                  <p className="font-bold">3 JULY</p>
                  <h3 className="text-xl font-bold">SAMA HEHE</h3>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="gap-2 px-4 py-3 flex items-center">
                  <Image
                    src={"/bg2/logo.png"}
                    width={1800}
                    height={900}
                    alt="..."
                    className="w-10"
                  />
                  <p className="text-xl font-bold">LEM XXI</p>
                </div>
                <div className="px-4 py-1 items-center flex bg my-3 rounded-lg mx-4">
                  <p className="text-xl font-bold">XXI</p>
                </div>
              </div>
              <p className="px-4">
                1.40 KM Lombok Epicentrum Mall Lt. 2 Jl. Sriwijaya No. 332 Punia
                Mataram
              </p>
              <div className="flex justify-between">
                <div className="px-4 py-3 flex items-center">
                  <p className="text-2xl font-bold">2D</p>
                </div>
                <div className="items-center flex my-3 rounded-lg mx-4">
                  <p className="text-lg">Rp.160.000</p>
                </div>
              </div>
              <div className="justify-between px-4 py-1 flex">
                <RadioGroup
                  judul={judul}
                  back={back}
                  onRefresh={handleRefreshParent}
                  options={[
                    <div className="flex flex-1 justify-around">
                      <span>18:00</span>
                    </div>,
                    <div className="flex flex-1 justify-around">
                      <span>20:00</span>
                    </div>,
                    <div className="flex  flex-1 justify-around">
                      <span>22:00</span>
                    </div>,
                  ]}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-[40%] bg px-4 py-2 text-white rounded-lg shadow-xl fixed top-6 left-1/3 h-min duration-500"
          >
            <div className="flex gap-1 items-center justify-center">
              <p className="text-xl">MAKASIH, UDAH BELI TICKET NYA</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                />
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

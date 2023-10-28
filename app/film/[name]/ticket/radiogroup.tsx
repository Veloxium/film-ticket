"use client";

import React, { SyntheticEvent, useContext, useEffect, useState } from "react";
import Option from "./option";
import useFetchAPI from "@/app/api/fecthapi";
import SeatsGrid from "./seats";
import { useRouter } from "next/navigation";
import { TicketContext } from "@/app/api/datacontext";

interface IProps {
  options: React.ReactElement[];
  onChange?: (selectedIndex: number) => void;
  value?: number;
  labelText?: string;
  back: string;
  judul: string;
  onRefresh: () => void;
}

interface FormData {
  name: string;
  time: string;
}

const RadioGroup = ({
  options,
  onChange,
  value,
  labelText,
  onRefresh,
  back,
  judul
}: IProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(
    value || 0
  );
  const [inputError, setInputError] = useState(false);
  const onSelect = (index: number) => {
    setSelectedIndex(index);
    onChange && onChange(index);
  };

  const [formData, setFormData] = useState<FormData>({
    name: "",
    time: "",
  });
  const { tickets, addTicket } = useContext(TicketContext);


  if (selectedIndex === 0) {
    formData.time = "18:00";
  } else if (selectedIndex === 1) {
    formData.time = "20:00";
  } else if (selectedIndex === 2) {
    formData.time = "22:00";
  }

  let selectedData = useFetchAPI(selectedIndex || 0);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (formData.name.trim() === "") {
      // Input is empty, show an error message or perform desired action
      setInputError(true);

      // Shake effect for 1 second
      setTimeout(() => {
        setInputError(false);
      }, 1000);
      return;
    } else {
      await fetch("http://localhost:5000/LEM-XXI-INCEPTION-VIEW/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      addTicket({
        no: selectedData.length + 1,
        film: judul,
        name: formData.name,
        time: formData.time,
        back: back,
        date: "1 JULY 2023",
      });
      formData.name = "";
      formData.time = "";
      onRefresh();
    }
  };

  return (
    <div className="w-full">
      {labelText && (
        <label className="block text-gray-600 mb-2 text-xs lg:text-sm xl:text-base">
          {labelText}
        </label>
      )}
      <div className="flex justify-evenly w-full">
        {options.map((el, index) => (
          <Option
            key={index}
            index={index}
            selectedIndex={selectedIndex}
            onSelect={onSelect}
          >
            {el}
          </Option>
        ))}
      </div>
      <div className="mt-2 text-bg">Seats</div>
      <div className="h-[80px] my-4">
        <SeatsGrid count={selectedData.length} />
      </div>
      <div className="flex justify-between pb-8">
        <div className="flex gap-2">
          <div className="flex">
            <p className="text-xl text-red-600 font-bold">*</p>
            <p className=" text-red-600">Penting</p>
          </div>
          <input
            type="text"
            className={`px-2 py-1 border-2 bg-border rounded-lg ${
              inputError ? "error" : ""
            }`}
            value={formData.name}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                name: e.target.value,
              }))
            }
            placeholder="Masukan Nama"
            required
          />
        </div>

        {selectedData.length == 20 ? (
          <button className="px-4 bg-slate-300 py-1 rounded-lg hover:shadow-slate-400 hover:shadow-lg duration-300">
            TIKET HABIS
          </button>
        ) : (
          <button
            className="px-4 bg py-1 rounded-lg hover:shadow-yellow-300 hover:shadow-lg duration-300"
            onClick={handleSubmit}
          >
            BELI SEKARANG
          </button>
        )}
      </div>
    </div>
  );
};

export default RadioGroup;

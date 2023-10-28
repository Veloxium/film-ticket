"use client"

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export type DataTicket = {
  no: number;
  film: string;
  name: string;
  time: string;
  date: string;
  back: string;
};

export interface DataTicketContextInterface {
  tickets: DataTicket[];
  addTicket: (ticket: DataTicket) => void;
}

const defaultState = {
  tickets: [],
  addTicket: (ticket: DataTicket) => {},
} as DataTicketContextInterface;

export const TicketContext = createContext(defaultState);

type DataProvideProps = {
  children: ReactNode;
};

export default function TicketProvider({ children }: DataProvideProps) {
  const [tickets, setTickets] = useState<DataTicket[]>([]);

  const addTicket = (ticket: DataTicket) => {
    setTickets((prevTickets) => [...prevTickets, ticket]);
  };

  return (
    <TicketContext.Provider value={{ tickets, addTicket }}>
      {children}
    </TicketContext.Provider>
  );
}

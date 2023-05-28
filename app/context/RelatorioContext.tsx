"use client"

import { useState, createContext } from 'react';
interface RelatorioContextProps {
  children: React.ReactNode;
}

interface RelatorioContextValue {
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>
}

export interface Relatorio {
    name: string,
    date: Date,
    message: string
}


export interface DataContextType {
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
}

   export const RelatorioContext = createContext<RelatorioContextValue>({
    data: {},
    setData: () => {}
   });


export default function RelatorioContextFunc({ children }: RelatorioContextProps) {
    const [data,setData] = useState([]);


  return <RelatorioContext.Provider value={{data, setData}}>{children}</RelatorioContext.Provider>;
}
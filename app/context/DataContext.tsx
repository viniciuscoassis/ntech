"use client"

import { useState, createContext } from 'react';
import { condominio, data } from '../interface/types';

interface DataContextProps {
  children: React.ReactNode;
}

interface DataContextValue {
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>
}

export interface DataContextType {
  data: condominio[];
  setData: React.Dispatch<React.SetStateAction<data>>;
}

   export const DataContext = createContext<DataContextValue>({
    data: {},
    setData: () => {}
   });


export default function DataContextFunc({ children }: DataContextProps) {
    const [data,setData] = useState([]);


  return <DataContext.Provider value={{data, setData}}>{children}</DataContext.Provider>;
}
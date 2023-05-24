"use client"

import { useState, createContext } from 'react';

interface DataContextProps {
  children: React.ReactNode;
}

interface DataContextValue {
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>
}

   export const DataContext = createContext<DataContextValue>({
    data: {},
    setData: () => {}
   });


export default function DataContextFunc({ children }: DataContextProps) {
    const [data,setData] = useState([]);


  return <DataContext.Provider value={{data, setData}}>{children}</DataContext.Provider>;
}
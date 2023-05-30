"use client"

import { useState, createContext } from 'react';
import { condominio } from '../interface/types';

interface ScriptContextProps {
  children: React.ReactNode;
}

interface ScriptContextValue {
  script: any;
  setScript: React.Dispatch<React.SetStateAction<any>>
}

interface Script {
  name: string,
  account: string,
  city: string,


}

export interface ScriptContextType {
  script: Script;
  setScript: React.Dispatch<React.SetStateAction<Script>>;
}

   export const ScriptContext = createContext<ScriptContextValue>({
    script: {},
    setScript: () => {}
   });


export default function ScriptContextFunc({ children }: ScriptContextProps) {
    const [script,setScript] = useState([]);


  return <ScriptContext.Provider value={{script, setScript}}>{children}</ScriptContext.Provider>;
}
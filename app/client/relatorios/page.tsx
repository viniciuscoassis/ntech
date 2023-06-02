'use client'
import { RelatorioContext } from "@/app/context/RelatorioContext";
import Relatorio from "@/components/relatorios/Relatorio";
import { Key, useContext, useEffect } from "react";

export default function Relatorios(){
  const {data: relatorio, setData: setRelatorio} = useContext(RelatorioContext);

    return (
      <>
        <h1 className=' text-5xl font-bold mb-10'>Relatórios</h1>
        <h2 className='text-3xl mb-5'>Histórico de ações:</h2>
        <div className="border-2 w-full h-4/5 flex flex-col">
          {relatorio?.map((value: { name: string; date: Date; message: string; }, index: Key | null | undefined) => <Relatorio key={index} name={value.name} date={value.date} message={value.message}/>)}
        {/* <Relatorio name="Vinicius" date="28 de maio" hour="19:19" message="Adicionou um condomínio"/> */}
        </div>
      </>
    );
}
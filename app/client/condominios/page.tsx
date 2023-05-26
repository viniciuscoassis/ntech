'use client';
import { DataContext } from "@/app/context/DataContext";
import Button from "@/components/Button";
import Condominio from "@/components/condominios/Condominio";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";


export default function Condominios(){
    const { data, setData } = useContext(DataContext);

    const router = useRouter();

    useEffect(()=>{
      console.log(data);
    }, []);
    return (
      <>
        <h1 className=' text-5xl font-bold mb-10'>Condomínios</h1>
        {data.length != 0 ? (
          ''
        ) : (
          <>
            <div className=''>Não há condominios registrados</div>
            <Button onClick={()=> router.push('/client/infraestrutura')} label="Registre"/>
          </>
        )}

        {/* <Condominio  /> */}
      </>
    );
}
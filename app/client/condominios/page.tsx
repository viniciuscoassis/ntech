'use client';
import { DataContext, DataContextType } from '@/app/context/DataContext';
import Button from '@/components/Button';
import Condominio from '@/components/condominios/Condominio';
import AccountModal from '@/components/modals/AccountModal';
import ScriptModal from '@/components/modals/ScriptModal';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';

export default function Condominios() {
  const { data, setData } = useContext<DataContextType>(DataContext);

  const router = useRouter();

  useEffect(() => {
  }, []);
  return (
    <>
    <ScriptModal/>
    <AccountModal/>
      <h1 className=' text-5xl font-bold mb-10'>Condomínios</h1>
      <div className='flex flex-wrap'>
        {data.length != 0 ? (
          data?.map((value, index) => (
            <Condominio
              cidade={value.cidade}
              estado={value.estado}
              base={value.base}
              key={index}
            />
          ))
        ) : (
          <div>
            <div className=''>Não há condominios registrados</div>
            <Button
              onClick={() => router.push('/client/infraestrutura')}
              label='Registre'
            />
          </div>
        )}
   
      </div>
    </>
  );
}

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

  useEffect(()=> {
    console.log(data);
  },[data])

  return (
    <>
      <ScriptModal />
      <AccountModal />
      <h1 className=' text-5xl font-bold mb-10'>Condomínios</h1>
      <div className='flex flex-wrap'>
          <Condominio
              name={'Condominio teste'}
              conta={18}
              cidade={'Ribeirao Preto'}
              estado={'São Paulo'}
              base={'Base teste'}
            />
              <Condominio
              name={'Condominio teste 2'}
              conta={18}
              cidade={'Ribeirao Preto'}
              estado={'São Paulo'}
              base={'Base teste 2'}
            />
              <Condominio
              name={'Condominio teste 3'}
              conta={18}
              cidade={'Ribeirao Preto'}
              estado={'São Paulo'}
              base={'Base teste 3'}
            />
              <Condominio
              name={'Condominio teste 4'}
              conta={18}
              cidade={'Limeira'}
              estado={'São Paulo'}
              base={'Base teste 4'}
            />

              <Condominio
              name={'Condominio teste 5'}
              conta={18}
              cidade={'Poços de Caldas'}
              estado={'Minas Gerais'}
              base={'Base teste 5'}
            />
            <Condominio
              name={'Condominio teste 6'}
              conta={18}
              cidade={'Poços de Caldas'}
              estado={'Minas Gerais'}
              base={'Base teste 6'}
            />
        {data.length != 0 ? (
          data?.map((value, index) => (
            <Condominio
              name={value.name}
              conta={value.conta}
              cidade={value.cidade}
              estado={value.estado}
              base={value.base}
              key={index}
            />
          ))
        ) : (''
          // <div>
          //   <div className=''>Não há condominios registrados</div>
          //   <Button
          //     onClick={() => router.push('/client/infraestrutura')}
          //     label='Registre'
          //   />
          // </div>
        )}

      </div>
    </>
  );
}

'use client';
import { DataContext, DataContextType } from '@/app/context/DataContext';
import Button from '@/components/Button';
import Condominio from '@/components/condominios/Condominio';
import AccountModal from '@/components/modals/AccountModal';
import ScriptModal from '@/components/modals/ScriptModal';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { VscDebugDisconnect } from 'react-icons/vsc';

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
       <div className="flex justify-between bg-primary text-white px-8">
        <div className="max-w-1/3 w-1/3 uppercase">condomínio</div>
        <div className="max-w-1/3 w-1/3 uppercase text-center">permanência</div>
        <div className="max-w-1/3 w-1/3 uppercase text-right">status</div>
      </div>
      <div className="h-4/5 border overflow-auto ">
        
      <div className="border relative ">
        <div className="p-8 flex justify-between items-center border-b-2 h-20 ">
          <div className="flex items-center max-w-1/3 w-1/3 ">
            <div className="font-bold">Condomínio Teste</div>
          </div>
          <div className="w-1/3 max-w-1/3 text-center">15 dias 3h</div>
          <div className="w-1/3 max-w-1/3 text-right text-green-500 ">ativo</div>
          <div className="absolute cursor-pointer right-20 top-7"><VscDebugDisconnect size={28}/></div>
        </div>
      </div>  
      </div>
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

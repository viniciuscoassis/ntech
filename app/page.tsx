'use client';
import useRegisterModal from '@/hooks/useRegisterModal';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function Home() {
  const registerModal = useRegisterModal();
  const session = useSession();

  useEffect(()=>{
    console.log(session);
  })

  return (
    <>
      <div className='h-screen flex justify-center items-center bg-gradient-to-r from-primary to-secondary  text-white w-full'>
        <div className=' mx-auto w-1/2 h-1/3 flex flex-col justify-between items-center'>
          <h1 className='text-5xl font-bold text-center'>NTECH NETWORK E COMUNICAÇÃO</h1>
          <p className='text-2xl'>Logue-se para continuar</p>
          <button className='bg-slate-600 w-80 h-12 rounded hover:scale-110 hover:bg-slate-500 transition-all' onClick={registerModal.onOpen}>Iniciar</button>
        </div>
      </div>
    </>
  );
}

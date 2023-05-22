'use client'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Client() {
  const router = useRouter();
  const session = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/');
    },
  });

  useEffect(() => {
  }, []);
  return (
    <div className='h-full flex justify-center items-center w-full'>
      <div className='text-slate-600 mx-auto w-1/2 h-4/6 flex flex-col justify-center mb-20 bg-white rounded-lg shadow-lg items-center lg:w-10/12'>
        <div className='flex flex-col justify-between items-center h-1/3'>
          <h1 className=' font-bold text-center text-3xl lg:text-5xl'>
            N-GATEWAY
          </h1>
          <p className='text-1xl lg:text-2xl text-center'>
            Faça cadastro para geração de script de configuração
          </p>
          <button className='bg-slate-600 text-white w-3/6 h-12 rounded hover:scale-110 hover:bg-slate-500 transition-all'>
            Iniciar
          </button>
        </div>
      </div>
    </div>
  );
}

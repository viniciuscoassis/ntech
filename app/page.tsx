'use client';
import Button from '@/components/Button';
import LoginModal from '@/components/modals/LoginModal';
import RegisterModal from '@/components/modals/RegisterModal';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import logo from "../assets/ngateway.png"
import Image from 'next/image';
import { toast } from 'react-hot-toast';

export default function Home() {
  const session = useSession();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(() => {

    setIsLoading(true);
    const values = { email, password };
    signIn('credentials', { ...values, redirect: false })
      .then((res) => {
        if (!res?.error) {
          router.push('/client/dashboard');
          toast.success('Logado com sucesso.');
        } else {
          toast.error('Credenciais inválidas');
          setPassword('');
        }
      })
      .finally(() => { setIsLoading(false) })
  }, [email, password]);

  useEffect(() => {
    if (session?.status == 'authenticated') {
      router.push('/client/dashboard');

    }
  }, [session.status])

  return (
    <>
      <RegisterModal />
      <LoginModal />
      <div className='h-screen flex justify-center items-center bg-gradient-to-r from-primary to-secondary  text-white w-full'>
        <div className=' mx-auto w-1/2 h-1/3 flex flex-col justify-between items-center'>
          <div className='flex flex-col gap-4 bg-white w-96 h-96 justify-center items-center relative'>
            <p className='text-xl text-black'>Logue-se para continuar</p>
            <input
              placeholder='email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              disabled={isLoading}
              className='border-2 text-gray-400'
            />
            <input
              placeholder='senha'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              disabled={isLoading}
              type="password"
              className='border-2 text-gray-400'
            />
            <Button label='Entrar' onClick={onSubmit} disabled={isLoading} />
            <div className='absolute right-4 bottom-4'>            <Image src={logo} alt='logo' width={70} />
            </div>
          </div>
          {/* <button className='bg-slate-600 w-80 h-12 rounded hover:scale-110 hover:bg-slate-500 transition-all' onClick={loginModal.onOpen}>Iniciar</button> */}
        </div>
      </div>
    </>
  );
}

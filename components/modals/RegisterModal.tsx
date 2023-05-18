'use client';
import useLoginModal from '@/hooks/useLoginModal';
import { useCallback, useState } from 'react';
import Input from '../Input';
import Modal from '../Modal';
import useRegisterModal from '@/hooks/useRegisterModal';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react';

const RegisterModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }
    registerModal.onClose();
    loginModal.onOpen();
  }, [isLoading, registerModal, loginModal]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      await axios.post('/api/register', {
        email,
        name,
        password,
      });

      toast.success('Conta criada.');
      registerModal.onClose();
      loginModal.onOpen();
    } catch (err) {
      toast.error('Algo deu errado.');
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [registerModal, email, password, name]);

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Input
        placeholder='email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        placeholder='nome'
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoading}
      />
      <Input
        placeholder='senha'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
        type='password'
      />
    </div>
  );

  const footerContent = (
    <div className='flex mx-auto text-neutral-400 text-center mt-4'>
      <p>Já tem uma conta?</p>
      <span
        onClick={onToggle}
        className='text-white cursor-pointer hover:underline ml-2'
      >
        Entrar
      </span>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title='Crie sua conta'
      actionLabel='Criar'
      onClose={registerModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;

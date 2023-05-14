'use client';
import useLoginModal from '@/hooks/useLoginModal';
import { useCallback, useState } from 'react';
import Input from '../Input';
import Modal from '../Modal';
import useRegisterModal from '@/hooks/useRegisterModal';

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
      // REGISTER
      setIsLoading(true);
      registerModal.onClose();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [registerModal]);

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Input
        placeholder='email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        placeholder='name'
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoading}
      />
      <Input
        placeholder='password'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
    </div>
  );

  const footerContent = (
    <div className='flex mx-auto text-neutral-400 text-center mt-4'>
      <p>Already have an account?</p>
      <span
        onClick={onToggle}
        className='text-white cursor-pointer hover:underline ml-2'
      >
        Sign in
      </span>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title='Create an account'
      actionLabel='Register'
      onClose={registerModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;

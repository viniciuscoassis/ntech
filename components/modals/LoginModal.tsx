'use client'
import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginModal = () => {

    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
      if (isLoading) {
        return;
      }
      loginModal.onClose();
      registerModal.onOpen();
    }, [isLoading, registerModal, loginModal]);


    const onSubmit = useCallback( () => {
    
        setIsLoading(true);
        const values = {email, password};
        signIn('credentials', { ...values, redirect: false })
        .then((res)=>{
          console.log(res);
          if(!res?.error){
        loginModal.onClose();
        router.push('/client');
         toast.success('Logado com sucesso.');
          } else {
            toast.error('Credenciais inválidas');
          }
        })
        .finally(()=> {setIsLoading(false)})
    }, [loginModal, email, password]);

    const bodyContent = (
      <div className='flex flex-col gap-4'>
        <Input
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          disabled={isLoading}
        />
        <Input
          placeholder='senha'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          disabled={isLoading}
          type="password"
        />
      </div>
    );

      const footerContent = (
        <div className='text-neutral-400 text-center mt-4'>
          {/* <p>Primeira vez no n-gateway? </p>
          <span
            onClick={onToggle}
            className='text-white cursor-pointer hover:underline'
          >
            Criar uma conta
          </span> */}
        </div>
      );

    return(
    <Modal
        disabled={isLoading}
        isOpen={loginModal.isOpen}
        title="Entrar em sua conta"
        actionLabel="Entrar"
        onClose={loginModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
        footer={footerContent}
    />)
}

export default LoginModal;
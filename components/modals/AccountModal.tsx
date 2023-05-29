'use client'
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import { useRouter } from "next/navigation";
import useAccountModal from "@/hooks/useAccountModal";
import useScriptModal from "@/hooks/useScriptModal";

const AccountModal = () => {

    const accountModal = useAccountModal();
    const scriptModal = useScriptModal();

    const router = useRouter();

    const [conta, setConta] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // const onToggle = useCallback(() => {
    //   if (isLoading) {
    //     return;
    //   }
    //   loginModal.onClose();
    //   registerModal.onOpen();
    // }, [isLoading, registerModal, loginModal]);


    const onSubmit = useCallback( () => {
    
        setIsLoading(true);
        accountModal.onClose();
        scriptModal.onOpen();
        setIsLoading(false)


    }, []);

    const bodyContent = (
      <div className='flex flex-col gap-4'>
        <Input
          placeholder='Numero de conta'
          onChange={(e) => setConta(e.target.value)}
          value={conta}
          disabled={isLoading}
        />
      </div>
    );

      const footerContent = (
        <div className='text-neutral-400 text-center mt-4'>
          {/* <p>Primeira vez no n-gate? </p>
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
        isOpen={accountModal.isOpen}
        title="Adicionar numero de conta"
        actionLabel="Criar Script"
        onClose={accountModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
        footer={footerContent}
    />)
}

export default AccountModal;
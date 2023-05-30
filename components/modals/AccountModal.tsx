'use client'
import { useCallback, useContext, useEffect, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import { useRouter } from "next/navigation";
import useAccountModal from "@/hooks/useAccountModal";
import useScriptModal from "@/hooks/useScriptModal";
import { ScriptContext } from "@/app/context/Script";

const AccountModal = () => {

    const accountModal = useAccountModal();
    const scriptModal = useScriptModal();

    const {script, setScript} = useContext(ScriptContext);

    const router = useRouter();

    const [conta, setConta] = useState('');
    const [nomeCondominio, setNomeCondominio] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // const onToggle = useCallback(() => {
    //   if (isLoading) {
    //     return;
    //   }
    //   loginModal.onClose();
    //   registerModal.onOpen();
    // }, [isLoading, registerModal, loginModal]);


useEffect(()=> {console.log(script)}, [])

    const onSubmit = useCallback( () => {
        setScript({...script, name: nomeCondominio, account: conta});
        setIsLoading(true);
        accountModal.onClose();
        scriptModal.onOpen();
        setIsLoading(false)

        console.log(script);
    }, [isLoading, accountModal, scriptModal]);

    const bodyContent = (
      <div className='flex flex-col gap-4'>
        <Input
          placeholder='Numero de conta'
          onChange={(e) => {setConta(e.target.value)}}
          value={conta}
          disabled={isLoading}
          type="text"
        />
         <Input
          placeholder='Nome do condomínio'
          onChange={(e) => {setNomeCondominio(e.target.value)}}
          value={nomeCondominio}
          disabled={isLoading}
          type="text"
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
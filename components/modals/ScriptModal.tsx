'use client'
import { useCallback, useContext, useEffect, useState } from "react";
import Modal from "../Modal";
import { useRouter } from "next/navigation";
import useScriptModal from "@/hooks/useScriptModal";
import { ScriptContext } from "@/app/context/Script";

const ScriptModal = () => {

    const scriptModal = useScriptModal();

    const router = useRouter();

    const {script, setScript} = useContext(ScriptContext);

    const [isLoading, setIsLoading] = useState(false);

    // const onToggle = useCallback(() => {
    //   if (isLoading) {
    //     return;
    //   }
    //   loginModal.onClose();
    //   registerModal.onOpen();
    // }, [isLoading, registerModal, loginModal]);

    const onSubmit = useCallback( () => {
        console.log(script);
        // setIsLoading(true);
        // router.back();
        // setIsLoading(false);
        // scriptModal.onClose();
      

    }, [script, isLoading,scriptModal]);

    const bodyContent = (
      <div className='text-white bg-gray-300 flex flex-col gap-4'>
        <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
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
        isOpen={scriptModal.isOpen}
        title="Seu Script:"
        actionLabel="Voltar"
        onClose={scriptModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
        footer={footerContent}
    />)
}

export default ScriptModal;
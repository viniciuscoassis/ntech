'use client'
import { useCallback, useState } from "react";
import Modal from "../Modal";
import { useRouter } from "next/navigation";
import useScriptModal from "@/hooks/useScriptModal";

const ScriptModal = () => {

    const scriptModal = useScriptModal();

    const router = useRouter();

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
        router.back();
        setIsLoading(false);



    }, []);

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
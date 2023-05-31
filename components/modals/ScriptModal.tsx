'use client'
import { useCallback, useContext, useEffect, useState } from "react";
import Modal from "../Modal";
import { useRouter } from "next/navigation";
import useScriptModal from "@/hooks/useScriptModal";
import { ScriptContext } from "@/app/context/Script";
import { baseScript } from "@/app/const/baseScript";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {MdOutlineContentCopy} from "react-icons/md"
import { toast } from "react-hot-toast";





const ScriptModal = () => {

    const scriptModal = useScriptModal();

    const router = useRouter();

    const {script, setScript} = useContext(ScriptContext);
    const [scriptValue, setScriptValue] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    // const onToggle = useCallback(() => {
    //   if (isLoading) {
    //     return;
    //   }
    //   loginModal.onClose();
    //   registerModal.onOpen();
    // }, [isLoading, registerModal, loginModal]);

  useEffect(()=> {
    setScriptValue(baseScript);
  })

    const onSubmit = useCallback( () => {
        console.log(script);
        setIsLoading(true);
        router.back();
        setIsLoading(false);
        scriptModal.onClose();
      

    }, [script, isLoading,scriptModal]);

    const bodyContent = (
     <>
     <div className="mb-5 flex justify-between text-white">
        <div>Copiar script -{'>'}</div>
        <CopyToClipboard text={scriptValue} onCopy={(result) => {
          if(result){
            toast.success("Copiado");
          }
        }}>
         <button><MdOutlineContentCopy/> </button>
        </CopyToClipboard>
     </div>
      <div className='max-w-full max-h-[35rem] overflow-y-auto break-words h-full bg-gray-300 flex flex-col gap-4'>
        <div>{scriptValue}</div>
      </div>
      </>
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
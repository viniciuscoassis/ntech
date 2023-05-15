'use client'
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import useRegisterModal from "@/hooks/useRegisterModal";

export default function Home() {

  const registerModal = useRegisterModal();

  
  return (
    <>
    <RegisterModal/>
    <LoginModal/>
      <div className=' bg-gradient-to-r from-primary to-secondary h-screen text-white'>
        <div>
          <h1>NTECH NETWORK E COMUNICAÇÃO</h1>
          <p>LOGUE-SE PARA CONTINUAR</p>
          <button onClick={registerModal.onOpen}>login</button>
        </div>
      </div>
    </>
  );
}

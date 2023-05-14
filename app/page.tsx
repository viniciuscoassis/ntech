import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";

export default function Home() {
  return (
    <>
    <RegisterModal/>
    <LoginModal/>
      <div className=' bg-gradient-to-r from-primary to-secondary h-screen text-white'>
        <div>
          <h1>NTECH NETWORK E COMUNICAÇÃO</h1>
          <p>LOGUE-SE PARA CONTINUAR</p>
          <button>login</button>
        </div>
      </div>
    </>
  );
}

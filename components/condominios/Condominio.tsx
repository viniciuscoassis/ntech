import { FaCity } from "react-icons/fa";
import Button from "../Button";
import { condominio } from "@/app/interface/types";
import useAccountModal from "@/hooks/useAccountModal";
import { useContext } from "react";
import { ScriptContext } from "@/app/context/Script";
import useScriptModal from "@/hooks/useScriptModal";

const Condominio = (body: condominio) => {
  const accountModal = useAccountModal();
  const scriptModal = useScriptModal();
  const { script, setScript } = useContext(ScriptContext);

  const submit = () => {
    setScript({ base: body.base, city: 17 });
    scriptModal.onOpen();
  }

return (
  <>
    {' '}
    <div className='bg-white shadow-lg p-10 mr-5 mb-5 rounded-lg w-96 h-96 flex flex-col justify-between items-center '>
      <FaCity size={60} color='#082F49' />
      <div className=' w-full flex flex-col items-center'>
        <div className='w-full flex justify-between'>
          <div className=''>Nome</div> <div>{body.name}</div>
        </div>
        <div className='w-full flex justify-between'>
          <div className=''>Número da conta</div> <div>{body.conta}</div>
        </div>
        <div className='w-full flex justify-between'>
          <div className=''>Estado</div> <div>{body.estado}</div>
        </div>
        <div className='w-full flex justify-between'>
          <div className=''>Cidade</div> <div>{body.cidade}</div>
        </div>{' '}
        <div className='w-full flex justify-between'>
          <div className=''>Base</div> <div>{body.base}</div>
        </div>{' '}
      </div>
      <Button onClick={submit} label={'Gerar script'} />
    </div>
  </>
);
}
export default Condominio
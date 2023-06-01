import { FaCity } from "react-icons/fa";
import Button from "../Button";
import { condominio } from "@/app/interface/types";
import useAccountModal from "@/hooks/useAccountModal";
import { useContext } from "react";
import { ScriptContext } from "@/app/context/Script";

const Condominio = (body: condominio) => {
  const accountModal = useAccountModal();
  const { script, setScript } = useContext(ScriptContext);

  const submit = () => {
    const extractedCity = body.cidade.split("-")[0].trim();
    setScript({ base: body.base, city: extractedCity });
    accountModal.onOpen();
  }

return (
  <>
    {' '}
    <div className='bg-white shadow-lg p-10 mr-5 mb-5 rounded-lg w-96 h-96 flex flex-col justify-between items-center '>
      <FaCity size={60} color='#082F49' />
      <div className=' w-full flex flex-col items-center'>
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
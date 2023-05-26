import { FaCity } from "react-icons/fa";
import Button from "../Button";
import { condominio } from "@/app/interface/types";

const Condominio = (body : condominio) => {
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
            <div className='w-full flex justify-between'>
              <div className=''>Servidor</div> <div>{body.servidor.name}</div>
            </div>
            <div className='w-full flex justify-between'>
              <div className=''>Ip</div> <div>{body.servidor.ip}</div>
            </div>
          </div>
          <Button label={'Gerar script'} />
        </div>
      </>
    );
}
export default Condominio
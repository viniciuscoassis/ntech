import { FaUserCircle } from "react-icons/fa"

export default function Seguranca(){
    return (
      <>
        <h1 className=' text-5xl font-bold mb-10'>Segurança</h1>
        <h2 className='text-3xl mb-5'>Gerenciar permissões:</h2>
      <div className="lg:w-1/2 ">
          <div className="flex flex-col mb-10">
            <input placeholder='Adicionar pessoas à dependencia da empresa'></input>
            <button className="bg-primary text-white text-center">Adicionar</button>
          </div>
          <div className="flex justify-between items-center border-b-2 h-20 ">
            <div className="flex items-center mr-5 ">
              <FaUserCircle size={40} />
              <div className="ml-5">vinicius</div>
            </div>
            <select>
              <option>administrador</option>
              <option>editor</option>
              <option>leitor</option>
            </select>
          </div>
        </div>
      </>
    );
}
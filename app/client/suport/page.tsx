'use client'
import { useSession } from "next-auth/react";

const SuportePage = () => {
  const session = useSession();
 return <>
      <h1 className=' text-5xl font-bold mb-10'>Suporte</h1>
      <div className="flex items-center ">
      <form className="flex flex-col w-1/4 ">
        <div className="flex">
          <div className="font-bold w-32">nome: </div>
          <input className="w-full border" value={session?.data?.user?.name || undefined}></input>
        </div>
         <div className="flex">
          <div className="font-bold w-32">email: </div>
          <input className="w-full border" value={session?.data?.user?.email || undefined}></input>
        </div>
        <div className="font-bold">mensagem:</div>
        <textarea className="border"></textarea>
       
      </form>
        </div>
</>
};

export default SuportePage;
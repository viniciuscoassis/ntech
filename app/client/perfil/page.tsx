'use client'
import { useSession } from "next-auth/react";
import { FaUserCircle } from "react-icons/fa";

const ProfilePage = () => {

    const session = useSession();
    

    return <>
        <h1 className=' text-5xl font-bold mb-10'>Perfil</h1>
        <div className="flex items-center border h-40 p-10">
            <FaUserCircle size={60} />
            <div className="flex flex-col text-xl ml-10"> 
            
            <div className="flex ">
                <div className="font-bold">nome:</div>
                <span className="ml-5">{session.data?.user?.name}</span>
            </div>
               <div className="flex ">
                <div className="font-bold">email:</div>
                <span className="ml-5">{session.data?.user?.email}</span>
            </div>
            
    
            </div>
           </div>

      </>
}

export default ProfilePage;
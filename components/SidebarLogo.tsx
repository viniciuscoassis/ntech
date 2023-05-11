'use client'
import { useRouter } from "next/navigation";

const SidebarLogo = () => {

    const router = useRouter();

  return (
    <div onClick={() => {router.push('/')}} 
    className='
     text-white
     border-b-[1px]
    bd-red-300 
    h-14
    p-4
    flex
    justify-center 
     items-center
    hover:bg-red-300 hover:bg-opacity-10 cursor-pointer transition bottom-5'>
        <div className=" text-2xl ">N-GATEWAY</div>
    </div>
  );
};

export default SidebarLogo;

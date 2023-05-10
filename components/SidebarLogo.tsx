'use client'
import { useRouter } from "next/navigation";

const SidebarLogo = () => {

    const router = useRouter();

  return (
    <div onClick={() => {router.push('/')}} 
    className='
    siz
    bd-red-300 
    rounded-full 
    h-14
    p-4
    flex
    items-center 
    justify-center 
    hover:bg-red-300 hover:bg-opacity-10 cursor-pointer transition'>
        <div className="">N-GATEWAY</div>
    </div>
  );
};

export default SidebarLogo;

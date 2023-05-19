'use client';
import { useRouter } from 'next/navigation';
import { TbCircleLetterN } from 'react-icons/tb';

interface Props {
  open: boolean;
}

const SidebarLogo: React.FC<Props> = ({ open }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push('/client');
      }}
      className='
     text-white
     border-b-[1px]
    bd-red-300 
    h-14
    p-4
    flex
    justify-center 
     items-center
    hover:bg-red-300 hover:bg-opacity-10 cursor-pointer transition bottom-5'
    >
      <div className={`${open ? '' : ' w-full justify-center'} text-2xl`}>
        {open ? 'N-GATEWAY' : <TbCircleLetterN size={38} />}
      </div>
    </div>
  );
};

export default SidebarLogo;

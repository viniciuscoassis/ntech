
interface Props{
  open: boolean;
}

const SidebarFooter: React.FC<Props>= ({open}) => {

  return (
    <div
      className={`
      ${open ? 'w-52' : ''}
      absolute bottom-0 
     text-white
    h-14
    p-4
    flex
    justify-center 
     items-center
    hover:bg-red-300 hover:bg-opacity-10 cursor-pointer transition bottom-5`}
    >
      <div className=' text-[10px] '>{`${
        open ? 'NTECH NETWORK E COMUNICAÇÃO' : ''
      }`}</div>
    </div>
  );
};

export default SidebarFooter;

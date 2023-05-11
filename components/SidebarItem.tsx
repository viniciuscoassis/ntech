import { IconType } from 'react-icons';

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
}
const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
}) => {
  return (
    <div
      className='flex hover:bg-slate-300
        hover:bg-opacity-10
        cursor-pointer  w-full  p-4 align-middle '
    >
      <div
        className='relative
        flex
        '
      >
        <Icon size={28} color='white' />
      </div>
      <div className=' hidden md:block ml-2 text-left text-white'>{label}</div>
    </div>
  );
};

export default SidebarItem;

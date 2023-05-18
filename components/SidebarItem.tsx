import { useRouter } from 'next/navigation';
import { IconType } from 'react-icons';

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
  children?: ChildProps[];
  open: boolean;
}
interface ChildProps {
  label: string;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
  open,
  children,
}) => {
  const router = useRouter();

  return (
    <div
      className='flex hover:bg-slate-300
        hover:bg-opacity-10
        cursor-pointer  w-full  p-4 align-middle '
      onClick={onClick? onClick : () => router.push(`${href}`)}
    >
      <div
        className='
        relative
        flex
        '
      >
        <Icon size={28} color='white' />
      </div>
      <div
        className={` ${open ? 'block' : 'hidden'} ml-2 text-left text-white`}
      >
        {label}
      </div>
    </div>
  );
};

export default SidebarItem;

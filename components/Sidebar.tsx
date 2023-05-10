import SidebarItem from './SidebarItem';
import SidebarLogo from './SidebarLogo';
import { RiDashboardLine, RiRouteFill } from 'react-icons/ri';
import {BsFillGearFill} from 'react-icons/bs'
import {FaCity} from "react-icons/fa"
import {MdOutlineSecurity} from 'react-icons/md'
import {HiOutlineDocumentReport} from 'react-icons/hi'
import {IoMdKey} from "react-icons/io"

const Sidebar = () => {
  const items = [
    {
      label: 'Dashboard',
      href: '/client/dashboard',
      icon: RiDashboardLine,
    },
    {
      label: 'Infraestrutura',
      href: '/client/infraestrutura',
      icon: BsFillGearFill,
    },
    {
      label: 'Condomínios',
      href: '/client/condominios',
      icon: FaCity,
    },
    {
      label: 'VPNs',
      href: '/client/vpns',
      icon: RiRouteFill,
    },
    {
      label: 'Segurança',
      href: '/client/seguranca',
      icon: MdOutlineSecurity,
    },
    {
      label: 'Relatórios',
      href: '/client/relatorios',
      icon: HiOutlineDocumentReport,
    },
    {
      label: 'Licenças',
      href: '/client/licencas',
      icon: IoMdKey,
    },
  ];
  return (
    <div className=' bg-white col-span-1 h-full pr-4 md:pr-6'>
      <div className='flex flex-col'>
        <div className=' space-y-2 '>
          <SidebarLogo />
          {items.map((item, index) => (
            <SidebarItem key={index} label={item.label} href={item.href} icon={item.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

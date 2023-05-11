import SidebarItem from './SidebarItem';
import SidebarLogo from './SidebarLogo';
import { RiDashboardLine, RiRouteFill } from 'react-icons/ri';
import {BsFillGearFill} from 'react-icons/bs'
import {FaCity} from "react-icons/fa"
import {MdOutlineSecurity} from 'react-icons/md'
import {HiOutlineDocumentReport} from 'react-icons/hi'
import {IoMdKey} from "react-icons/io"
import SidebarFooter from './SIdebarFooter';

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
      childrens: [
        {
          label: 'Cidade',
          href: '/client/infraestrutura/cidade',
        },
        {
          label: 'Estados',
          href: '/client/infraestrutura/estados',
        },
        {
          label: 'Base de monitoramento',
          href: '/client/infraestrutura/base-de-monitoramento',
        },
        {
          label: 'Servidores',
          href: '/client/infraestrutura/servidores',
        },
      ],
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
      childrens: [
        {
          label: 'Peers Site-to-Site',
          href: '/client/vpns/site-to-site',
        },
        {
          label: 'Peers Site-to-Client',
          href: '/client/vpns/site-to-client',
        },
        {
          label: 'Vpns Ativas',
          href: '/client/vpns/vpns-ativas',
        },
      ],
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
      childrens: [
        {
          label: 'Autenticações VPN',
          href: '/client/relatorios/autenticacoes-vpn',
        },
      ],
    },
    {
      label: 'Licenças',
      href: '/client/licencas',
      icon: IoMdKey,
    },
  ];
  return (
    <div className=' bg-sky-950 col-span-1 h-full p-3 md:pr-6 relative'>
      <div className='flex flex-col'>
        <div className='space-y-1 justify-center'>
          <SidebarLogo />
          {items.map((item, index) => (
            <SidebarItem key={index} label={item.label} href={item.href} icon={item.icon} />
          ))}
        </div>
      </div>
      <SidebarFooter/>
    </div>
  );
};

export default Sidebar;

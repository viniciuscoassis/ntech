'use client';
import SidebarItem from './SidebarItem';
import SidebarLogo from './SidebarLogo';
import { RiDashboardLine, RiRouteFill, RiCustomerService2Fill } from 'react-icons/ri';
import { BsFillGearFill } from 'react-icons/bs';
import { FaCity } from 'react-icons/fa';
import { MdOutlineSecurity } from 'react-icons/md';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import {CgProfile} from 'react-icons/cg';
import { IoMdKey, IoMdNotificationsOutline } from 'react-icons/io';
import {BiLogOut} from 'react-icons/bi'
import { AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import SidebarFooter from './SIdebarFooter';
import { useState } from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const router = useRouter()
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
      {
      label: 'Perfil',
      icon: CgProfile,
      href: '/client/perfil',
    },
      {
      label: 'Suporte',
      icon: RiCustomerService2Fill,
      href: '/client/suport',
    },
      {
      label: 'Notificações',
      icon: IoMdNotificationsOutline,
      href: '/client/notifications',
    },
    {
      label: 'Sair',
      icon: BiLogOut,
      onClick: () => {signOut(); router.push('/')},
    },
  ];
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`${
        open ? 'w-72' : 'w-20'
      } bg-sky-950 col-span-1 h-full  max-w-full no-scrollbar overflow-y-scroll p-3 md:pr-6 relative transition-all duration-500`}
    >
      <div
        className=' flex items-center justify-center absolute cursor-pointer rounded-full -right-2 top-9 w-7 h-7 border-2 bg-white z-50 border-sky-950'
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight />}
      </div>
      <div className='flex flex-col max-h-[80%]'>
        <div className='space-y-1 justify-center'>
          <SidebarLogo open={open} />
          {items.map((item, index) => (
            <SidebarItem
              key={index}
              label={item.label}
              href={item.href}
              icon={item.icon}
              open={open}
              onClick={item.onClick}
            />
          ))}
        </div>
      </div>
      <SidebarFooter open={open}/>
    </div>
  );
};

export default Sidebar;

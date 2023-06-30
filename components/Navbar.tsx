'use client';
import { RiCustomerService2Fill } from 'react-icons/ri';
import {CgProfile} from 'react-icons/cg';
import { IoMdNotificationsOutline } from 'react-icons/io';
import {BiLogOut} from 'react-icons/bi'
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import NavbarIcon from './NavbarIcon';

const Navbar = () => {
  const router = useRouter()
  const items = [
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
  return (
    <>
     <div className="bg-white h-20 shadow-lg flex justify-between w-full px-20">
        <div className="w-1/2"></div>
        <div className="w-1/4 flex justify-between items-center">   
        {items.map((value, index) => 
            <div key={index}>
                <NavbarIcon icon={value.icon} label={value.label} href={value.href}/>
            </div>
        )}
        </div>
     </div>
    </>
  )
};

export default Navbar;

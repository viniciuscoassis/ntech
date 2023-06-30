import { useRouter } from "next/navigation";
import { IconType } from "react-icons";

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
}
const NavbarIcon: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
}) => {
    const router =  useRouter();

    return <>
    <div  onClick={() => router.push(`${href}`)} className="cursor-pointer flex flex-col items-center justify-center">
        <Icon size={28} color='black'/>
        <p className="text-xs text-center">{label}</p>
    </div>
    </>;
}

export default NavbarIcon
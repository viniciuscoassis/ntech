'use client'
import Sidebar from "@/components/Sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const router = useRouter();
    const session = useSession({
      required: true,
      onUnauthenticated() {
        router.push('/');
      },
    });
  return (
    <div className=' h-screen'>
      <div className='container h-full xl:px-30'>
        <div className='flex w-screen h-full bg-[#F4F9FD]'>
          <Sidebar />
          <div className='w-full border-x-[-1px] border-neutral-800 p-10 max-h-max overflow-auto'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}


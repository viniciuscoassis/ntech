import Sidebar from "@/components/Sidebar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=' h-screen'>
      <div className='bg-red-300 container h-full xl:px-30'>
        <div className='bg-red-200 flex w-screen h-full'>
          <Sidebar />
          <div className='w-full border-x-[-1px] border-neutral-800'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}


import Sidebar from "@/components/Sidebar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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


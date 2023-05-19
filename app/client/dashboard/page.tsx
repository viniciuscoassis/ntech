import Card from "@/components/cards/Card";

export default function Dashboard(){
    return (
      <>
        <h1 className=' text-5xl font-bold mb-10'>Dashboard</h1>
        <h2 className='text-3xl mb-5'>VPNs</h2>
        <div className='max-w-7xl overflow-x-auto h-72 flex mb-5'>
          <Card title='VPNs Ativas' />
          <Card title='VPNs Desconectadas' />
        </div>

        <h2 className='text-3xl mb-5'>Licenças</h2>
        <div className='max-w-7xl overflow-x-auto h-80 flex mb-5'>
          <Card title='VPNs Ativas' />
          <Card title='VPNs Desconectadas' />
        </div>
      </>
    );
}
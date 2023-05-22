import Card from '@/components/cards/Card';
import CardSession from '@/components/cards/CardSection';

export default function Dashboard() {
  return (
    <>
      <h1 className=' text-5xl font-bold mb-10'>Dashboard</h1>
      <h2 className='text-3xl mb-5'>VPNs</h2>
      <div className='max-w-7xl overflow-x-auto h-80 p-2 flex mb-5'>
        <Card quantity={10} title='VPNs Ativas' />
        <Card quantity={2} title='VPNs Desconectadas' />
      </div>

      <h2 className='text-3xl mb-5'>Licenças</h2>
      <CardSession>
        <Card quantity={6} title='Licenças contratadas' />
        <Card quantity={4} title='Licenças utilizadas' />
        <Card quantity={2} title='Licenças disponíveis' />
      </CardSession>
    </>
  );
}

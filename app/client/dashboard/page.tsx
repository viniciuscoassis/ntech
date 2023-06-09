import Card from '@/components/cards/Card';
import CardSession from '@/components/cards/CardSection';

export default function Dashboard() {
  return (
    <>
      <h1 className='text-2xl lg:text-5xl font-bold mb-10'>Dashboard</h1>
      <h2 className='text-xl lg:text-3xl mb-5'>VPNs</h2>
      <CardSession>
        <Card quantity={2} title='VPNs Ativas' />
        <Card quantity={3} title='VPNs Desconectadas' />
      </CardSession>

      <h2 className='text-xl lg:text-3xl mb-5'>Licenças</h2>
      <CardSession>
        <Card quantity={6} title='Licenças contratadas' />
        <Card quantity={4} title='Licenças utilizadas' />
        <Card quantity={2} title='Licenças disponíveis' />
      </CardSession>
    </>
  );
}

'use client';
import DataContextFunc, { DataContext } from '@/app/context/DataContext';
import Card from '@/components/cards/Card';
import CardSession from '@/components/cards/CardSection';
import InfoCard from '@/components/cards/InfoCard';
import { useContext } from 'react';

export default function Infraestrutura() {
  const { data, setData } = useContext(DataContext);

  return (
    <>
      <h1 className=' text-5xl font-bold mb-10'>Infraestrutura</h1>
      <h2 className='text-3xl mb-5'>Cidade</h2>
      <div className='flex'>
        <InfoCard quantity={10} title='Poços de Caldas' />
        <InfoCard quantity={2} title='Limeira' />
      </div>

      <h2 className='text-3xl mb-5'>Estado</h2>
      <CardSession>
        <Card quantity={6} title='Licenças contratadas' />
        <Card quantity={4} title='Licenças utilizadas' />
        <Card quantity={2} title='Licenças disponíveis' />
      </CardSession>
      <h2 className='text-3xl mb-5'>Base de monitoramento</h2>
      <CardSession>
        <Card quantity={6} title='Licenças contratadas' />
        <Card quantity={4} title='Licenças utilizadas' />
        <Card quantity={2} title='Licenças disponíveis' />
      </CardSession>
      <h2 className='text-3xl mb-5'>Servidores</h2>
      <CardSession>
        <Card quantity={6} title='Licenças contratadas' />
        <Card quantity={4} title='Licenças utilizadas' />
        <Card quantity={2} title='Licenças disponíveis' />
      </CardSession>
    </>
  );
}

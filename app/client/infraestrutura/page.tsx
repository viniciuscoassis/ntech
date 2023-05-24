'use client';
import DataContextFunc, { DataContext } from '@/app/context/DataContext';
import { localDataInterface } from '@/app/interface/types';
import Button from '@/components/Button';
import AddCard from '@/components/cards/AddCard';
import Card from '@/components/cards/Card';
import CardSession from '@/components/cards/CardSection';
import InfoCard from '@/components/cards/InfoCard';
import { useContext, useEffect, useState } from 'react';


const mock: localDataInterface = {
  estados: [{ name: 'São Paulo' }, { name: 'Minas gerais' }],
  cidades: [{ name: 'Poços de Caldas' }, { name: 'Limeira' }],
  bases: [{ name: 'Base 1' }, { name: 'Base 2' }],
  servidores: [
    { name: 'Servidor 1', ip: '123321' },
    { name: 'Servidor 2', ip: '123322' },
  ],
};
;

export default function Infraestrutura() {
  const { data, setData } = useContext(DataContext);
  const [localData, setLocalData] = useState(mock);
  const [citySelected, setCitySelected] = useState('');

  useEffect(() => {
    setLocalData(data?.mock);
    console.log(localData);

  }, []);

const submit = () => {
  setData(localData);
}

  return (
    <>
      <h1 className=' text-5xl font-bold mb-10'>Infraestrutura</h1>
      <h2 className='text-3xl mb-5'>Cidade</h2>
      <div className='flex items-center h-32 w-10/12 max-w-screen-lg overflow-x-auto'>
        {localData?.cidades.map((value, index) => (
          <InfoCard
            key={index}
            title={value.name}
            selected={value.name === citySelected}
            setCitySelected={setCitySelected}
          />
        ))}
        <AddCard title='Adicione uma nova cidade' />
      </div>
      <Button onClick={submit} label='Confirmar dados' />
    </>
  );
}

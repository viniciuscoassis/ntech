'use client';
import { DataContext } from '@/app/context/DataContext';
import { infraDataInterface, servidor } from '@/app/interface/types';
import Button from '@/components/Button';
import AddCard from '@/components/cards/AddCard';
import InfoCard from '@/components/cards/InfoCard';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const mock: infraDataInterface = {
  estados: [{ name: 'São Paulo' }, { name: 'Minas gerais' }],
  cidades: [{ name: 'Poços de Caldas' }, { name: 'Limeira' }],
  bases: [{ name: 'Base 1' }, { name: 'Base 2' }],
  servidores: [
    { name: 'Servidor 1', ip: '123321' },
    { name: 'Servidor 2', ip: '123322' },
  ],
};
export default function Infraestrutura() {
  
  const router = useRouter();

  const { data, setData } = useContext(DataContext);
  const [infraData, setInfraData] = useState(mock);

  const [citySelected, setCitySelected] = useState('');
  const [estadoSelected, setEstadoSelected] = useState('');
  const [baseSelected, setBaseSelected] = useState('');
  const [servidorSelected, setServidorSelected] = useState<servidor>({name: '', ip: ''});

  useEffect(() => {
    setInfraData({ ...mock });
    console.log(infraData);
  }, []);

  const submit = () => {
    if(citySelected === '' || estadoSelected === '' || baseSelected === '' || servidorSelected.name === ''){
      toast.error('Selecione todos os campos antes de prosseguir');
      return;
    }
    console.log(servidorSelected);
    setData([
      ...data,
      {
        cidade: citySelected,
        estado: estadoSelected,
        base: baseSelected,
        servidor: servidorSelected,
      },
    ]);
    setCitySelected('');
    setEstadoSelected('');
    setBaseSelected('');
    setServidorSelected({ name: '', ip: '' });

    router.push('/client/condominios');
  };

  return (
    <>
      <h1 className=' text-5xl font-bold mb-10'>Infraestrutura</h1>
      <h2 className='text-3xl mb-5'>Cidade</h2>
      <div className='flex items-center h-32 w-10/12 max-w-screen-lg overflow-x-auto'>
        {infraData?.cidades.map((value, index) => (
          <InfoCard
            key={index}
            title={value.name}
            selected={value.name === citySelected}
            setSingleSeleted={setCitySelected}
          />
        ))}
        <AddCard
          title='Adicione uma nova cidade'
          setInfraData={setInfraData}
          infraData={infraData}
          typeSubmit='cidade'
        />
      </div>
      <h2 className='text-3xl mb-5'>Estados</h2>
      <div className='flex items-center h-32 w-10/12 max-w-screen-lg overflow-x-auto'>
        {infraData?.estados.map((value, index) => (
          <InfoCard
            key={index}
            title={value.name}
            selected={value.name === estadoSelected}
            setSingleSeleted={setEstadoSelected}
          />
        ))}
        <AddCard
          title='Adicione um novo estado'
          setInfraData={setInfraData}
          infraData={infraData}
          typeSubmit='estado'
        />
      </div>
      <h2 className='text-3xl mb-5'>Bases de monitoramento</h2>
      <div className='flex items-center h-32 w-10/12 max-w-screen-lg overflow-x-auto'>
        {infraData?.bases.map((value, index) => (
          <InfoCard
            key={index}
            title={value.name}
            selected={value.name === baseSelected}
            setSingleSeleted={setBaseSelected}
          />
        ))}
        <AddCard
          title='Adicione uma nova base de monitorament'
          setInfraData={setInfraData}
          infraData={infraData}
          typeSubmit='base'
        />
      </div>
      <h2 className='text-3xl mb-5'>Servidores</h2>
      <div className='flex items-center h-44 w-10/12 max-w-screen-lg overflow-x-auto'>
        {infraData?.servidores.map((value, index) => (
          <InfoCard
            key={index}
            title={value.name}
            selected={value.name === servidorSelected.name}
            setObjectSelected={setServidorSelected}
            aditionalData={value.ip}
          >{value.ip}</InfoCard>
        ))}
        <AddCard
          title='Adicione um novo servidor'
          setInfraData={setInfraData}
          infraData={infraData}
          typeSubmit='servidor'
        />
      </div>

      <Button onClick={submit} label='Confirmar dados' />
    </>
  );
}

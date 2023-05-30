'use client';
import { DataContext } from '@/app/context/DataContext';
import { RelatorioContext } from '@/app/context/RelatorioContext';
import { infraDataInterface, servidor } from '@/app/interface/types';
import Button from '@/components/Button';
import AddCard from '@/components/cards/AddCard';
import InfoCard from '@/components/cards/InfoCard';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const mock: infraDataInterface = {
  estados: [{name: 'Minas Gerais'}, {name: 'São Paulo'}],
  cidades: [{name: '16 - Limeira'}, {name: '17 - Ribeirão Preto'}, {name: '18 - Piracicaba'}, {name: '19 - Campinas'}, {name: '20 - Leme'}, {name: '21 - Rio Claro'}, {name: '22 - Americana'}, {name: '23 - Araras'} ],
  bases: [],
  servidores: [
    
  ],
};
export default function Infraestrutura() {
  
  const router = useRouter();

  const { data, setData } = useContext(DataContext);
  const {data: relatorio, setData: setRelatorio} = useContext(RelatorioContext);
 const session = useSession();

  const [infraData, setInfraData] = useState(mock);

  const [citySelected, setCitySelected] = useState('');
  const [estadoSelected, setEstadoSelected] = useState('');
  const [baseSelected, setBaseSelected] = useState('');
  const [servidorSelected, setServidorSelected] = useState<servidor>({name: '', ip: ''});

  useEffect(() => {
    setInfraData({ ...mock });
  }, []);

  const submit = () => {
    if(citySelected === '' || estadoSelected === '' || baseSelected === ''){
      toast.error('Selecione todos os campos antes de prosseguir');
      return;
    }
    setData([
      ...data,
      {
        cidade: citySelected,
        estado: estadoSelected,
        base: baseSelected,
        servidor: servidorSelected,
      },
    ]);
    setRelatorio([...relatorio, {name: session.data?.user?.name, date: Date.now(), message: 'Adicionou um novo condomínio'}]); 
    setCitySelected('');
    setEstadoSelected('');
    setBaseSelected('');
    setServidorSelected({ name: '', ip: '' });

    router.push('/client/condominios');
  };

  return (
    <>
      <h1 className=' text-2xl lg:text-5xl font-bold mb-10'>Infraestrutura</h1>
      <h2 className='text-xl lg:text-3xl mb-5'>Cidade</h2>
      <div className='flex items-center h-32 lg:w-10/12 max-w-screen-lg overflow-x-auto'>
        {infraData?.cidades.map((value, index) => (
          <InfoCard
            key={index}
            title={value.name}
            selected={value.name === citySelected}
            setSingleSeleted={setCitySelected}
          />
        ))}
        <AddCard
          title='Adicione uma cidade'
          setInfraData={setInfraData}
          infraData={infraData}
          typeSubmit='cidade'
        />
      </div>
      <h2 className='text-xl lg:text-3xl mb-5'>Estados</h2>
      <div className='flex items-center h-32 lg:w-10/12 max-w-screen-lg overflow-x-auto'>
        {infraData?.estados.map((value, index) => (
          <InfoCard
            key={index}
            title={value.name}
            selected={value.name === estadoSelected}
            setSingleSeleted={setEstadoSelected}
          />
        ))}
        <AddCard
          title='Adicione um estado'
          setInfraData={setInfraData}
          infraData={infraData}
          typeSubmit='estado'
        />
      </div>
      <h2 className='text-xl lg:text-3xl mb-5'>Bases de monitoramento</h2>
      <div className='flex items-center h-32 lg:w-10/12 max-w-screen-lg overflow-x-auto'>
        {infraData?.bases.map((value, index) => (
          <InfoCard
            key={index}
            title={value.name}
            selected={value.name === baseSelected}
            setSingleSeleted={setBaseSelected}
          />
        ))}
        <AddCard
          title='Adicione uma base de monitoramento'
          setInfraData={setInfraData}
          infraData={infraData}
          typeSubmit='base'
        />
      </div>
      <Button onClick={submit} label='Confirmar dados' />
      <h2 className='text-xl lg:text-3xl mb-5 mt-10'>Servidores</h2>
      <div className='flex items-center h-44 lg:w-10/12 max-w-screen-lg overflow-x-auto'>
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
          title='Adicione um servidor'
          setInfraData={setInfraData}
          infraData={infraData}
          typeSubmit='servidor'
        />
      </div>

      
    </>
  );
}

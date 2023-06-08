'use client';
import { DataContext } from '@/app/context/DataContext';
import { RelatorioContext } from '@/app/context/RelatorioContext';
import { infraDataInterface, servidor } from '@/app/interface/types';
import Button from '@/components/Button';
import AddCard from '@/components/cards/AddCard';
import CardSession from '@/components/cards/CardSection';
import InfoCard from '@/components/cards/InfoCard';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const mock: infraDataInterface = {
  estados: [{name: 'Minas Gerais'}, {name: 'São Paulo'}],
  cidades: [{name: 'Limeira'}, {name: 'Ribeirão Preto'}, {name: 'Piracicaba'}, {name: 'Campinas'}, {name: 'Leme'}, {name: 'Rio Claro'}, {name: 'Americana'}, {name: 'Araras'} ],
  bases: [{name: 'Base teste'}],
  servidores: [
    {name: 'Servidor teste', ip: '123.231.222/12'}

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
     <CardSession>
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
      </CardSession>
      <h2 className='text-xl lg:text-3xl mb-5'>Estados</h2>
     <CardSession>
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
      </CardSession>
      <h2 className='text-xl lg:text-3xl mb-5'>Bases de monitoramento</h2>
      <CardSession>
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
      </CardSession>
      <Button onClick={submit} label='Confirmar dados' />
      <h2 className='text-xl lg:text-3xl mb-5 mt-10'>Servidores</h2>
      <CardSession>
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
      </CardSession>
    </>
  );
}

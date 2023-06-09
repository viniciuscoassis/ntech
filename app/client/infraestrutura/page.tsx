'use client';
import { DataContext } from '@/app/context/DataContext';
import { RelatorioContext } from '@/app/context/RelatorioContext';
import { infraDataInterface, servidor } from '@/app/interface/types';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Modal from '@/components/Modal';
import AddCard from '@/components/cards/AddCard';
import CardSession from '@/components/cards/CardSection';
import InfoCard from '@/components/cards/InfoCard';
import ServersContainers from '@/components/servidores/ServersContainer';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useCallback, useContext, useEffect, useState } from 'react';
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [conta, setConta] = useState('');
  const [nomeCondominio, setNomeCondominio] = useState('');
  const [isModalLoading, setIsModalLoading] = useState(false);

  useEffect(() => {
    setInfraData({ ...mock });
  }, []);

  const submit = () => {
    if(citySelected === '' || estadoSelected === '' || baseSelected === ''){
      toast.error('Selecione todos os campos antes de prosseguir');
      return;
    }

    setIsModalOpen(true);
        console.log(citySelected, baseSelected);

  };

  const onModalSubmit = useCallback(() => {
    setIsModalLoading(true);
    console.log(citySelected, baseSelected);
    setData([
      ...data,
      {
        cidade: citySelected,
        estado: estadoSelected,
        base: baseSelected,
        servidor: servidorSelected,
        conta: 1,
        name: 'Condomínio teste'
      },
    ]);
    setIsModalLoading(false);
    // setCitySelected('');
    // setEstadoSelected('');
    // setBaseSelected('');
    // setServidorSelected({ name: '', ip: '' });
    setRelatorio([...relatorio, { name: session.data?.user?.name, date: Date.now(), message: 'Adicionou um novo condomínio' }]); 

    router.push('/client/condominios');
  }, [setIsModalLoading, citySelected, estadoSelected, baseSelected, servidorSelected]);
  
  const modalBodyContent = (
    <div className='flex flex-col gap-4'>
      <Input
        placeholder='Numero de conta'
        onChange={(e) => { setConta(e.target.value) }}
        value={conta}
        disabled={isModalLoading}
        type="text"
      />
      <Input
        placeholder='Nome do condomínio'
        onChange={(e) => { setNomeCondominio(e.target.value) }}
        value={nomeCondominio}
        disabled={isModalLoading}
        type="text"
      />
    </div>
  );

  const footerContent = <div></div>

  return (
    <>
    <Modal
            disabled={isModalLoading}
            isOpen={isModalOpen}
            title="Adicionar numero de conta"
            actionLabel="Criar Script"
            onClose={()=>setIsModalOpen(!isModalOpen)}
            onSubmit={onModalSubmit}
            body={modalBodyContent}
            footer={footerContent}
        />
      <h1 className=' text-2xl lg:text-5xl font-bold mb-4'>Infraestrutura</h1>
    <div className='flex flex-wrap-reverse w-full'>
    <div className='xl:w-4/6'>
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
      </div>
      <div className='flex flex-col xl:w-3/12 mb-6'>
      <h2 className='text-xl lg:text-3xl mb-5'>Servidores</h2>
      <ServersContainers />
        </div>
      </div>
    </>
  );
}

'use client';
import { DataContext, DataContextType } from '@/app/context/DataContext';
import Button from '@/components/Button';
import Condominio from '@/components/condominios/Condominio';
import AccountModal from '@/components/modals/AccountModal';
import ScriptModal from '@/components/modals/ScriptModal';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLocalStorage } from 'usehooks-ts';

export default function Condominios() {
  const { data, setData } = useContext<DataContextType>(DataContext);
  const [ipAcesso, setIpAcesso] = useState('');
  const [ipImagem, setIpImagem] = useState('');
  const [ipVoip, setIpVoip] = useState('');
  const [ipsSalvosStorage, setIpSalvosStorage] = useLocalStorage<ipsSalvos>('ipsFixos', {ipAcesso, ipImagem, ipVoip});
  const [ipsSalvos, setIpsSalvos] = useState({ipAcesso: "", ipImagem: "", ipVoip: ""});

  interface ipsSalvos {
    ipAcesso: string;
    ipImagem: string;
    ipVoip: string;
  }

  const router = useRouter();

  const submit = () => {
    if (ipAcesso === '' || ipImagem === '' || ipVoip === '') {
      toast.error("Preencha todos os Ips");
      return;
    }
    setIpSalvosStorage({ ...ipsSalvosStorage, ipAcesso, ipImagem, ipVoip });
    setIpsSalvos({ ...ipsSalvos, ipAcesso, ipImagem, ipVoip });
    toast.success('Ips salvos');
  }

  useEffect(() => {
    setIpsSalvos({...ipsSalvosStorage});
    
  }, []);
  return (
    <>
      <ScriptModal />
      <AccountModal />
      <h1 className=' text-5xl font-bold mb-10'>Condomínios</h1>
      <div>Configurações base - formato XXX.XXX.XXX.X/XX
        <p>(Perguntar ao responsável n-tech)</p></div>
      <div className='flex'>
        <div className='flex flex-col justify-between w-1/4 border mb-5 mr-5'>
          <input className='h-2/6 border' placeholder='Ip do servidor de acesso' value={ipAcesso} onChange={(e) => setIpAcesso(e.target.value)} />
          <input className='h-2/6 border' placeholder='Ip do servidor de imagem' value={ipImagem} onChange={(e) => setIpImagem(e.target.value)} />
          <input className='h-2/6 border' placeholder='Ip do servidor de voip' value={ipVoip} onChange={(e) => setIpVoip(e.target.value)} />
          <button onClick={submit} className='bg-primary text-white'>Salvar</button>
        </div>
     
        {ipsSalvos.ipAcesso != ''? 
          <div className='flex flex-col justify-between w-1/4 border mb-5 bg-white'>
            <div className='h-2/6 border' placeholder='Ip do servidor de acesso'>{ipsSalvos.ipAcesso}</div>
            <div className='h-2/6 border' placeholder='Ip do servidor de imagem'>{ipsSalvos.ipImagem}</div>
            <div className='h-2/6 border' placeholder='Ip do servidor de voip'>{ipsSalvos.ipVoip}</div>
            <div className=' text-primary text-center border-0'>Ips Salvos</div>

          </div> : ''}
      </div>

      <div className='flex flex-wrap'>
        {data.length != 0 ? (
          data?.map((value, index) => (
            <Condominio
              cidade={value.cidade}
              estado={value.estado}
              base={value.base}
              key={index}
            />
          ))
        ) : (
          <div>
            <div className=''>Não há condominios registrados</div>
            <Button
              onClick={() => router.push('/client/infraestrutura')}
              label='Registre'
            />
          </div>
        )}

      </div>
    </>
  );
}

import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useLocalStorage } from "usehooks-ts";

const ServersContainers = () => {
    const [ipAcesso, setIpAcesso] = useState('');
    const [ipImagem, setIpImagem] = useState('');
    const [ipVoip, setIpVoip] = useState('');
    const [ipsSalvosStorage, setIpSalvosStorage] = useLocalStorage<ipsSalvos>('ipsFixos', { ipAcesso, ipImagem, ipVoip });
    const [ipsSalvos, setIpsSalvos] = useState({ ipAcesso: "", ipImagem: "", ipVoip: "" });

    interface ipsSalvos {
        ipAcesso: string;
        ipImagem: string;
        ipVoip: string;
    }

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
        setIpsSalvos({ ...ipsSalvosStorage });

    }, [ipsSalvosStorage]);

    return (<>
    <div className="">Configurações base - formato XXX.XXX.XXX.X/XX
        <p>(Perguntar ao responsável n-tech)</p></div>
        <div className='flex w-[40rem]'>
            <div className='flex flex-col justify-between lg:w-1/4 border mb-5 mr-5'>
                <input className='text-xs h-2/6 border' placeholder='Ip do servidor de acesso' value={ipAcesso} onChange={(e) => setIpAcesso(e.target.value)} />
                <input className='text-xs h-2/6 border' placeholder='Ip do servidor de imagem' value={ipImagem} onChange={(e) => setIpImagem(e.target.value)} />
                <input className='text-xs h-2/6 border' placeholder='Ip do servidor de voip' value={ipVoip} onChange={(e) => setIpVoip(e.target.value)} />
                <button onClick={submit} className='bg-primary text-white'>Salvar</button>
            </div>

            {ipsSalvos.ipAcesso != '' ?
                <div className='flex flex-col justify-between w-1/4 border mb-5 bg-white'>
                    <div className='text-xs h-2/6 border' placeholder='Ip do servidor de acesso'>{ipsSalvos.ipAcesso}</div>
                    <div className='text-xs h-2/6 border' placeholder='Ip do servidor de imagem'>{ipsSalvos.ipImagem}</div>
                    <div className='text-xs h-2/6 border' placeholder='Ip do servidor de voip'>{ipsSalvos.ipVoip}</div>
                    <div className=' text-primary text-center border-0'>Ips Salvos</div>

                </div> : ''}
        </div></>)
}

export default ServersContainers;
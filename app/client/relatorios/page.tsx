import Relatorio from "@/components/relatorios/Relatorio";

export default function Relatorios(){
    return (
      <>
        <h1 className=' text-5xl font-bold mb-10'>Relatórios</h1>
        <h2 className='text-3xl mb-5'>Histórico de ações:</h2>
        <div className="border-2 w-full h-4/5 flex flex-col">
        <Relatorio name="Vinicius" date="28 de maio" hour="19:19" message="Adicionou um condomínio"/>
        </div>
      </>
    );
}
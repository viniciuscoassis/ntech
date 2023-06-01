export default function Vpns() {
  return (
    <>
      <h1 className=' text-5xl font-bold mb-10'>VPNs</h1>
      <div className="flex justify-between bg-primary text-white px-8">
        <div className="max-w-1/3 w-1/3">condomínio</div>
        <div className="max-w-1/3 w-1/3 text-center">permanência</div>
        <div className="max-w-1/3 w-1/3 text-right">status</div>
      </div>
      <div className="h-4/5 border overflow-auto ">
      <div className="border">
        <div className="p-8 flex justify-between items-center border-b-2 h-20 ">
          <div className="flex items-center max-w-1/3 w-1/3 ">
            <div className="font-bold">Condomínio Teste</div>
          </div>
          <div className="w-1/3 max-w-1/3  text-center">15 dias 3h</div>
          <div className="w-1/3 max-w-1/3 text-right text-green-500 ">ativo</div>
        </div>
      </div>  
        <div className="border">
          <div className="p-8 flex justify-between items-center border-b-2 h-20 ">
            <div className="flex items-center max-w-1/3 w-1/3 ">
              <div className="font-bold">Condomínio Teste 2</div>
            </div>
            <div className="w-1/3 max-w-1/3  text-center">7 dias 1h</div>
            <div className="w-1/3 max-w-1/3 text-right text-green-500 ">ativo</div>
          </div>
        </div>  
      <div className="border">
        <div className="p-8 flex justify-between items-center border-b-2 h-20 ">
          <div className="flex items-center max-w-1/3 w-1/3 ">
            <div className="font-bold">Condomínio Teste 3</div>
          </div>
          <div className="w-1/3 max-w-1/3  text-center">3 dias 20h</div>
          <div className="w-1/3 max-w-1/3 text-right text-gray-500 ">desconectado</div>
        </div>
      </div>  
        <div className="border">
          <div className="p-8 flex justify-between items-center border-b-2 h-20 ">
            <div className="flex items-center max-w-1/3 w-1/3 ">
              <div className="font-bold">Condomínio Teste 4</div>
            </div>
            <div className="w-1/3 max-w-1/3  text-center">1 dia 2h</div>
            <div className="w-1/3 max-w-1/3 text-right text-gray-500 ">desconectado</div>
          </div>
        </div>  
        <div className="border">
          <div className="p-8 flex justify-between items-center border-b-2 h-20 ">
            <div className="flex items-center max-w-1/3 w-1/3 ">
              <div className="font-bold">Condomínio Teste 5</div>
            </div>
            <div className="w-1/3 max-w-1/3  text-center">30 min</div>
            <div className="w-1/3 max-w-1/3 text-right text-gray-500 ">desconectado</div>
          </div>
        </div>  
        <div className="border">
          <div className="p-8 flex justify-between items-center border-b-2 h-20 ">
            <div className="flex items-center max-w-1/3 w-1/3 ">
              <div className="font-bold">Condomínio Teste 6</div>
            </div>
            <div className="w-1/3 max-w-1/3  text-center">0</div>
            <div className="w-1/3 max-w-1/3 text-right text-red-500 ">falha na conexão</div>
          </div>
        </div>  
      </div>
    </>
  );
}
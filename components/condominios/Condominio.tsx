import { FaCity } from "react-icons/fa";
import Button from "../Button";
import { condominio } from "@/app/interface/types";
import useAccountModal from "@/hooks/useAccountModal";
import { useContext } from "react";
import { ScriptContext } from "@/app/context/Script";
import useScriptModal from "@/hooks/useScriptModal";
import { VscDebugDisconnect } from "react-icons/vsc";

const Condominio = (body: condominio) => {
  const accountModal = useAccountModal();
  const scriptModal = useScriptModal();
  const { script, setScript } = useContext(ScriptContext);

  const submit = () => {
    setScript({ base: body.base, city: 17 });
    scriptModal.onOpen();
  }

return (
  <>
    {' '}

       <div className="p-8 flex justify-between items-center border-b-2 h-20 ">
          <div className="flex items-center max-w-1/3 w-1/3 ">
            <div className="font-bold">{body.name}</div>
          </div>
          <div className="w-1/3 max-w-1/3 text-center">{body.conta}</div>
          <div className="w-1/3 max-w-1/3 text-right text-green-500 ">{body.cidade}</div>
          <div className="w-1/3 max-w-1/3 text-right text-green-500 ">{body.cidade}</div>
          <div className="absolute cursor-pointer right-20 top-7"><VscDebugDisconnect size={28}/></div>
        </div>
      <Button onClick={submit} label={'Gerar script'} />

  </>
);
}
export default Condominio
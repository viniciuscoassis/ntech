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

       <div className=" flex justify-between items-center border-b-2 h-14 ">
          <div className="w-1/6 max-w-1/6 font-bold">{body.name}</div>
          <div className="w-1/6 max-w-1/6 ">{body.conta}</div>
          <div className="w-1/6 max-w-1/6 ">{body.cidade}</div>
          <div className="w-1/6 max-w-1/6 ">{body.estado}</div>
          <div className="w-1/6 max-w-1/6 ">{body.base}</div>
      <Button onClick={submit} label={'Gerar script'} />
        </div>

  </>
);
}
export default Condominio
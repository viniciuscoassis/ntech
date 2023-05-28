import { Relatorio } from "@/app/context/RelatorioContext";



const Relatorio = ({name, date, message} : Relatorio) => {
    return  <div className="h-24 border-b-2 flex justify-between items-center p-10">
            <div>{name}</div>
            <div><div className="font-bold">{date.toString()}</div><div>19:19</div></div>
            <div className="max-w-xs">{message}</div>
          </div>
}

export default Relatorio;
import { Relatorio } from "@/app/context/RelatorioContext";

import dayjs from "dayjs";
import { useEffect } from "react";

const Relatorio = ({name, date, message} : Relatorio) => {

const day = dayjs(date).format('DD/MM/YYYY');
const time = dayjs(date).format('HH:mm');

useEffect(()=> {
  console.log(time);
}, [])

    return  <div className="h-24 border-b-2 flex justify-between items-center p-10 ">
            <div className="w-1/4">{name}</div>
            <div className=" w-1/4 "><div className="font-bold">{day}</div><div>{time}</div></div>
            <div className="w-1/6 ">{message}</div>
          </div>
}

export default Relatorio;
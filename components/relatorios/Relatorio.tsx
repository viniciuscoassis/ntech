interface RelatorioProps {
    name: string,
    date: string,
    hour: string,
    message: string
}

const Relatorio = ({name, date, hour, message} : RelatorioProps) => {
    return  <div className="h-24 border-b-2 flex justify-between items-center p-10">
            <div>{name}</div>
            <div><div className="font-bold">{date}</div><div>{hour}</div></div>
            <div className="max-w-xs">{message}</div>
          </div>
}

export default Relatorio;
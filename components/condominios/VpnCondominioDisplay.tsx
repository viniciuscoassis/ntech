
    interface props {
        name: string,
        time: string
    };
    
const CondominioInVpn = ({name, time} : props ) => {

    
    return <div className="border">
        <div className="p-8 flex justify-between items-center border-b-2 h-20 ">
            <div className="flex items-center max-w-1/3 w-1/3 ">
                <div className="font-bold">{name}</div>
            </div>
            <div className="w-1/3 max-w-1/3  text-center">{time}</div>
            <div className="w-1/3 max-w-1/3 text-right text-gray-500 ">Estabelecendo conexão</div>
        </div>
    </div>
}

export default CondominioInVpn;
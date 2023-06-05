interface CardProps {
    title: string,
    quantity: number
}

const Card = ({ title, quantity }: CardProps) => {
  return (
    <div
      className='
      h-20
    bg-white
    text-black
    w-44  
    lg:w-80 
      rounded-2xl 
      shadow-lg
      p-8 
      text-center 
      lg:text-lg 
      flex 
     items-center 
     justify-between
      mr-5 box-border 
      hover:scale-110
      hover:cursor-pointer
      hover:transition-all
      active:scale-105
      '
    >
      <h1 className=''>{title}</h1>
      <div className=' bg-slate-100 shadow w-8 h-8 rounded-3xl'>
        {quantity}
      </div>
    </div>
  );
};

export default Card
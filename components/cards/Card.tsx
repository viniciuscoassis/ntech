interface CardProps {
    title: string,
    quantity: number
}

const Card = ({ title, quantity }: CardProps) => {
  return (
    <div
      className='max-h-[10rem]
    bg-white
    text-black
    w-32  
    lg:w-80 
      rounded-2xl 
      shadow-lg
      p-8 
      text-center 
      lg:text-lg 
      flex 
      flex-col items-center 
      
      mr-5 box-border 
      hover:scale-110
      hover:cursor-pointer
      hover:transition-all
      active:scale-105
      '
    >
      <h1 className='mb-10'>{title}</h1>
      <div className=' bg-slate-100 shadow w-8 h-8 rounded-3xl p-10 flex justify-center items-center'>
        {quantity}
      </div>
    </div>
  );
};

export default Card
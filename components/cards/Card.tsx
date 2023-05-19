interface CardProps {
    title: string
}

const Card = ({ title }: CardProps) => {
  return (
    <div className='max-h-[10rem]
    bg-white
    text-black
      min-w-[320px] 
      w-80 
      rounded-2xl 
      shadow-lg
      p-8 
      text-center 
      text-lg 
      flex 
      flex-col items-center mr-5 box-border max-h-'>
      <h1 className='mb-10'>{title}</h1>
      <div className=' bg-slate-100 shadow w-8 h-8 rounded-3xl p-10 flex justify-center items-center'>
        10
      </div>
    </div>
  );
};

export default Card
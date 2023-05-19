interface CardProps {
    title: string
}

const Card = ({ title }: CardProps) => {
  return (
    <div className='max-h-[10rem] 
    bg-gradient-to-br
     from-sky-950
      to-sky-800 
      min-w-[320px] 
      w-80 
      rounded-2xl 
      shadow-2xl
      p-8 
      text-center 
      text-lg 
      flex 
      flex-col items-center mr-5 box-border max-h-'>
      <h1 className='mb-10 text-slate-100'>{title}</h1>
      <div className='bg-slate-500 text-slate-600 w-8 h-8 rounded-3xl p-10 flex justify-center items-center'>
        10
      </div>
    </div>
  );
};

export default Card
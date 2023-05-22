interface InfoCardProps {
  title: string;
  quantity: number;
}

const InfoCard = ({ title, quantity }: InfoCardProps) => {
  return (
    <div
      className='
    bg-white
    text-black
      w-80
      rounded-2xl 
      shadow-lg
      p-8 
      text-center 
      text-lg 
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
    </div>
  );
};

export default InfoCard;

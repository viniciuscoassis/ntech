interface CardSessionProps {
    children: React.ReactNode
}

const CardSession: React.FC<CardSessionProps> = ({ children } ) => {
  return (
    <div className='max-w-7xl overflow-x-auto h-80 p-2 flex mb-5'>
      {children}
    </div>
  );
};

export default CardSession
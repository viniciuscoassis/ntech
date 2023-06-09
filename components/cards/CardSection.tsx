interface CardSessionProps {
    children: React.ReactNode
}

const CardSession: React.FC<CardSessionProps> = ({ children } ) => {
  return (
    <div className='max-w-7xl overflow-x-auto p-2 flex flex-wrap mb-5'>
      {children}
    </div>
  );
};

export default CardSession

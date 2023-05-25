import { infraDataInterface } from '@/app/interface/types';
import { useState } from 'react';

interface AddCardProps {
  children?: React.ReactNode;
  title: string;
  setInfraData: React.Dispatch<React.SetStateAction<infraDataInterface>>;
  infraData: infraDataInterface;
}

interface AddFormProps {
  title: string,
 
}

const AddCard = ({ title, infraData, setInfraData }: AddCardProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const [value, setValue] = useState('');

  const submit = () => {
    infraData.cidades.push({name: value});
    setInfraData({...infraData});
    // setInfraData({
    //   ...infraData,
    //   cidades: [infraData.cidades.push({ name: 'Poços de Caldas' })],
    // });
  };

  const AddForm = ({ title }: AddFormProps) => {
    return (
      <div className='flex flex-col'>
        <div
          className='text-end cursor-pointer'
          onClick={() => {
            setIsSelected(false);
          }}
        >
          X
        </div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={title}
        ></input>
        <button
          onClick={submit}
          className='bg-sky-950 cursor-pointer text-white'
        >
          adicionar
        </button>
      </div>
    );
  };

  return (
    <div
      className='
      min-w-[20rem] 
      h-5/6 
      rounded-2xl 
      border-4 
      border-dashed 
      flex 
      items-center 
      justify-center
    text-gray-400
    cursor-pointer'
      onClick={() => (isSelected ? '' : setIsSelected(true))}
    >
      {isSelected ? <AddForm title={title} /> : title}
    </div>
  );
};

export default AddCard;

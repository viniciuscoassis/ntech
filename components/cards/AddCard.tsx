import { infraDataInterface } from '@/app/interface/types';
import { useState } from 'react';

interface AddCardProps {
  children?: React.ReactNode;
  title: string;
  setInfraData: React.Dispatch<React.SetStateAction<infraDataInterface>>;
  infraData: infraDataInterface;
  typeSubmit: string;
}

const AddCard = ({
  title,
  infraData,
  setInfraData,
  typeSubmit,
}: AddCardProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');

  const submit = () => {
    switch (typeSubmit) {
      case 'cidade':
        infraData.cidades.push({ name: value });
        break;
      case 'estado':
        infraData.estados.push({ name: value });
        break;

      case 'base':
        infraData.bases.push({ name: value });
        break;

      case 'servidor':
        infraData.servidores.push({ name: value, ip: value2 });
        break;
    }

    setInfraData({ ...infraData });
    setValue('');
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
      {isSelected ? (
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
          {typeSubmit == 'servidor' ? (
            <input
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
              placeholder={'Adicionar Ip do servidor'}
            />
          ) : (
            ''
          )}
          <button
            onClick={submit}
            className='bg-sky-950 cursor-pointer text-white'
          >
            adicionar
          </button>
        </div>
      ) : (
        title
      )}
    </div>
  );
};

export default AddCard;

import React, { useState } from "react";

interface InfoCardProps {
  title: string;
  children?: React.ReactNode;
  selected: boolean;
  setCitySelected: React.Dispatch<React.SetStateAction<string>>
}

const InfoCard = ({ title, children, selected, setCitySelected }: InfoCardProps) => {

  return (
    <div
      className=
    {`bg-white
    text-black
      w-80
      h-5/6
      min-w-[20rem]
      rounded-2xl 
      shadow-lg
      p-8 
      text-center 
      text-lg 
      flex 
      flex-col items-center 
      mr-5 box-border 
      hover:scale-105
      hover:cursor-pointer
      hover:transition-all
      ${selected? 'border-8 border-sky-950' : ""}
      `}
      onClick={()=> {setCitySelected(title)}}
    >
      <h1 className='mb-10'>{title}</h1>
      <p>{children}</p>
    </div>
  );
};

export default InfoCard;

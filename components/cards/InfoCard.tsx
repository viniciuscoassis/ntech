import { servidor } from "@/app/interface/types";
import React, { useState } from "react";

interface InfoCardProps {
  title: string;
  children?: React.ReactNode;
  selected: boolean;
  setSingleSeleted?: React.Dispatch<React.SetStateAction<string>>
  setObjectSelected?: React.Dispatch<React.SetStateAction<servidor>>
  aditionalData?: string
}

const InfoCard = ({
  title,
  children,
  selected,
  setSingleSeleted,
  setObjectSelected,
  aditionalData
}: InfoCardProps) => {
  return (
    <div
      className={`bg-white
    text-black
    min-w-[10rem]
      lg:min-w-[20rem]
      lg:w-80
      h-5/6
      rounded-2xl 
      shadow-lg
      p-4
      lg:p-8 
      text-center 
      text-sm
      lg:text-lg 
      flex 
      flex-col items-center 
      mr-5 box-border 
      lg:hover:scale-105
      hover:cursor-pointer
      hover:transition-all
      ${selected ? 'border-4 lg:border-8 border-sky-950' : ''}
      `}
      onClick={() => {
        if (setSingleSeleted) {
          setSingleSeleted(title);
        } else if (setObjectSelected) {
          setObjectSelected({ name: title, ip: aditionalData || '' });
        }
      }}
    >
      <h1 className=''>{title} </h1>
      <div className='lg:w-52'>
        {children ? (
          <div className='flex justify-between w-full border-t-4 h-full'>
            <div className="hidden lg:block">ip :</div>
            <div>{children}</div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default InfoCard;

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
      className={` h-20
    bg-white
    text-black
      w-44  
      lg:w-64 
      rounded-2xl 
      shadow-lg
      text-center 
      text-sm
      lg:text-lg 
      flex 
      flex-col items-center 
      justify-center
      mr-5 mb-5 box-border 
      lg:hover:scale-105
      hover:cursor-pointer
      hover:transition-all
      ${selected ? 'border-4 lg:border-8 border-sky-950' : ''}
      ${setObjectSelected ? "" : ""}
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

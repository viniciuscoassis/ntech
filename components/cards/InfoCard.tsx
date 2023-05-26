import { servidor } from "@/app/interface/types";
import React, { useState } from "react";

interface InfoCardProps {
  title: string;
  children?: React.ReactNode;
  selected: boolean;
  setSingleSeleted?: React.Dispatch<React.SetStateAction<string>>
  setObjectSelected?: React.Dispatch<React.SetStateAction<servidor>>
}

const InfoCard = ({
  title,
  children,
  selected,
  setSingleSeleted,
  setObjectSelected,
}: InfoCardProps) => {
  return (
    <div
      className={`bg-white
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
      ${selected ? 'border-8 border-sky-950' : ''}
      `}
      onClick={() => {
        if (setSingleSeleted) {
          setSingleSeleted(title);
        } else if (setObjectSelected) {
          setObjectSelected({ name: title, ip: '123321' });
        }
      }}
    >
      <h1 className=''>{title} </h1>
      <div className='w-52'>
        {children ? (
          <div className='flex justify-between w-full border-t-4 h-full'>
            <div>ip :</div>
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

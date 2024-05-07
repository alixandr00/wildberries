import React from "react";
import CountUp from "react-countup";
import "./Counter.css";

export const Counter = () => {
  return (
    <div className="w-full h-[50vh] backgr flex  justify-evenly items-center banner">
      <div className="flex flex-col justify-center items-center">
        <CountUp
          end={45}
          duration={5}
          separator=","
          className="text-[2rem] text-white font-[bold] text-center "
        />
        <p className="text-white text-[1rem] font-[500]">ОБУЧИЛИСЬ</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <CountUp
          end={35}
          duration={5}
          separator=","
          className="text-[2rem] text-white font-[bold] text-center "
        />
        <p className="text-white text-[1rem] font-[500]">ЗАКОНЧИЛИ</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <CountUp
          end={25}
          duration={5}
          separator=","
          className="text-[2rem] text-white font-[bold] text-center "
        />
        <p className="text-white text-[1rem] font-[500]">РАБОТАЮТ</p>
      </div>
    </div>
  );
};

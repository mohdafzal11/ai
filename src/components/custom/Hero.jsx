import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="h-[84vh] flex flex-col md:flex-row text-black border-black justify-center items-center mx-12 md:mx-32">
      <div className=" md:w-1/2 ">
        <div className="text-5xl text-center  md:text-left w-full leading-tight font-bold mt-2">
          Ace Your <br />{" "}
          <span className="bg-[#5169F6] text-white px-1 ">Interviews</span> with
          ACE.ai
        </div>
        <div className=" text-lg text-center md:text-left md:text-2xl font-semibold my-4">
          Practice job scholarship, and more interviews with advanced AI
          interview simulator
        </div>
        <div className="mt-12 flex justify-center  md:justify-normal">
          <Button className="p-6 font-bold">Get Started</Button>
        </div>
      </div>
      <div className="w-1/2 hidden md:flex ">
        <div>Image</div>
      </div>
    </div>
  );
};

export default Hero;

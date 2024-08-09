"use client";
import React from "react";
import Image from "next/image";
import profile2 from "@/image/img1.jpg";

import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 md:mt-8">
        <div className="col-span-7 text-center lg:text-left ">
          <h1 className=" text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500  text-4xl lg:text-5xl ">
            Hola, Welcome!!
          </h1>
          <h1 className="mb-1 p-3  text-transparent bg-clip-text bg-gradient-to-r  from-orange-400 to-purple-500 text-5xl lg:text-7xl font-extrabold"
         >
            I'm Khon Samnang
          </h1>

          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Full Stack Devoloper",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "&Mobile Devoloper",
              2000,
            ]}
            className="text-4xl lg:text-6xl"
            wrapper="span"
            speed={50}
            style={{
              
              fontWeight: "bold",
              display: "inline-block",
            }}
            repeat={Infinity}
            
          />

          <p className="text-lg lg:text-xl py-4 ">
          I've had the privilege of working on a wide range of projects that showcase my technical expertise, problem-solving skills, and passion for building innovative solutions. 
          </p>
          <div className=" ">
            <button
              className="bg-gradient-to-br from-orange-400 to-purple-500  px-12 py-5 mr-4 rounded-full text-xl shadow-sm shadow-[#42f566] 
            hover:bg-blue-500 hover:text-blue-500 "
            >
              Hire Me
            </button>
            <button className="bg-blue-500 px-10 py-5 mt-4 rounded-full text-xl hover:bg-white hover:text-black shadow-sm shadow-[#42f566]">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-8 lg:mt-0">
          <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
              src={profile2}
              alt="Image"
              className="absolute rounded-full border-dotted border-4 lg:border-8 transform lg:w-[400px] lg:h-[400px]"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

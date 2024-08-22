"use client";
import React from "react";
import Image from "next/image";

import profile2 from "@/image/img1.jpg";
import SocialLinks from "./SocialLink";

import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 md:mt-12">
        <div className="col-span-7 text-center lg:text-left ">
          <h1 className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-200  text-4xl lg:text-5xl ">
            Hola, Welcome!!
          </h1>
          <h1 className="mb-1 p-3  text-transparent bg-clip-text bg-gradient-to-r  from-blue-300 to-purple-500 text-4xl lg:text-7xl font-extrabold">
            I'm Khon Samnang
          </h1>

          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Full Stack Developer",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "&Android Developer",
              2000,
            ]}
            className="text-3xl lg:text-6xl"
            wrapper="span"
            speed={50}
            style={{
              fontWeight: "bold",
              display: "inline-block",
            }}
            repeat={Infinity}
          />

          <p className="text-lg lg:text-xl py-4 ">
            I've had the privilege of working on a wide range of projects that
            showcase my technical expertise, problem-solving skills, and passion
            for building innovative solutions.
          </p>

          <SocialLinks />

          <div className="">
            <button
              className="border-2 border-purple-400 px-12 py-5 mr-4 rounded-full text-xl shadow-md shadow-[#d16eff] 
            hover:bg-blue-600  "
            >
              Hire Me
            </button>
            <button className="border-2 border-blue-400 px-8 py-5 mt-4 rounded-full text-xl hover:bg-purple-400 hover:text-black shadow-md shadow-blue-500">
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
      <div className="mt-10 text-4xl text-center opacity-50">
        Our Portfolio is updating!! Some function are not curently available!!
      </div>
    </section>
  );
};

export default HeroSection;

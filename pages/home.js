import React from "react";
import Image from "next/image";
import banner from "./banner.png";

const Banner = () => {
  return (
    <section className="max-w-screen-xl mx-auto">
      <div className=" flex justify-between items-center">
        <div>
          <h1 className="text-4xl mb-3">
            Welcome to{" "}
            <span className="text-orange-500 text-4xl font-bold">
              CodeWithKobir
            </span>
          </h1>
          <p>
            Confused on which course to take? I have got you covered. Browse
            courses and find out the best course for you. Its free! Code With
            Harry is my attempt to teach basics and those coding techniques to
            people in short time which took me ages to learn.
          </p>
          <div className="mt-4">
            <button className="border bg-gray-500 px-6 py-2 rounded-lg text-xl hover:bg-gray-700">
              Explore
            </button>
            <button className="border bg-slate-900 text-white px-6 py-2 rounded-lg ml-3 text-xl hover:bg-slate-700">
              Blog
            </button>
          </div>
        </div>
        <div>
          <Image src={banner} alt="banner"></Image>
        </div>
      </div>
    </section>
  );
};

export default Banner;

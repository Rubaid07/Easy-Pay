"use client";
import React from "react";
import Image from "next/image";
import logo1 from "../../../public/marquee/logo-1.png";
import logo2 from "../../../public/marquee/logo-2.png";
import logo3 from "../../../public/marquee/logo-3.png";
import logo4 from "../../../public/marquee/logo-4.png";
import logo5 from "../../../public/marquee/logo-5.png";
import logo6 from "../../../public/marquee/logo-6.png";
import { Marquee } from "../ui/marquee";

const MarqueeSection = () => {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
  ];
  const MarqueeLogos = logos.map((logo, index) => (
    <div
      key={`logo-${index}`}
      className="flex items-center justify-center mx-8 md:mx-12 lg:mx-16"
    >
      <Image
        src={logo}
        alt={`Partner logo ${index + 1}`}
        width={150}
        height={60}
        className="h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
      />
    </div>
  ));

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <Marquee
        gradient={true}
        direction="left"
        pauseOnHover={true}
        repeat={2}
        className="[--duration:30s]"
      >
        {MarqueeLogos}
      </Marquee>
    </section>
  );
};

export default MarqueeSection;
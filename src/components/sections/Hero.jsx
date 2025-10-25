import React from "react";
import Image from "next/image";
import heroImage from "../../../public/hero-image.png";
import manImage from "../../../public/man.png";
import appstore from "../../../public/appstore.png";
import googleplay from "../../../public/googleplay.png";
import underline from "../../../public/underline.png";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"; 
import { TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center pt-20 pb-12 lg:pb-0 px-4 md:px-6">
      {/* Background Container */}
      <div className="absolute inset-0 top-0 left-0 right-0 bottom-0 md:inset-x-6 md:top-6 md:bottom-auto md:h-[85vh] lg:h-[90vh]">
        <div className="relative w-full h-full">
          <Image
            src={heroImage}
            alt="Hero Background"
            fill
            className="object-cover rounded-none md:rounded-3xl"
            priority
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full mx-auto px-6 md:px-12 xl:px-24 lg:px-[36.5px] gap-8 lg:gap-16">
        
        {/* Left Content */}
        <div className="flex-1 w-full lg:max-w-xl text-center lg:text-left space-y-6 lg:space-y-8">
          <div>
            <p className="text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
              EASY PAYMENT
            </p>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
              Pay{" "}
              <span className="relative inline-block">
                fast and smarter
                <Image
                  src={underline}
                  alt=""
                  width={300}
                  height={25}
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full pointer-events-none select-none"
                  aria-hidden="true"
                />
              </span>
              <br />
              from anywhere
            </h1>
          </div>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Experience the future of payments: fast, secure, and tailored
            for the next generations convenience and trust.
          </p>

          <div className="flex flex-row gap-3 md:gap-4 justify-center lg:justify-start items-center">
            <Image
              src={appstore}
              alt="Download on App Store"
              width={150}
              height={50}
              className="cursor-pointer w-32 md:w-36 lg:w-40 h-auto hover:opacity-90 transition"
            />
            <Image
              src={googleplay}
              alt="Get it on Google Play"
              width={150}
              height={50}
              className="cursor-pointer w-32 md:w-36 lg:w-40 h-auto hover:opacity-90 transition"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center lg:justify-end w-full mt-8 lg:mt-0">
          <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
            <div className="relative w-full">
              <Image
                src={manImage}
                alt="Happy user with headphones"
                width={600}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            {/* Card */}
            <div className="absolute top-8 md:top-12 lg:top-16 right-4 md:right-8 bg-white shadow-lg rounded-xl p-3 md:p-4 flex items-center gap-3 w-fit">
              <div className="flex -space-x-2"> 
                <Avatar className="h-8 w-8 md:h-10 md:w-10 border-2 border-white">
                  <AvatarImage src="https://randomuser.me/api/portraits/men/44.jpg" alt="User 1" />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
                <Avatar className="h-8 w-8 md:h-10 md:w-10 border-2 border-white">
                  <AvatarImage src="https://randomuser.me/api/portraits/women/45.jpg" alt="User 2" />
                  <AvatarFallback>U2</AvatarFallback>
                </Avatar>
                <Avatar className="h-8 w-8 md:h-10 md:w-10 border-2 border-white">
                  <AvatarImage src="https://randomuser.me/api/portraits/men/46.jpg" alt="User 3" />
                  <AvatarFallback>U3</AvatarFallback>
                </Avatar>
              </div>
              <div className="pr-2">
                <p className="font-bold text-gray-900 text-sm md:text-base">120K+</p>
                <p className="text-xs text-gray-500 whitespace-nowrap">Active users</p>
              </div>
            </div>

            {/* Card */}
            <div className="absolute left-4 md:left-8 bottom-8 md:bottom-12 lg:bottom-16">
              <div className="bg-white shadow-2xl rounded-xl md:rounded-2xl p-4 md:p-5 w-48 md:w-56 lg:w-64">
                <p className="text-gray-700 font-medium text-xs md:text-sm mb-2">Payment Received</p>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-3">+35,890.00</h3>
                <div className="flex justify-between items-center">
                  <p className="text-xs md:text-sm text-gray-500">9th Jan, 2024</p>
                  <div className="flex items-center gap-1">
                    <p className="text-green-600 font-semibold text-xs md:text-sm">3.09%</p>
                    <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
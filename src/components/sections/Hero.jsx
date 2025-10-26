import React from "react";
import Image from "next/image";
import heroImage from "../../../public/hero/hero-image.png";
import manImage from "../../../public/hero/man.png";
import appstore from "../../../public/hero/appstore.png";
import googleplay from "../../../public/hero/googleplay.png";
import underline from "../../../public/hero/underline.png";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"; 
import { TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full pt-16 md:pt-20 pb-4 md:pb-8 overflow-auto ">
      {/* Background Container */}
      <div className="absolute inset-0 md:inset-x-4 lg:inset-x-6 md:top-4 lg:top-6 md:bottom-auto md:h-[110vh] lg:h-[83vh] xl:h-[80vh] 2xl:h-[78vh]">
        <div className="relative w-full h-full">
          <Image
            src={heroImage}
            alt="Hero Background"
            fill
            className="object-cover rounded-none md:rounded-2xl lg:rounded-3xl"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-[75vh] sm:min-h-[80vh] md:min-h-[75vh] lg:h-[80vh] xl:h-[75vh] flex items-end">
        <div className="md:w-10/12 mx-auto flex flex-col lg:flex-row items-center justify-between px-4 pb-4 md:pb-6 lg:pb-8 gap-6 md:gap-8 lg:gap-12 xl:gap-16 mt-10">
          
          {/* Left Content */}
          <div className="flex-1 w-full lg:max-w-xl text-center lg:text-left space-y-2 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div>
              <p className="text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wider">
                EASY PAYMENT
              </p>
              
              <h1 className="text-4xl 2xl:text-6xl xl:text-5xl font-bold leading-tight text-gray-900">
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
            
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed sm:leading-loose">
              Experience the future of payments: fast, secure, and tailored
              for the next generations convenience and trust.
            </p>

            <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start items-center pt-2 sm:pt-4">
              <Image
                src={appstore}
                alt="Download on App Store"
                width={140}
                height={50}
                className="cursor-pointer w-28 md:w-34 h-auto hover:opacity-90 transition-opacity duration-200"
              />
              <Image
                src={googleplay}
                alt="Get it on Google Play"
                width={140}
                height={50}
                className="cursor-pointer w-28  md:w-34 h-auto hover:opacity-90 transition-opacity duration-200"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex justify-center lg:justify-end w-full relative">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
              {/* Man Image */}
              <div className="relative w-full h-full flex items-end">
                <Image
                  src={manImage}
                  alt="Happy user with headphones"
                  width={600}
                  height={600}
                  className="w-full h-auto max-h-[50vh] sm:max-h-[55vh] md:max-h-[60vh] lg:max-h-[65vh] object-contain object-bottom"
                  priority
                  sizes="(max-width: 640px) 80vw, (max-width: 768px) 70vw, (max-width: 1024px) 60vw, 50vw"
                />
              </div>

              {/* Active Users Card */}
              <div className="absolute top-2 sm:top-4 md:top-6 lg:top-12 xl:top-40 2xl:top-62 right-1 sm:right-2 md:right-4 lg:right-2 xl:right-10 bg-white shadow-md sm:shadow-lg rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 flex items-center gap-2 sm:gap-3 w-[150px] sm:w-[180px] md:w-[200px] lg:w-[210px] xl:w-[220px] max-w-[220px]">
                <div className="flex -space-x-1 sm:-space-x-2">
                  <Avatar className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-9 xl:w-9 border-2 border-white">
                    <AvatarImage src="https://randomuser.me/api/portraits/men/44.jpg" alt="User 1" />
                    <AvatarFallback>U1</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-9 xl:w-9 border-2 border-white">
                    <AvatarImage src="https://randomuser.me/api/portraits/women/45.jpg" alt="User 2" />
                    <AvatarFallback>U2</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-9 xl:w-9 border-2 border-white">
                    <AvatarImage src="https://randomuser.me/api/portraits/men/46.jpg" alt="User 3" />
                    <AvatarFallback>U3</AvatarFallback>
                  </Avatar>
                </div>
                <div className="pr-1 sm:pr-2">
                  <p className="font-bold text-gray-900 text-[10px] sm:text-xs md:text-sm lg:text-base">120K+</p>
                  <p className="text-[8px] sm:text-[10px] md:text-xs text-gray-500 whitespace-nowrap">Active users</p>
                </div>
              </div>

              {/* Payment Received Card */}
              <div className="absolute left-1 sm:left-2 md:left-4 lg:left-4 xl:left-6 bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-24 xl:bottom-16">
                <div className="bg-white shadow-md sm:shadow-lg rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[208px] max-w-[208px] max-h-[116px]">
                  <p className="text-gray-700 font-medium text-[10px] sm:text-xs md:text-sm lg:text-base mb-0.5 sm:mb-1 md:mb-1.5">Payment Received</p>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-600 mb-1 sm:mb-1.5 md:mb-2">+35,890.00</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm text-gray-500">9th Jan, 2024</p>
                    <div className="flex items-center gap-0.5 sm:gap-1">
                      <p className="text-green-600 font-semibold text-[8px] sm:text-[10px] md:text-xs lg:text-sm">3.09%</p>
                      <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-green-600" />
                    </div>
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
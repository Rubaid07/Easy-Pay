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
    <section className="relative w-full h-[80vh] flex items-end justify-center z-0 px-6">
      {/* Background */}
      <div className="absolute inset-x-6 top-6 bottom-0">
        <Image
          src={heroImage}
          alt="Hero Background Image"
          fill
          className="object-cover rounded-3xl"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full px-[111px]">
        {/* Left Text Content  */}
        <div className="flex-1 text-left space-y-6 md:space-y-8">
          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase">
              Easy Payment
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 relative">
              Pay{" "}
              <span className="relative inline-block">
                fast and smarter
                <Image
                  src={underline}
                  alt="Underline for fast and smarter"
                  width={300}
                  height={25}
                  className="absolute -bottom-2 left-0 w-full pointer-events-none select-none"
                />
              </span>{" "}
              <br />
              from anywhere
            </h1>
          </div>

          <p className="text-gray-600 max-w-md">
            Experience the future of payments: fast, secure, and tailored
            for the next generations convenience and trust.
          </p>

          <div className="flex gap-4">
            <Image
              src={appstore}
              alt="App Store"
              width={140}
              height={45}
              className="cursor-pointer"
            />
            <Image
              src={googleplay}
              alt="Google Play"
              width={140}
              height={45}
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 flex justify-end mt-10 md:mt-0 relative">
          <Image
            src={manImage}
            alt="Happy User"
            className="-mr-12 object-contain"
            priority
          />

          <div className="absolute top-60 bg-white shadow-lg rounded-lg p-4 flex items-center gap-4 w-[210px]">
            
            <div className="flex -space-x-3 rtl:space-x-reverse"> 
                <Avatar className="h-9 w-9 border-2 border-white">
                  <AvatarImage src="https://randomuser.me/api/portraits/men/44.jpg" alt="@user1" />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>

                <Avatar className="h-9 w-9 border-2 border-white">
                  <AvatarImage src="https://randomuser.me/api/portraits/men/45.jpg" alt="@user2" />
                  <AvatarFallback>U2</AvatarFallback>
                </Avatar>
                
                <Avatar className="h-9 w-9 border-2 border-white">
                  <AvatarImage src="https://randomuser.me/api/portraits/men/46.jpg" alt="@user3" />
                  <AvatarFallback>U3</AvatarFallback>
                </Avatar>
            </div>

            <div>
              <p className="font-semibold text-gray-800">120K+</p>
              <p className="text-xs text-gray-500">Active users</p>
            </div>
          </div>
          {/* Floating Card */}
         <div className="absolute left-50 bottom-12">
           <div className="bg-white shadow-xl rounded-2xl p-4 w-60">
            
            <p className="text-gray-900 font-semibold mb-2">Payment Received</p>

            <h3 className="text-2xl font-bold text-blue-600 mb-3">
                +35,890.00
            </h3>

            <div className="flex justify-between items-center text-sm text-gray-600">
                
                <p>11th Jan, 2024</p>
                
                <div className="flex items-center space-x-1">
                    <p className="text-green-600 font-semibold">3.09%</p>
                    <TrendingUp className="w-4 h-4 text-green-600" />
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
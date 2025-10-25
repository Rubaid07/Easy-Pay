import React from 'react';
import Image from 'next/image';

import workingManImage from '../../../public/howItWork/working-man.png';
import download from '../../../public/howItWork/download.png';
import wallet from '../../../public/howItWork/wallet.png';
import camera from '../../../public/howItWork/camera.png';
import Button from '../ui/Button';

const stepsData = [
  {
    icon: download,
    title: 'Download Easy Pay',
    description: 'Get the Easy Pay app today from the App Store or Google Play hassle free.',
  },
  {
    icon: wallet,
    title: 'Link your bank or card',
    description: 'Easily connect your account in seconds with advanced security for peace of mind.',
  },
  {
    icon: camera,
    title: 'Start paying',
    description: 'Easily split bills, send money to friends, and make smooth online payments instantly.',
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-30 md:py-24 px-4 bg-gray-50 mt-10">
      <div className="md:w-10/12 mx-auto">
        
        {/* Heading Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 md:mb-12 gap-4 md:gap-6">
          <div className="max-w-xl">
            <p className="text-purple-600 font-semibold text-sm uppercase tracking-wider mb-2">
              HOW IT WORKS
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-gray-900 leading-tight">
              Make payments, transfers, and
              <br className="hidden sm:inline" />
              more in 3 simple steps
            </h2>
          </div>
          
          <Button variant="filled" className="justify-center mt-4 md:mt-0">
            Get Started Now
          </Button>
        </div>
        
        {/* Cards */}
        <div className="flex flex-col lg:flex-row mb-6 bg-white rounded-3xl border border-gray-100">
          {stepsData.map((step, index) => (
            <React.Fragment key={index}>
              <div className="relative p-4 sm:p-6 flex-1 min-w-0 overflow-hidden">
                {/* bg Number */}
                <div className="absolute top-8 left-0 text-6xl sm:text-7xl md:text-[100px] font-extrabold text-gray-100 select-none opacity-100 ml-2 sm:ml-4 mt-[-5px] sm:mt-[-10px] px-4 sm:px-6">
                  0{index + 1}
                </div>

                {/* Icon */}
                <div className="relative mb-4 sm:mb-6 pt-12 sm:pt-16 px-4 sm:px-6">
                  <div className="">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={40}
                      height={40}
                      className="object-contain w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative px-4 sm:px-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Divider */}
              {index !== stepsData.length - 1 && (
                <div className="hidden lg:block">
                  <div className="mx-4 h-full w-px bg-gradient-to-b from-transparent via-indigo-200/50 to-transparent" />
                </div>
              )}

              {/* Mobile Divider */}
              {index !== stepsData.length - 1 && (
                <div className="lg:hidden mx-6 h-px bg-gradient-to-r from-transparent via-indigo-200/50 to-transparent" />
              )}
            </React.Fragment>
          ))}
        </div>
        
        {/* Image */}
        <div className="w-full rounded-2xl overflow-hidden">
          <Image
            src={workingManImage}
            alt="Person working on laptop at cafe"
            className="w-full h-auto object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
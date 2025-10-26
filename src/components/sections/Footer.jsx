import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo.png';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden mt-30">
      {/* Glow Effects */}
      <div className="absolute inset-0 -bottom-100 flex justify-center items-center pointer-events-none">
        <div className="w-[472px] h-96 bg-[#CD9BFF] blur-[100px] opacity-40"></div>
      </div>

      <div className="relative z-10">
        <div className="md:w-10/12 mx-auto px-4 md:pt-16 md:pb-0">
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 mb-6">
            {/* Logo */}
            <div className="lg:w-5/12 xl:w-4/12">
              <Link href="/" className="flex items-center text-black mb-4">
                <Image 
                  src={logo} 
                  alt="Easy Pay Logo"
                  width={40}
                  height={40}
                  className="w-8 h-8 lg:w-10 lg:h-10"
                />
                <h1 className="font-bold text-xl lg:text-2xl ml-2 text-black">
                  Easy Pay
                </h1>
              </Link>
              <p className="text-gray-600 font-medium leading-relaxed max-w-[278px] text-sm lg:text-base">
                Easy Pay offers secure, seamless, and fee-free payments for effortless global transactions.
              </p>
            </div>
            
              <div className="flex flex-col sm:flex-row gap-8 lg:gap-12 xl:gap-30">
                {/* Short Links */}
                <div className="sm:w-1/2 lg:w-auto">
                  <h3 className="text-black font-semibold mb-4 text-lg">Short links</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/features" className="text-gray-600 font-medium hover:text-black transition-colors text-sm lg:text-base">
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link href="/how-it-works" className="text-gray-600 font-medium hover:text-black transition-colors text-sm lg:text-base">
                        How it works
                      </Link>
                    </li>
                    <li>
                      <Link href="/security" className="text-gray-600 font-medium hover:text-black transition-colors text-sm lg:text-base">
                        Security
                      </Link>
                    </li>
                    <li>
                      <Link href="/testimonial" className="text-gray-600 font-medium hover:text-black transition-colors text-sm lg:text-base">
                        Testimonial
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Other Pages */}
                <div className="sm:w-1/2 lg:w-auto">
                  <h3 className="text-black font-semibold mb-4 text-lg">Other pages</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/privacy-policy" className="text-gray-600 font-medium hover:text-black transition-colors text-sm lg:text-base">
                        Privacy policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms-conditions" className="text-gray-600 font-medium hover:text-black transition-colors text-sm lg:text-base">
                        Terms & conditions
                      </Link>
                    </li>
                    <li>
                      <Link href="/404" className="text-gray-600 font-medium hover:text-black transition-colors text-sm lg:text-base">
                        404
                      </Link>
                    </li>
                  </ul>
                </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="py-6 lg:py-8 border-t border-gray-300">
            <p className="text-gray-400 font-medium text-xs sm:text-sm text-center">
              {new Date().getFullYear()} © Easy Pay. All rights reserved. Fintech Landing Page by Rubaid
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
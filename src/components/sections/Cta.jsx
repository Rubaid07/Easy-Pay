import React from 'react';
import Image from 'next/image';
import cta from '../../../public/cta/cta.png';
import Button from '../ui/Button';
const Cta = () => {
  return (
    <section className="md:px-4 bg-white">
      <div className="md:w-10/12 mx-auto">
        
        {/* CTA Card */}
        <div className="relative md:rounded-3xl overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image
              src={cta}
              alt="Payment background"
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 text-center py-16 sm:py-20 md:py-24 px-6 sm:px-12 md:px-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6 max-w-4xl mx-auto">
              Ready to experience seamless<br className="hidden sm:block" />
              secure payments globally
            </h2>
            
            <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 max-w-3xl mx-auto">
              Ready for hassle-free, secure payments anywhere in the world? Start using Monks<br className="hidden sm:block" />
              Pay today it's fast, free, and focused on keeping your transactions secure!
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant='filled'>
                Download the App
              </Button>
              <Button variant='outlined' className="border-white text-white hover:bg-white/20">
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Cta;
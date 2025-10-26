"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and stress-free. Say goodbye to confusion and hello to straightforward payments.",
    name: "Ethan Williams",
    role: "Digital Marketing Specialist",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg"
  },
  {
    id: 2,
    rating: 5,
    text: "Discover a payment app focused on simplicity and transparency. Enjoy a seamless experience with no hidden fees, providing clarity and ease in every transaction. It's designed to put you in control of your payments. ",
    name: "Daniel Thompson",
    role: "Product Designer",
    avatar: "https://randomuser.me/api/portraits/men/71.jpg"
  },
  {
    id: 3,
    rating: 5,
    text: "Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and stress-free. Say goodbye to confusion and hello to straightforward payments.",
    name: "Sarah Johnson",
    role: "Business Owner",
    avatar: "https://randomuser.me/api/portraits/men/99.jpg"
  },
];

const TestimonialSection = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <section className="w-full py-20 sm:py-16 md:py-24 bg-gray-50 md:my-30 my-10 overflow-hidden">
      <div className="md:ml-20 lg:ml-32 xl:ml-46 pl-4 sm:px-6 md:px-0">
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-5/12 flex flex-col">
            <p className="text-purple-600 font-bold text-xs sm:text-sm uppercase tracking-widest mb-3 md:mb-4">
              TESTIMONIAL
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              We've build trust with<br />
              reviews from real users
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 flex-1">
              Boost your credibility by featuring genuine testimonials from real users, showcasing their positive experiences and satisfaction with Monks Pay services.
            </p>
            
            {/* Navigation Buttons */}
            <div className="flex gap-3 sm:gap-4">
              <button
                onClick={() => swiperInstance?.slidePrev()}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              </button>
              <button
                onClick={() => swiperInstance?.slideNext()}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
            </div>
          </div>
          
          {/* Testimonial Slider */}
          <div className="w-full lg:w-7/12 -mr-4 sm:-mr-6 relative">
            {/* Glow Effect */}
            <div className="absolute hidden lg:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[60%] bg-purple-400/30 rounded-full pointer-events-none blur-3xl z-0"></div>
            
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={16}
              slidesPerView={1.1}
              onSwiper={setSwiperInstance}
              speed={800}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                480: {
                  slidesPerView: 1.2,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 24,
                },
                768: {
                  slidesPerView: 1.8,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 1.5,
                  spaceBetween: 24,
                },
                1280: {
                  slidesPerView: 2,
                  spaceBetween: 32,
                },
              }}
              className="testimonial-swiper relative z-10"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="relative group h-full">
                    
                    <div className="relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-sm h-full border border-gray-100 flex flex-col overflow-y-hidden w-full">
                      <div className="flex gap-1 mb-4 sm:mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm flex-1">
                        {testimonial.text}
                      </p>
                      
                      <div className="flex items-center gap-3 sm:gap-4 mt-auto">
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0" />
                        <div className="min-w-0">
                          <h4 className="font-bold text-gray-900 text-sm sm:text-base truncate">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-600 truncate">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default TestimonialSection;
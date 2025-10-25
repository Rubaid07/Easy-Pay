import React from "react";
import Image from "next/image";
import MarqueeSection from "./Marquee";

const Features = () => {
  const features = [
    {
      icon: "/payments.png",
      title: "Instant payments",
      description: "Send money to friends or family in real-time, for free.",
      bgColor: "bg-blue-50",
    },
    {
      icon: "/fees.png",
      title: "No hidden fees",
      description: "Clear and simple pricing. Always be aware of your costs.",
      bgColor: "bg-orange-50",
    },
    {
      icon: "/wallet.png",
      title: "Digital wallet",
      description: "Store money securely and make fast transfers or purchases.",
      bgColor: "bg-blue-50",
    },
    {
      icon: "/transactions.png",
      title: "Secure transactions",
      description: "End-to-end encryption for all transactions.",
      bgColor: "bg-purple-50",
    }
  ];

  return (
   <div>
     <section className="w-full py-16 pb-10 md:pb-16 md:pt-20 lg:pt-24 px-4">
      <div className="md:w-10/12 mx-auto">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <p className="text-purple-600 font-bold text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4">
            FEATURES
          </p>
          <h2 className="text-3xl md:text-[40px] font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
            Why choose Easy Pay for {""}
            <br className="hidden md:block" />
            effortless payments?
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-2xl lg:rounded-3xl p-4 md:p-8 lg:p-10 transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              <div className="mb-4 sm:mb-6 mx-auto w-max">
                <div className="w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 flex items-center justify-center rounded-2xl">
                  <Image 
                    src={feature.icon} 
                    alt={feature.title}
                    width={40}
                    height={40}
                    className="w-8 h-8 md:w-10 md:h-10 object-contain"
                  />
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-gray-800 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      <MarqueeSection />
   </div>
  );
};

export default Features;
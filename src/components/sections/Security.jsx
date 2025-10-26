import React from "react";
import bg from "../../../public/hero/hero-image.png";

const securityFeatures = [
  { color: "bg-blue-600", title: "Two-factor authentication", description: "Two-factor authentication ensures added protection by using verification steps." },
  { color: "bg-red-500", title: "Fraud detection and alerts", description: "Fraud detection safeguards your money, sending instant alerts for any activity." },
  { color: "bg-green-500", title: "Transaction notifications", description: "Instant notifications for transaction keep you informed to manage your finances." },
  { color: "bg-cyan-600", title: "Biometric access", description: "Easily and securely log in with biometric features, and facial recognition." },
  { color: "bg-orange-500", title: "End-to-end encryption", description: "By encryption, protecting your data from unauthorized access." },
  { color: "bg-purple-600", title: "24/7 Protection support", description: "Our dedicated team is available around the clock to help you." },
];

const Security = () => {
  const containerStyle = {
    backgroundImage: `url('${bg.src}')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
    backgroundSize: "cover",
  };

  return (
    <section className="py-20 md:py-30 px-4">
      <div className="md:w-10/12 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start md:mb-16 mb-6 gap-5">
          <div className="max-w-2xl">
            <p className="text-purple-600 font-semibold text-sm uppercase tracking-wider mb-1">
              SECURITY
            </p>
            <h2 className="text-3xl md:text-[40px] font-bold text-gray-900 leading-tight">
              We protect your money at <br /> every step with Easy Pay
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed text-base max-w-md lg:pt-8">
            Easy Pay ensures your money is protected at every step with advanced encryption,
            real-time monitoring, and multi-factor authentication.
          </p>
        </div>

        {/* Features grid  */}
        <div
          className="rounded-2xl overflow-hidden border border-gray-100 relative"
          style={containerStyle}
        >
          <div className="absolute inset-0 bg-white/70"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="relative p-8 md:p-10"
              >
                {/*  Divider  */}
                {(index + 1) % 3 !== 0 && index < securityFeatures.length - 1 && (
                  <div className="hidden lg:block absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                )}
                {(index + 1) % 2 !== 0 && index < securityFeatures.length - 1 && (
                  <div className="hidden md:block lg:hidden absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                )}
                {index < securityFeatures.length - 2 && (
                  <div className="hidden md:block lg:hidden absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                )}
                {index < securityFeatures.length - 1 && (
                  <div className="block md:hidden absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                )}

                {/* Dot */}
                <div className="relative mb-8 w-6 h-6">
                  <div className={`absolute inset-0 rounded-full ${feature.color} opacity-20`} />
                  <div
                    className={`absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full ${feature.color}`}
                  />
                </div>

                {/* Text */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;

import React from "react";
import { Check } from "lucide-react";
import Button from "../ui/Button";

const pricingPlans = [
  {
    name: "Free Plan",
    description: "Free for personal payments.",
    price: "$0",
    period: "/month",
    features: [
      "Up to 100 transactions per month",
      "Basic proud protection",
      "Email support",
    ],
    buttonText: "Get Free Plan",
    isDark: false,
  },
  {
    name: "Advanced",
    description: "Minimal fees for advanced transactions",
    price: "$19",
    period: "/month",
    features: [
      "Up to 1000 transactions per month",
      "Advanced proud protection",
      "Detailed transaction reports",
      "Priority email & chat support",
    ],
    buttonText: "Get Advanced Plan",
    isDark: true,
  },
  {
    name: "Business",
    description: "Premium business transactions",
    price: "$29",
    period: "/month",
    features: [
      "Unlimited transactions per month",
      "Premium proud protection",
      "Detailed transaction reports",
      "Priority email & chat support",
    ],
    buttonText: "Get Business Plan",
    isDark: false,
  },
];

const PricingSection = () => {
  return (
    <section className="w-full px-4 bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="md:w-10/12 mx-auto">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <p className="text-purple-600 font-bold text-xs md:text-sm uppercase tracking-widest mb-1">
            PRICING
          </p>
          <h2 className="text-3xl md:text-[40px] font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
            Simple transparent pricing <br className="hidden md:block" />
            no hidden fees
          </h2>
        </div>

        {/* Cards */}
        <div
          className="
            grid grid-cols-1 
            lg:grid-cols-2 
            xl:grid-cols-3 
            lg:gap-6 
            lg:space-y-0 
            space-y-6
            max-w-6xl mx-auto
          "
        >
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative md:flex md:justify-center
                ${index === 1 ? "md:col-span-2 lg:col-span-1 md:justify-center" : ""}
              `}
            >
              {/* Glow effect */}
              {plan.isDark && (
                <div
                  className="
                    absolute hidden md:block bottom-[-30px] left-1/2 
                    -translate-x-1/2 w-[140%] sm:w-[110%] lg:w-[160%]
                    h-[50%] bg-purple-400/30 rounded-full 
                    pointer-events-none blur-3xl z-0
                  "
                ></div>
              )}

              <div
                className={`relative rounded-3xl w-full md:max-w-full h-full min-h-[504px] p-6 md:p-8 border-2 flex flex-col justify-between transition-all z-10 duration-300 
                  ${
                    plan.isDark
                      ? "bg-gray-900 border-gray-900"
                      : "bg-white border-gray-200"
                  }`}
              >
                <div>
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      plan.isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      plan.isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-baseline mt-6">
                    <span
                      className={`text-5xl font-bold ${
                        plan.isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-lg ml-1 ${
                        plan.isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>
                </div>

                <div
                  className={`border-t my-6 md:my-8 ${
                    plan.isDark ? "border-gray-800" : "border-gray-200"
                  }`}
                ></div>

                <div className="space-y-4 mb-6 md:mb-8 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                     <div className={` rounded-full p-1 ${
                          plan.isDark ? "bg-gray-800" : "bg-blue-100"
                        }`}>
                       <Check
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          plan.isDark ? "text-white" : "text-blue-600"
                        }`}
                        strokeWidth={2.5}
                      />
                     </div>
                      <span
                        className={`text-sm ${
                          plan.isDark ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  variant={plan.isDark ? "filled" : "outlined"}
                  className="w-full"
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
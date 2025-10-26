"use client";
import React from 'react';
import { CheckCircle } from 'lucide-react';
import CountUp from "react-countup";
import Image from 'next/image';

const AppOverviewSection = () => {
    const features = [
        {
            title: "Real-time Balance Tracking",
            description: "Monitor your account balance and transactions in real-time with intuitive visualizations."
        },
        {
            title: "Instant Money Transfers",
            description: "Send and receive money instantly with just a few taps, 24/7."
        },
        {
            title: "Smart Spending Analytics",
            description: "Get insights into your spending patterns with categorized analytics and reports."
        },
        {
            title: "Secure Biometric Login",
            description: "Access your account securely with Face ID or fingerprint authentication."
        }
    ];

    return (
        <section className="w-full py-16 md:py-24 px-4 bg-white">
            <div className="md:w-10/12 mx-auto">

                <div className="text-center mb-12 md:mb-16">
                    <p className="text-purple-600 font-bold text-xs md:text-sm uppercase tracking-widest mb-1">
                        APP OVERVIEW
                    </p>
                    <h2 className="text-3xl md:text-[40px] font-bold text-gray-900 leading-tight">
                        Beautiful, intuitive interface
                        <br className="hidden md:block" />
                        for seamless payments
                    </h2>
                </div>

                <div className="flex flex-col justify-center lg:flex-row items-center gap-6 lg:gap-24">

                    {/* Left Side */}
                    <div className="relative">
                        {/* Glow Effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-50 blur-xl"></div>

                        {/* Mockup Image */}
                        <div className="relative w-full max-w-sm">
                            <Image
                                src="/mockup.png"
                                alt="Easy Pay Mobile App Dashboard"
                                width={350}
                                height={700}
                                className="w-full h-auto object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="max-w-lg mx-auto lg:mx-0 lg:pl-4 mt-10 lg:mt-0">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                            Everything you need in one app
                        </h3>

                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <CheckCircle className="w-6 h-6 text-green-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                                            {feature.title}
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-gray-200">
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-gray-900">
                                    <CountUp end={99.9} duration={3} decimals={1} suffix="%" />
                                </div>
                                <div className="text-sm text-gray-600 mt-1">Uptime</div>
                            </div>

                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-gray-900">
                                    <CountUp end={2} duration={3} suffix="M+" />
                                </div>
                                <div className="text-sm text-gray-600 mt-1">Happy Users</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AppOverviewSection;
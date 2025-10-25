"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../../../public/logo.png';
import Button from '../ui/Button';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 lg:py-[60.5px] px-6 sm:px-8 lg:px-12 xl:px-28 bg-white/30 backdrop-blur-sm lg:backdrop-blur-none lg:bg-transparent">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 text-gray-800 z-60">
                    <Image 
                        src={logo} 
                        alt="Easy Pay Logo"
                    />
                    <h1 className='font-bold text-xl lg:text-2xl'>Easy Pay</h1>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-12">
                    <ul className="flex gap-10">
                        <li>
                            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-base transition duration-150">
                                Features
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-base transition duration-150">
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-base transition duration-150">
                                Security
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-base transition duration-150">
                                Benefits
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="hidden lg:block">
                    <Button variant="filled">
                        Contact Us
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="lg:hidden flex items-center justify-center w-10 h-10 text-gray-600 hover:text-gray-900 transition duration-150"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`
                fixed inset-0 z-40 lg:hidden transition-all duration-300 ease-in-out
                ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
            `}>
                <div 
                    className="absolute inset-0 bg-black/50"
                    onClick={toggleMenu}
                />
                
                <div className={`
                    absolute top-0 right-0 w-80 max-w-full h-full bg-white shadow-xl transform transition-transform duration-300
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                `}>
                        {/* Mobile Navigation Links */}
                    <div className="flex flex-col h-full pt-20 pb-8 px-6">
                        <ul className="flex flex-col space-y-6">
                            <li>
                                <a 
                                    href="#" 
                                    className="text-gray-600 hover:text-gray-900 font-medium text-lg transition duration-150 block py-2"
                                    onClick={toggleMenu}
                                >
                                    Features
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#" 
                                    className="text-gray-600 hover:text-gray-900 font-medium text-lg transition duration-150 block py-2"
                                    onClick={toggleMenu}
                                >
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#" 
                                    className="text-gray-600 hover:text-gray-900 font-medium text-lg transition duration-150 block py-2"
                                    onClick={toggleMenu}
                                >
                                    Security
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#" 
                                    className="text-gray-600 hover:text-gray-900 font-medium text-lg transition duration-150 block py-2"
                                    onClick={toggleMenu}
                                >
                                    Benefits
                                </a>
                            </li>
                        </ul>

                        <div className="mt-8 pt-8 border-t border-gray-200">
                            <Button variant="filled" className="w-full justify-center">
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
import Image from 'next/image';
import React from 'react';
import logo from '../../../public/logo.png';
import Button from '../ui/Button';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-[60.5px] px-[135px] ">
            {/* Logo */}
            <Link href="/" className="flex items-center text-2xl text-gray-800">
                <Image src={logo} alt="Easy Pay Logo" width={40} height={40} />
                <h1 className='font-bold'>Easy Pay</h1>
            </Link>

            {/* Navigation Button */}
            <div className="flex items-center space-x-12">
                <ul className="flex space-x-8">
                    <li>
                        <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition duration-150">
                            Features
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition duration-150">
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition duration-150">
                            Security
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition duration-150">
                            Benefits
                        </a>
                    </li>
                </ul>

            </div>
                <Button variant="filled" >
                    Contact Us
                </Button>
        </nav>
    );
};

export default Navbar;
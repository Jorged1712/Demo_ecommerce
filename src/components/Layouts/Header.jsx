import { Link } from 'react-router-dom';
import React from 'react';
import Logo from '../../assets/Logo.jpeg';

export const Header = () => {
    return (
        <header>


            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Logo} className="h-8 rounded-full" alt="Manapro" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Demo Ecommerce</span>
                    </Link>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <span className='cursor-pointer text-xl text-gray-700 dark:text-white bi bi bi-gear'></span>
                        <span className='cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search'></span>
                        <span Link to="/cart" className='cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-cart'></span>
                        <span className='cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-person-circle'></span>
                    </div>
                </div>
            </nav>

        </header>
    )
}

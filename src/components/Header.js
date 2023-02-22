import React from 'react';

// Importing Images
import logo from '../assets/images/managerlyLogo.png';

const Header = (props) => {
    return (
        <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img alt="logo" class="w-10 h-10" src={logo} />
                    <span class="ml-3 text-xl">MANAGERLY</span>
                </a>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a href='/' class="mr-5 hover:text-gray-900">Home</a>
                    <a href='/about-us' class="mr-5 hover:text-gray-900">About Us</a>
                    <a href='/contact-us' class="mr-5 hover:text-gray-900">Contact Us</a>
                </nav>
                <button onClick={()=> window.open(props.appLink)} class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Download App
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}

export default Header
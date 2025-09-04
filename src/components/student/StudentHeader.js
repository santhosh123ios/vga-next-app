'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StudentHeader() {
  const [currentLanguage, setCurrentLanguage] = useState('EN');

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'EN' ? 'AR' : 'EN';
    setCurrentLanguage(newLanguage);
    
    // Set document direction based on language
    if (newLanguage === 'AR') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.lang = 'en';
      document.documentElement.dir = 'ltr';
    }
  };

  // Set initial direction on component mount
  useEffect(() => {
    // Set initial direction based on current language
    if (currentLanguage === 'AR') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    }
  }, [currentLanguage]);

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="w-full px-0">
        <div className="flex justify-between items-center h-16 px-4">
          {/* Logo - Left side */}
          <div className="flex-shrink-0">
            <Link href="/student/home" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="text-xl font-bold text-gray-900">VGA Student</span>
            </Link>
          </div>

          {/* Right side - Three buttons with icons */}
          <div className="flex items-center space-x-4">
            
            {/* Notification Button */}
            <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100 relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM10.5 3.75a6 6 0 00-6 6v3.5l-2 2v2h16v-2l-2-2V9.75a6 6 0 00-6-6z" />
              </svg>
              {/* Notification badge */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="hidden sm:block text-sm font-medium">Notifications</span>
            </button>

            {/* Coin Button */}
            <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              <span className="hidden sm:block text-sm font-medium">Coin</span>
            </button>

            {/* Rewards Button */}
            <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <span className="hidden sm:block text-sm font-medium">Rewards</span>
            </button>

            {/* Wallet Button */}
            <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span className="hidden sm:block text-sm font-medium">Wallet</span>
            </button>

            {/* Profile Button */}
            <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="hidden sm:block text-sm font-medium">Profile</span>
            </button>

            {/* Language Switcher Button */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <span className="hidden sm:block text-sm font-medium">{currentLanguage}</span>
            </button>
            
          </div>
        </div>
      </div>
    </header>
  );
}

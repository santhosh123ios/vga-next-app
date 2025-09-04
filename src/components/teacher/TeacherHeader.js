'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function TeacherHeader({ onMenuToggle }) {
    const [currentLanguage, setCurrentLanguage] = useState('EN');
    const [showStudentsDropdown, setShowStudentsDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const router = useRouter();

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowStudentsDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleStudentsDropdown = () => {
    setShowStudentsDropdown(!showStudentsDropdown);
  };

  const handleStudentClick = (studentId) => {
    setShowStudentsDropdown(false);
    router.push(`/teacher/student-page?studentId=${studentId}`);
  };

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="w-full px-0">
        <div className="flex justify-between items-center h-16 px-4">
          {/* Left side - Side Menu Button and Logo */}
          <div className="flex items-center space-x-4">
            {/* Side Menu Button */}
            <button 
              onClick={onMenuToggle}
              className="flex items-center justify-center w-10 h-10 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/teacher/home" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">V</span>
                </div>
                <span className="text-xl font-bold text-gray-900">VGA Teacher</span>
              </Link>
            </div>
          </div>

          {/* Right side - Three buttons with icons */}
          <div className="flex items-center space-x-4">
            
            {/* SOS Button */}
            <button className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors duration-200 p-2 rounded-lg hover:bg-red-50">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <span className="hidden sm:block text-sm font-medium">SOS</span>
            </button>

            {/* Students Button */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={toggleStudentsDropdown}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
                <span className="hidden sm:block text-sm font-medium">Students</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${showStudentsDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Students Dropdown */}
              {showStudentsDropdown && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {/* Attendance Section */}
                  <div className="px-4 py-2">
                    <button 
                      onClick={() => {
                        setShowStudentsDropdown(false);
                        router.push('/teacher/attendance');
                      }}
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left p-2 rounded"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm font-medium">Attendance</span>
                    </button>
                  </div>

                  {/* Tracker Section */}
                  <div className="px-4 py-2">
                    <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left p-2 rounded">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span className="text-sm font-medium">Tracker</span>
                    </button>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200 my-2"></div>

                  {/* Students List */}
                  <div className="px-4 py-2">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Students</h3>
                    <div className="space-y-1 max-h-48 overflow-y-auto">
                      {[
                        { id: 'ST001', name: 'Sarah Johnson', image: '/api/placeholder/32/32' },
                        { id: 'ST002', name: 'Michael Chen', image: '/api/placeholder/32/32' },
                        { id: 'ST003', name: 'Emma Davis', image: '/api/placeholder/32/32' },
                        { id: 'ST004', name: 'Alex Rodriguez', image: '/api/placeholder/32/32' },
                        { id: 'ST005', name: 'Sophie Williams', image: '/api/placeholder/32/32' },
                        { id: 'ST006', name: 'David Kim', image: '/api/placeholder/32/32' },
                        { id: 'ST007', name: 'Olivia Brown', image: '/api/placeholder/32/32' },
                        { id: 'ST008', name: 'James Wilson', image: '/api/placeholder/32/32' },
                        { id: 'ST009', name: 'Ava Garcia', image: '/api/placeholder/32/32' },
                        { id: 'ST010', name: 'Noah Martinez', image: '/api/placeholder/32/32' }
                      ].map((student, index) => (
                        <button 
                          key={student.id}
                          onClick={() => handleStudentClick(student.id)}
                          className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left p-2 rounded text-sm"
                        >
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                            <img 
                              src={student.image} 
                              alt={student.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                            <div className="w-full h-full bg-blue-100 rounded-full flex items-center justify-center hidden">
                              <span className="text-xs font-medium text-blue-600">{student.name.charAt(0)}</span>
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-gray-900 truncate">{student.name}</div>
                            <div className="text-xs text-gray-500">{student.id}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Calendar Button */}
            <button 
              onClick={() => router.push('/teacher/calendar')}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="hidden sm:block text-sm font-medium">Calendar</span>
            </button>

            {/* Notification Button */}
            <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100 relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM10.5 3.75a6 6 0 00-6 6v3.5l-2 2v2h16v-2l-2-2V9.75a6 6 0 00-6-6z" />
              </svg>
              {/* Notification badge */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="hidden sm:block text-sm font-medium">Notifications</span>
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
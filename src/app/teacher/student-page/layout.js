'use client';

import { useState, useRef, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

function StudentPageLayoutContent({ children }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const studentId = searchParams.get('studentId');
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState(() => {
        // Set initial active tab based on current path
        if (pathname.includes('/notifications')) {
            return 'NOTIFICATIONS';
        } else if (pathname.includes('/subjects')) {
            return 'POD TIME'; // Default to POD TIME for subjects page
        } else if (pathname.includes('/attendance')) {
            return 'ATTENDANCE';
        } else if (pathname.includes('/timetable')) {
            return 'TIMETABLE';
        }
        return 'POD TIME';
    });
    const [showStudentDropdown, setShowStudentDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const navigationItems = [
        { name: 'NOTIFICATIONS', color: 'bg-blue-100', hasPlus: false, path: '/teacher/student-page/notifications' },
        { name: 'POD TIME', color: 'bg-[#4ACFFF]', hasPlus: true, path: '/teacher/student-page/subjects' },
        { name: 'META LABS', color: 'bg-[#B486FF]', hasPlus: true, path: '/teacher/student-page/subjects' },
        { name: 'FUNDEMENTALS', color: 'bg-[#36EF15]', hasPlus: true, path: '/teacher/student-page/subjects' },
        { name: 'ATTENDANCE', color: 'bg-blue-100', hasPlus: false, path: '/teacher/student-page/attendance' },
        { name: 'TIMETABLE', color: 'bg-gray-100', hasPlus: false, path: '/teacher/student-page/timetable' },
        { name: 'CALENDER', color: 'bg-gray-100', hasPlus: false, path: '/teacher/student-page/calendar' },
        { name: 'JOBS', color: 'bg-gray-100', hasPlus: true, path: '/teacher/student-page/job' },
        { name: 'GALLERY', color: 'bg-gray-100', hasPlus: true, path: '/teacher/student-page/gallery' },
        { name: 'ACHIVMENTS', color: 'bg-gray-100', hasPlus: true, path: '/teacher/student-page/achievements' },
        { name: 'REPORTS', color: 'bg-gray-100', hasPlus: false, path: '/teacher/student-page' },
        { name: 'JOURNALS', color: 'bg-gray-100', hasPlus: false, path: '/teacher/student-page' },
        { name: 'WALLET', color: 'bg-gray-100', hasPlus: false, path: '/teacher/student-page' },
    ];

    const students = [
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
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowStudentDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Update active tab when pathname changes
    useEffect(() => {
        console.log('Current pathname:', pathname);
        if (pathname.includes('/notifications')) {
            setActiveTab('NOTIFICATIONS');
            console.log('Setting active tab to NOTIFICATIONS');
        } else if (pathname.includes('/subjects')) {
            setActiveTab('POD TIME'); // Default to POD TIME for subjects page
            console.log('Setting active tab to POD TIME (subjects)');
        } else if (pathname.includes('/attendance')) {
            setActiveTab('ATTENDANCE');
            console.log('Setting active tab to ATTENDANCE');
        } else if (pathname.includes('/timetable')) {
            setActiveTab('TIMETABLE');
            console.log('Setting active tab to TIMETABLE');
        } else if (pathname.includes('/calendar')) {
            setActiveTab('CALENDER');
            console.log('Setting active tab to CALENDER');
        } else if (pathname.includes('/job')) {
            setActiveTab('JOBS');
            console.log('Setting active tab to JOBS');
        } else if (pathname.includes('/gallery')) {
            setActiveTab('GALLERY');
            console.log('Setting active tab to GALLERY');
        } else if (pathname.includes('/achievements')) {
            setActiveTab('ACHIVMENTS');
            console.log('Setting active tab to ACHIVMENTS');
        } else {
            setActiveTab('POD TIME');
            console.log('Setting active tab to POD TIME (default)');
        }
    }, [pathname]);

    const handleStudentSelect = (selectedStudentId) => {
        setShowStudentDropdown(false);
        router.push(`/teacher/student-page?studentId=${selectedStudentId}`);
    };



    const getCurrentStudent = () => {
        return students.find(student => student.id === studentId) || {
            id: studentId || '2345678',
            name: 'Mohameed Haassan Ali ALMohameed'
        };
    };

    const currentStudent = getCurrentStudent();

    return (
        <>
            <div className="flex h-full bg-gray-50">
                {/* Left Sidebar */}
                <div className="w-80 bg-white shadow-lg flex flex-col">
                    {/* User Profile Section */}
                    <div className="p-4">
                        <div className="bg-[#6C85FF] rounded-lg p-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                                            <div className="flex-1">
                                <div className="text-sm font-medium text-white leading-tight">
                                    {currentStudent.name.split(' ').slice(0, 3).join(' ')}<br />
                                    {currentStudent.name.split(' ').slice(3).join(' ')}
                                </div>
                                <div className="text-sm text-white/80 font-medium">ID: {currentStudent.id}</div>
                            </div>
                                <div className="relative" ref={dropdownRef}>
                                    <button 
                                        onClick={() => setShowStudentDropdown(!showStudentDropdown)}
                                        className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors"
                                        title="Change Student"
                                    >
                                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                        </svg>
                                    </button>

                                    {/* Student Dropdown */}
                                    {showStudentDropdown && (
                                        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 max-h-64 overflow-y-auto">
                                            <div className="px-4 py-2">
                                                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Select Student</h3>
                                                <div className="space-y-1">
                                                    {students.map((student) => (
                                                        <button 
                                                            key={student.id}
                                                            onClick={() => handleStudentSelect(student.id)}
                                                            className={`flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left p-2 rounded text-sm ${
                                                                studentId === student.id ? 'bg-blue-50 text-blue-600' : ''
                                                            }`}
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
                                                            {studentId === student.id && (
                                                                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                </svg>
                                                            )}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Menu */}
                    <div className="px-4 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                        <div className="space-y-2 py-2">
                            {navigationItems.map((item) => (
                                <div key={item.name} className="relative">
                                    <button
                                        onClick={() => {
                                            setActiveTab(item.name);
                                            if (item.path) {
                                                if (item.path.includes('/subjects')) {
                                                    router.push(`${item.path}?studentId=${studentId}&subject=${item.name}`);
                                                } else {
                                                    router.push(`${item.path}?studentId=${studentId}`);
                                                }
                                            }
                                        }}
                                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                                            activeTab === item.name ? item.color : 'bg-gray-100'
                                        } hover:bg-opacity-80`}
                                        style={{ border: activeTab === item.name ? '2px solid #6C85FF' : 'none' }}
                                    >
                                        <span className="text-sm font-medium text-gray-700">{item.name}</span>
                                        {item.hasPlus && (
                                            <div className="w-6 h-6"></div>
                                        )}
                                    </button>
                                    {item.hasPlus && (
                                        <button
                                            onClick={() => {
                                                if (item.name === 'POD TIME') {
                                                    router.push(`/teacher/student-page/subjects-add?studentId=${studentId}`);
                                                }
                                            }}
                                            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110  hover:shadow-lg"
                                        >
                                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col relative">
                    {children}
                </div>
            </div>
        </>
    );
}

export default function StudentPageLayout({ children }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <StudentPageLayoutContent>{children}</StudentPageLayoutContent>
        </Suspense>
    );
}
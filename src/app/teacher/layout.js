'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import TeacherHeader from "@/components/teacher/TeacherHeader";

export default function TeacherLayout({ children }) {
    const router = useRouter();
    const [showFloatingMenu, setShowFloatingMenu] = useState(false);

    const toggleFloatingMenu = () => {
        setShowFloatingMenu(!showFloatingMenu);
    };

    const handleFloatingMenuClick = (item) => {
        setShowFloatingMenu(false);
        // Handle navigation for each menu item
        switch (item) {
            case 'Home':
                router.push('/teacher/home');
                break;
            case 'Attendance':
                router.push('/teacher/attendance');
                break;
            case 'Calendar':
                router.push('/teacher/calendar');
                break;
            case 'Job':
                router.push('/teacher/job');
                break;
            case 'SOS':
                router.push('/teacher/sos');
                break;
            case 'Profile':
                router.push('/teacher/profile');
                break;
            case 'Notifications':
                router.push('/teacher/notifications');
                break;
            case 'Wallet':
                router.push('/teacher/wallet');
                break;
            default:
                break;
        }
    };

    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <TeacherHeader onMenuToggle={toggleFloatingMenu} />
            <div className="flex-1 flex flex-row overflow-hidden relative bg-gray-100">
                {/* Left Edge Trigger Area */}
                <div 
                    className="fixed top-0 left-0 z-30 w-4 h-full"
                    onMouseEnter={() => setShowFloatingMenu(true)}
                    onMouseLeave={(e) => {
                        // Only close if mouse leaves to the right (not into the menu)
                        if (e.clientX > 4) {
                            setShowFloatingMenu(false);
                        }
                    }}
                />
                
                {/* Floating Side Menu */}
                <div 
                    className={`fixed top-0 left-0 z-40 w-64 h-full bg-white shadow-xl border-r border-gray-200 transform transition-transform duration-300 ease-in-out ${showFloatingMenu ? 'translate-x-0' : '-translate-x-full'}`}
                    onMouseLeave={(e) => {
                        // Only close if mouse leaves to the right (not back to trigger area)
                        if (e.clientX > 0) {
                            setShowFloatingMenu(false);
                        }
                    }}
                >
                    <div className="flex flex-col h-full">
                        {/* Menu Header */}
                        <div className="p-4 border-b border-gray-200">
                            <div className="flex items-center space-x-3">
                                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
                            </div>
                        </div>
                        
                        {/* Menu Items */}
                        <div className="flex-1 py-2">
                            {[
                                { name: 'Home', icon: '🏠' },
                                { name: 'Attendance', icon: '🔔' },
                                { name: 'Calendar', icon: '📅' },
                                { name: 'Job', icon: '💼' },
                                { name: 'SOS', icon: '🚨' },
                                { name: 'Profile', icon: '👤' },
                                { name: 'Notifications', icon: '🔔' },
                                { name: 'Wallet', icon: '💰' }
                            ].map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => handleFloatingMenuClick(item.name)}
                                    className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                                >
                                    <span className="text-lg">{item.icon}</span>
                                    <span className="text-sm font-medium text-gray-700">{item.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Overlay */}
                {showFloatingMenu && (
                    <div 
                        className="fixed inset-0 z-30"
                        onMouseEnter={(e) => {
                            // Only close if mouse enters from the right side
                            if (e.clientX > 64) {
                                setShowFloatingMenu(false);
                            }
                        }}
                    />
                )}
               
                <main className="flex-1 overflow-y-auto overflow-x-hidden">
                    {children}
                </main>
            </div>
        </div>
    )
}
'use client';
import { useRouter } from 'next/navigation';

export default function StudentPage() {
    const router = useRouter();

    const handleJoinPod = () => {
        router.push('/student/subjects?tab=Pod Time');
    };

    const handleEnterLab = () => {
        router.push('/student/subjects?tab=Meta Labs');
    };

    const handleLearnBasics = () => {
        router.push('/student/subjects?tab=Fundamentals');
    };

    const handleJobsClick = () => {
        router.push('/student/jobs');
    };

    return (
        <div className="flex w-full h-full overflow-hidden">
            {/* First section - 70% width */}
            <div className="w-[70%] bg-gray-50 p-0  overflow-y-auto">
                <div className="flex w-full h-full space-x-4 flex-col h-full">
                    {/* Left subsection - 60% width */}
                    <div className="h-[60%] w-full bg-white rounded-lg p-4 ">
                        {/* Three cards in a row */}
                        <div className="flex space-x-4 h-full">
                            {/* Card 1 */}
                            <div className="flex-1 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-4 hover:shadow-lg transition-all duration-200">
                                <div className="flex flex-col items-center justify-center h-full text-center">
                                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-blue-900 text-lg mb-2">Pod Time</h3>
                                    <p className="text-sm text-blue-700 mb-3">Access your pod sessions and materials</p>
                                    <button 
                                        onClick={handleJoinPod}
                                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors text-sm"
                                    >
                                        Join Pod
                                    </button>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="flex-1 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-4 hover:shadow-lg transition-all duration-200">
                                <div className="flex flex-col items-center justify-center h-full text-center">
                                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-green-900 text-lg mb-2">Meta Labs</h3>
                                    <p className="text-sm text-green-700 mb-3">Access your lab sessions and experiments</p>
                                    <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors text-sm" onClick={handleEnterLab}>
                                        Enter Lab
                                    </button>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="flex-1 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-4 hover:shadow-lg transition-all duration-200">
                                <div className="flex flex-col items-center justify-center h-full text-center">
                                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-purple-900 text-lg mb-2">Fundamentals</h3>
                                    <p className="text-sm text-purple-700 mb-3">Access fundamental concepts and basics</p>
                                    <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition-colors text-sm" onClick={handleLearnBasics}>
                                        Learn Basics
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right subsection - 40% width */}
                    <div className="h-[40%] w-full bg-white rounded-lg p-4 ">
                        {/* Four horizontal cards */}
                        <div className="flex space-x-3 h-full">
                            {/* Card 1 */}
                            <div 
                                className="flex-1 bg-blue-50 border border-blue-200 rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer"
                                onClick={handleJobsClick}
                            >
                                <div className="flex flex-col items-center justify-center h-full text-center">
                                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-2">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.88V4a1 1 0 011-1h2a1 1 0 011 1v1.88A3 3 0 0118 8v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a3 3 0 013-2.12zM15 8a1 1 0 00-1-1H8a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1V8z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-medium text-blue-900 text-sm mb-1">Jobs</h3>
                                    <p className="text-xs text-blue-700">View available jobs</p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div 
                                className="flex-1 bg-green-50 border border-green-200 rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer"
                                onClick={() => window.location.href = '/student/gallery'}
                            >
                                <div className="flex flex-col items-center justify-center h-full text-center">
                                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-2">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-medium text-green-900 text-sm mb-1">Gallery</h3>
                                    <p className="text-xs text-green-700">Browse images</p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div 
                                className="flex-1 bg-purple-50 border border-purple-200 rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer"
                                onClick={() => window.location.href = '/student/achievements'}
                            >
                                <div className="flex flex-col items-center justify-center h-full text-center">
                                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-2">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-medium text-purple-900 text-sm mb-1">Achievements</h3>
                                    <p className="text-xs text-purple-700">View your achievements</p>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div 
                                className="flex-1 bg-orange-50 border border-orange-200 rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer"
                                onClick={() => window.location.href = '/student/journal'}
                            >
                                <div className="flex flex-col items-center justify-center h-full text-center">
                                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-2">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-medium text-orange-900 text-sm mb-1">Journal</h3>
                                    <p className="text-xs text-orange-700">Read journal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Second section - 30% width */}
            <div className="w-[30%] bg-white p-6">
               
                {/* Three equal-sized cards */}
                <div className="h-full flex flex-col space-y-2">
                    {/* Card 1 */}
                    <div className="flex-1 bg-blue-50 border border-blue-200 rounded-lg p-4 hover:shadow-md transition-shadow min-h-0">
                        <div className="flex flex-col items-center justify-center h-full text-center">
                            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-3">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.88V4a1 1 0 011-1h2a1 1 0 011 1v1.88A3 3 0 0118 8v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a3 3 0 013-2.12zM15 8a1 1 0 00-1-1H8a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1V8z" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-blue-900 text-lg mb-2">Announcement Banner</h3>
                            <p className="text-sm text-blue-700">View latest announcements</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex-1 bg-green-50 border border-green-200 rounded-lg p-4 hover:shadow-md transition-shadow min-h-0">
                        <div className="flex flex-col items-center justify-center h-full text-center">
                            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-3">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-green-900 text-lg mb-2">Calendar</h3>
                            <p className="text-sm text-green-700">View your schedule</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex-1 bg-purple-50 border border-purple-200 rounded-lg p-4 hover:shadow-md transition-shadow min-h-0">
                        <div className="flex flex-col items-center justify-center h-full text-center">
                            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-3">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-purple-900 text-lg mb-2">Leaderboard</h3>
                            <p className="text-sm text-purple-700">View rankings</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
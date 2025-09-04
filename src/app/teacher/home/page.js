'use client';
import { useState } from 'react';

export default function TeacherPage() {
    const [currentMood, setCurrentMood] = useState('😊');

    const moodOptions = ['😊', '😐', '😔', '😤', '😴', '🤔'];

    return (
        <div className=" bg-gray-50 p-1 h-full">
            <div className="  mx-3 h-[97%]">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 h-full pt-3">
                    
                    {/* Left Side - Main Content */}
                    <div className="lg:col-span-2 space-y-3 h-full ">
                        
                        {/* Top Section - Colored Panels */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[50%]">
                            {/* POD TIME Panel */}
                            <div className="bg-blue-100 rounded-lg p-4">
                                <h3 className="text-lg font-semibold text-blue-800 mb-4">POD TIME</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    {[
                                        { id: 'PT001', name: 'Emma', image: '/api/placeholder/24/24' },
                                        { id: 'PT002', name: 'Liam', image: '/api/placeholder/24/24' },
                                        { id: 'PT003', name: 'Sophia', image: '/api/placeholder/24/24' },
                                        { id: 'PT004', name: 'Noah', image: '/api/placeholder/24/24' },
                                        { id: 'PT005', name: 'Olivia', image: '/api/placeholder/24/24' },
                                        { id: 'PT006', name: 'William', image: '/api/placeholder/24/24' },
                                        { id: 'PT007', name: 'Ava', image: '/api/placeholder/24/24' },
                                        { id: 'PT008', name: 'James', image: '/api/placeholder/24/24' },
                                        { id: 'PT009', name: 'Isabella', image: '/api/placeholder/24/24' },
                                        { id: 'PT010', name: 'Benjamin', image: '/api/placeholder/24/24' },
                                        { id: 'PT011', name: 'Mia', image: '/api/placeholder/24/24' },
                                        { id: 'PT012', name: 'Lucas', image: '/api/placeholder/24/24' }
                                    ].map((student) => (
                                        <div key={student.id} className="flex items-center space-x-2 text-blue-700">
                                            <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center overflow-hidden">
                                                <img 
                                                    src={student.image} 
                                                    alt={student.name}
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                        e.target.nextSibling.style.display = 'flex';
                                                    }}
                                                />
                                                <div className="w-full h-full bg-blue-300 rounded-full flex items-center justify-center hidden">
                                                    <span className="text-xs font-medium text-blue-700">{student.name.charAt(0)}</span>
                                                </div>
                                            </div>
                                            <div className="min-w-0">
                                                <div className="text-sm font-medium truncate">{student.name}</div>
                                                <div className="text-xs text-blue-600">{student.id}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* META LABS Panel */}
                            <div className="bg-purple-100 rounded-lg p-4">
                                <h3 className="text-lg font-semibold text-purple-800 mb-4">META LABS</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    {[
                                        { id: 'ML001', name: 'Ethan', image: '/api/placeholder/24/24' },
                                        { id: 'ML002', name: 'Charlotte', image: '/api/placeholder/24/24' },
                                        { id: 'ML003', name: 'Alexander', image: '/api/placeholder/24/24' },
                                        { id: 'ML004', name: 'Amelia', image: '/api/placeholder/24/24' },
                                        { id: 'ML005', name: 'Henry', image: '/api/placeholder/24/24' },
                                        { id: 'ML006', name: 'Harper', image: '/api/placeholder/24/24' },
                                        { id: 'ML007', name: 'Sebastian', image: '/api/placeholder/24/24' },
                                        { id: 'ML008', name: 'Evelyn', image: '/api/placeholder/24/24' }
                                    ].map((student) => (
                                        <div key={student.id} className="flex items-center space-x-2 text-purple-700">
                                            <div className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center overflow-hidden">
                                                <img 
                                                    src={student.image} 
                                                    alt={student.name}
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                        e.target.nextSibling.style.display = 'flex';
                                                    }}
                                                />
                                                <div className="w-full h-full bg-purple-300 rounded-full flex items-center justify-center hidden">
                                                    <span className="text-xs font-medium text-purple-700">{student.name.charAt(0)}</span>
                                                </div>
                                            </div>
                                            <div className="min-w-0">
                                                <div className="text-sm font-medium truncate">{student.name}</div>
                                                <div className="text-xs text-purple-600">{student.id}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FUNDAMENTALS Panel */}
                            <div className="bg-green-100 rounded-lg p-4">
                                <h3 className="text-lg font-semibold text-green-800 mb-4">FUNDAMENTALS</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    {[
                                        { id: 'FD001', name: 'Daniel', image: '/api/placeholder/24/24' },
                                        { id: 'FD002', name: 'Sofia', image: '/api/placeholder/24/24' },
                                        { id: 'FD003', name: 'Jackson', image: '/api/placeholder/24/24' },
                                        { id: 'FD004', name: 'Avery', image: '/api/placeholder/24/24' },
                                        { id: 'FD005', name: 'Samuel', image: '/api/placeholder/24/24' },
                                        { id: 'FD006', name: 'Ella', image: '/api/placeholder/24/24' },
                                        { id: 'FD007', name: 'David', image: '/api/placeholder/24/24' },
                                        { id: 'FD008', name: 'Madison', image: '/api/placeholder/24/24' },
                                        { id: 'FD009', name: 'Joseph', image: '/api/placeholder/24/24' },
                                        { id: 'FD010', name: 'Scarlett', image: '/api/placeholder/24/24' }
                                    ].map((student) => (
                                        <div key={student.id} className="flex items-center space-x-2 text-green-700">
                                            <div className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center overflow-hidden">
                                                <img 
                                                    src={student.image} 
                                                    alt={student.name}
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                        e.target.nextSibling.style.display = 'flex';
                                                    }}
                                                />
                                                <div className="w-full h-full bg-green-300 rounded-full flex items-center justify-center hidden">
                                                    <span className="text-xs font-medium text-green-700">{student.name.charAt(0)}</span>
                                                </div>
                                            </div>
                                            <div className="min-w-0">
                                                <div className="text-sm font-medium truncate">{student.name}</div>
                                                <div className="text-xs text-green-600">{student.id}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Bottom Section - Grey Modules */}
                        <div className="space-y-4 h-[50%] flex flex-row space-x-4">

                                                         <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 w-[50%] h-[100%]">
                                 <h3 className="text-lg font-bold text-gray-800 mb-4">PORTALS</h3>
                                 <div className="grid grid-cols-3 gap-2 h-[calc(100%-3rem)]">
                                     {/* Row 1 */}
                                     <button className="bg-gray-100 hover:bg-gray-200 rounded p-2 text-center transition-colors flex items-center justify-center">
                                         <div className="text-xs font-medium text-gray-700">NUMBOTS</div>
                                     </button>
                                     <button className="bg-gray-100 hover:bg-gray-200 rounded p-2 text-center transition-colors flex items-center justify-center">
                                         <div className="text-xs font-medium text-gray-700">PURPLE ASH</div>
                                     </button>
                                     <button className="bg-gray-100 hover:bg-gray-200 rounded p-2 text-center transition-colors flex items-center justify-center">
                                         <div className="text-xs font-medium text-gray-700">CENTURY TECH</div>
                                     </button>
                                     
                                     {/* Row 2 */}
                                     <button className="bg-gray-100 hover:bg-gray-200 rounded p-2 text-center transition-colors flex items-center justify-center">
                                         <div className="text-xs font-medium text-gray-700">T ROCK STARS</div>
                                     </button>
                                     <button className="bg-gray-100 hover:bg-gray-200 rounded p-2 text-center transition-colors flex items-center justify-center">
                                         <div className="text-xs font-medium text-gray-700 leading-tight">GOOGLE WORKSPACE</div>
                                     </button>
                                     <button className="bg-gray-100 hover:bg-gray-200 rounded p-2 text-center transition-colors flex items-center justify-center">
                                         <div className="text-xs font-medium text-gray-700">GOOGLE CLASSROOM</div>
                                     </button>
                                 </div>
                             </div>

                            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 w-[50%] h-[100%]">
                                <h3 className="text-lg font-bold text-gray-800 mb-4">MANAGEMENT</h3>
                                <div className="grid grid-cols-4 gap-2 h-[calc(100%-3rem)]">
                                    {/* Row 1 */}
                                    <button className="bg-blue-100 hover:bg-blue-200 rounded p-2 text-center transition-colors flex items-center justify-center">
                                        <div className="text-xs font-medium text-blue-700">STUDENTS</div>
                                    </button>
                                    <button className="bg-green-100 hover:bg-green-200 rounded p-2 text-center transition-colors flex items-center justify-center">
                                        <div className="text-xs font-medium text-green-700">CLASSES</div>
                                    </button>
                                    <button className="bg-purple-100 hover:bg-purple-200 rounded p-2 text-center transition-colors flex items-center justify-center">
                                        <div className="text-xs font-medium text-purple-700">PROJECTS</div>
                                    </button>
                                    <button className="bg-orange-100 hover:bg-orange-200 rounded p-2 text-center transition-colors flex items-center justify-center">
                                        <div className="text-xs font-medium text-orange-700">REPORTS</div>
                                    </button>
                                    
                                    {/* Row 2 */}
                                    <button className="bg-red-100 hover:bg-red-200 rounded p-2 text-center transition-colors flex items-center justify-center">
                                        <div className="text-xs font-medium text-red-700">JOBS</div>
                                    </button>
                                    <button className="bg-yellow-100 hover:bg-yellow-200 rounded p-2 text-center transition-colors flex items-center justify-center">
                                        <div className="text-xs font-medium text-yellow-700">ACHIEVEMENTS</div>
                                    </button>
                                    <button className="bg-indigo-100 hover:bg-indigo-200 rounded p-2 text-center transition-colors flex items-center justify-center">
                                        <div className="text-xs font-medium text-indigo-700">GALLERY</div>
                                    </button>
                                    <button className="bg-pink-100 hover:bg-pink-200 rounded p-2 text-center transition-colors flex items-center justify-center">
                                        <div className="text-xs font-medium text-pink-700">JOURNALS</div>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Side - Utility/Information */}
                    <div className="space-y-3">
                        
                        {/* Mood Tracker */}
                        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200 h-[10%]">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-700 font-medium">How are you feeling today?</span>
                                <div className="flex space-x-2">
                                    {moodOptions.map((mood, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentMood(mood)}
                                            className={`text-2xl p-1 rounded ${currentMood === mood ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
                                        >
                                            {mood}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        

                        {/* Calendar */}
                        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 h-[38.5%]">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-lg font-bold text-gray-800">Calendar</h3>
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </div>
                            <div className="grid grid-cols-7 gap-1 text-xs">
                                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                                    <div key={day} className="text-center text-gray-500 font-medium py-1">
                                        {day}
                                    </div>
                                ))}
                                {Array.from({ length: 35 }, (_, index) => {
                                    const day = index - 3; // Start from previous month
                                    const isCurrentMonth = day > 0 && day <= 31;
                                    const isToday = day === 30;
                                    
                                    return (
                                        <div 
                                            key={index}
                                            className={`text-center py-1 rounded ${
                                                isToday 
                                                    ? 'bg-blue-500 text-white font-bold' 
                                                    : isCurrentMonth 
                                                        ? 'text-gray-800' 
                                                        : 'text-gray-400'
                                            }`}
                                        >
                                            {day > 0 ? day : ''}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Announcements Banner */}
                        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 h-[49.5%]">
                            <h3 className="text-lg font-bold text-gray-800 mb-2">Announcements Banner</h3>
                            <div className="bg-gray-100 rounded p-3 text-center text-gray-600 h-[85%]">
                                Rotating Image Slider
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
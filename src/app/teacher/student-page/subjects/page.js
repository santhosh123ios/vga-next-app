'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function SubjectsPage() {
    const searchParams = useSearchParams();
    const studentId = searchParams.get('studentId');
    const subject = searchParams.get('subject') || 'POD TIME';
    const [activeMission, setActiveMission] = useState(0);
    
    // Debug: Log the subject value
    console.log('Current subject:', subject);

    // Define color mapping for different subjects
    const getSubjectColor = (subjectName) => {
        console.log('Getting color for subject:', subjectName);
        const upperSubject = subjectName.toUpperCase();
        console.log('Uppercase subject:', upperSubject);
        
        switch (upperSubject) {
            case 'POD TIME':
                return '#4ACFFF';
            case 'META LABS':
                return '#B486FF';
            case 'FUNDEMENTALS':
                return '#36EF15';
            default:
                console.log('Using default color for:', upperSubject);
                return '#36EF15'; // Default color
        }
    };

    const subjectColor = getSubjectColor(subject);

    const missions = [
        { id: 1, title: 'Mission Extremely Long Title One Mission Title O...', progress: '2/5', subject: 'English' },
        { id: 2, title: 'Mission Extremely Long Title One Mission Title O...', progress: '2/5', subject: 'English' },
        { id: 3, title: 'Mission Extremely Long Title One Mission Title O...', progress: '2/5', subject: 'English' },
        { id: 4, title: 'Mission Extremely Long Title One Mission Title O...', progress: '2/5', subject: 'English' },
        { id: 5, title: 'Mission Extremely Long Title One Mission Title O...', progress: '2/5', subject: 'English' }
    ];

    const instructions = [
        { id: 1, number: '88', text: 'Listen and respond appropriately to adults and their peers Listen and respond appropriately to adults and their peers', status: 'completed', comments: [
            { date: '28/10/2025 | 3:55 PM', text: 'unknown printer took a galley of type and scrambled it to make a type specimen' },
            { date: '28/10/2025 | 3:55 PM', text: 'unknown printer took a galley of type and scrambled it to make a type specimen' }
        ]},
        { id: 2, number: '88', text: 'Listen and respond appropriately to adults and their peers Listen and respond appropriately to adults and their peers', status: 'active' },
        { id: 3, number: '88', text: 'Listen and respond appropriately to adults and their peers Listen and respond appropriately to adults and their peers', status: 'inactive' },
        { id: 4, number: '88', text: 'Listen and respond appropriately to adults and their peers Listen and respond appropriately to adults and their peers', status: 'inactive' }
    ];

    return (
        <div className="flex flex-col h-full">
            {/* Top Navigation Bar */}
            <div className="p-2 m-6 mb-0 rounded-lg shadow-sm" style={{ backgroundColor: subjectColor }}>
                <div className="flex space-x-2 overflow-x-auto">
                    {missions.map((mission, index) => (
                        <div 
                            key={mission.id}
                            onClick={() => setActiveMission(index)}
                            className={`flex-shrink-0 w-32 bg-white rounded-lg p-2 cursor-pointer ${
                                activeMission === index ? 'ring-2' : ''
                            }`}
                            style={{
                                '--tw-ring-color': activeMission === index ? subjectColor : 'transparent'
                            }}
                        >
                            <div className="text-xs text-gray-600 mb-1">{mission.subject}</div>
                            <div className="w-full h-12 bg-gray-300 rounded mb-1"></div>
                            <div className="text-xs font-medium text-gray-800 mb-1 line-clamp-2">
                                {mission.title}
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-600">{mission.progress}</span>
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex overflow-hidden">
                {/* Left Panel */}
                <div className="flex-1 p-6 space-y-6 overflow-y-auto">
                    {/* Main Header Section */}
                    <div className="text-white p-4 rounded-t-lg" style={{ backgroundColor: subjectColor }}>
                        <div className="flex justify-between items-start">
                            <div className="flex-1">
                                <div className="text-lg font-medium mb-2">{subject}</div>
                                <div className="text-2xl font-bold mb-2">
                                    Mission Extremely Long Title One Mission Title Mission Extremely Long Title One Mission Title O...
                                </div>
                                <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm inline-block">
                                    2/5
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                
                                <button className="bg-white text-blue-600 px-4 py-2 rounded font-medium">
                                    Spoken language
                                </button>

                                <button className="bg-white text-blue-600 px-4 py-2 rounded font-medium">
                                    EDIT
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Objective Section */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold text-gray-800">Objective</h3>
                            <button className="text-white px-3 py-1 rounded text-sm" style={{ backgroundColor: subjectColor }}>
                                EDIT
                            </button>
                        </div>
                        <div className="text-gray-700 space-y-3">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <p>
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                            </p>
                        </div>
                    </div>

                    {/* Instructions Section */}
                    <div className="bg-gray-100 rounded-lg p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold text-gray-800">Instructions</h3>
                            <button className="text-blue-600 hover:text-blue-700">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </button>
                        </div>
                        <div className="space-y-4">
                            {instructions.map((instruction) => (
                                <div key={instruction.id} className={`bg-white rounded-lg p-4 ${
                                    instruction.status === 'completed' ? 'bg-green-50' : 
                                    instruction.status === 'active' ? 'border-2 border-red-300' : 
                                    'border-2 border-red-300 opacity-60'
                                }`}>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                                            {instruction.number}
                                        </div>
                                        <div className="flex-1">
                                            <p className={`text-sm mb-2 ${
                                                instruction.status === 'inactive' ? 'text-gray-500' : 'text-gray-800'
                                            }`}>
                                                {instruction.text}
                                            </p>
                                            {instruction.status === 'completed' && instruction.comments && (
                                                <div className="space-y-2">
                                                    {instruction.comments.map((comment, index) => (
                                                        <div key={index} className="bg-white rounded p-2 text-xs text-gray-600">
                                                            <div className="font-medium">► {comment.date}</div>
                                                            <div>{comment.text}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex flex-col items-end space-y-2">
                                            {instruction.status === 'completed' ? (
                                                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                                                    Completed
                                                </span>
                                            ) : (
                                                                                            <button className="text-white px-3 py-1 rounded text-xs" style={{ backgroundColor: subjectColor }}>
                                                EDIT
                                            </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Panel */}
                <div className="w-90 bg-gray-50 p-6 pl-0 space-y-6 overflow-y-auto ">
                    

                    {/* Activity Content Card */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                        <div className="text-sm text-gray-600 mb-3">28/10/2025 3:55 PM</div>
                        <p className="text-gray-700 text-sm mb-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
                        </p>
                        <div className="grid grid-cols-4 gap-2">
                            <div className="w-12 h-12 bg-white border border-gray-200 rounded flex items-center justify-center text-2xl">
                                😊
                            </div>
                            <div className="w-12 h-12 bg-white border border-gray-200 rounded flex items-center justify-center">
                                📄
                            </div>
                            <div className="w-12 h-12 bg-white border border-gray-200 rounded flex items-center justify-center">
                                📄
                            </div>
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-12 h-12 bg-white border border-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                                    IMG
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action Section */}
                    <div className="space-y-4">
                        <textarea 
                            placeholder="Leave a Comment" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 h-31 resize-none"
                            style={{
                                '--tw-ring-color': subjectColor
                            }}
                            rows="4"
                        />
                        <div className="flex space-x-2">
                            <button className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors">
                                Decline
                            </button>
                            <button className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors">
                                Approve
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
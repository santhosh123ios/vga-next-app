'use client';
import { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

function SubjectsContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('Pod Time');

    const tabs = useMemo(() => ['Pod Time', 'Meta Labs', 'Fundamentals'], []);

    // Set initial active tab based on URL parameter
    useEffect(() => {
        const tabParam = searchParams.get('tab');
        if (tabParam && tabs.includes(tabParam)) {
            setActiveTab(tabParam);
        }
    }, [searchParams, tabs]);

    const handleSubjectClick = (subjectId) => {
        router.push(`/student/subjects/details?id=${subjectId}`);
    };

    const subjects = [
        {
            id: 1,
            title: 'Extremely Long Title One Mission Title Over Here',
            language: 'English',
            spokenLanguage: 'Spanish',
            image: '/next.svg',
            progress: 75
        },
        {
            id: 2,
            title: 'Mathematics Fundamentals',
            language: 'English',
            spokenLanguage: 'French',
            image: '/vercel.svg',
            progress: 45
        },
        {
            id: 3,
            title: 'Science and Technology',
            language: 'English',
            spokenLanguage: 'German',
            image: '/globe.svg',
            progress: 90
        },
        {
            id: 4,
            title: 'History and Culture',
            language: 'English',
            spokenLanguage: 'Italian',
            image: '/file.svg',
            progress: 30
        },
        {
            id: 5,
            title: 'Literature and Arts',
            language: 'English',
            spokenLanguage: 'Portuguese',
            image: '/window.svg',
            progress: 60
        },
        {
            id: 6,
            title: 'Physical Education',
            language: 'English',
            spokenLanguage: 'Russian',
            image: '/next.svg',
            progress: 85
        },
        {
            id: 1,
            title: 'Extremely Long Title One Mission Title Over Here',
            language: 'English',
            spokenLanguage: 'Spanish',
            image: '/next.svg',
            progress: 75
        },
        {
            id: 2,
            title: 'Mathematics Fundamentals',
            language: 'English',
            spokenLanguage: 'French',
            image: '/vercel.svg',
            progress: 45
        },
        {
            id: 3,
            title: 'Science and Technology',
            language: 'English',
            spokenLanguage: 'German',
            image: '/globe.svg',
            progress: 90
        },
        {
            id: 4,
            title: 'History and Culture',
            language: 'English',
            spokenLanguage: 'Italian',
            image: '/file.svg',
            progress: 30
        },
        {
            id: 5,
            title: 'Literature and Arts',
            language: 'English',
            spokenLanguage: 'Portuguese',
            image: '/window.svg',
            progress: 60
        },
        {
            id: 6,
            title: 'Physical Education',
            language: 'English',
            spokenLanguage: 'Russian',
            image: '/next.svg',
            progress: 85
        }
    ];

    return (
        <div className="p-6">
            {/* Tab Bar */}
            <div className="sticky top-0 z-10 bg-transparent py-4 -mx-0 mb-0">
                <div className="flex bg-gray-200 rounded-full p-1 w-fit">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-2 font-medium transition-all duration-200 ${
                            activeTab === tab
                                ? 'bg-white text-blue-600 rounded-full shadow-sm'
                                : 'text-gray-700 hover:text-gray-900'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
                </div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {subjects.map((subject) => (
                    <div
                        key={subject.id}
                        onClick={() => handleSubjectClick(subject.id)}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer"
                    >
                        {/* Labels */}
                        <div className="flex justify-between items-center p-4 pb-2">
                            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                                {subject.language}
                            </span>
                            <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                                {subject.spokenLanguage}
                            </span>
                        </div>

                        {/* Image */}
                        <div className="px-4 pb-2">
                            <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                                <img
                                    src={subject.image}
                                    alt={subject.title}
                                    className="w-16 h-16 object-contain"
                                />
                            </div>
                        </div>

                        {/* Title */}
                        <div className="px-4 pb-3">
                            <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                                {subject.title}
                            </h3>
                        </div>

                        {/* Progress Bar */}
                        <div className="px-4 pb-4">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-gray-600">Progress</span>
                                <span className="text-sm font-medium text-gray-800">
                                    {subject.progress}%
                                </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                    style={{ width: `${subject.progress}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Subjects() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SubjectsContent />
        </Suspense>
    );
}
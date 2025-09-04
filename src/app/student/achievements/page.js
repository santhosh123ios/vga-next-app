'use client';
import { useState } from 'react';

export default function Achievements() {
    const [activeTab, setActiveTab] = useState('Trading Cards');

    const tabs = ['Trading Cards', 'Trinkets', 'Badges', 'Certificates'];

    // Sample data for each tab
    const tradingCards = [
        { id: 1, name: 'Math Master', rarity: 'Rare', image: '🧮', description: 'Complete 50 math problems' },
        { id: 2, name: 'Science Explorer', rarity: 'Common', image: '🔬', description: 'Finish 10 science experiments' },
        { id: 3, name: 'Language Learner', rarity: 'Epic', image: '🌍', description: 'Learn 5 new languages' },
        { id: 4, name: 'Art Creator', rarity: 'Legendary', image: '🎨', description: 'Create 20 original artworks' },
        { id: 5, name: 'History Buff', rarity: 'Rare', image: '📚', description: 'Read 100 history books' },
        { id: 6, name: 'Tech Wizard', rarity: 'Epic', image: '💻', description: 'Build 15 coding projects' },
        
    ];

    const trinkets = [
        { id: 1, name: 'Golden Compass', rarity: 'Rare', image: '🧭', description: 'Navigate through 100 lessons' },
        { id: 2, name: 'Crystal Ball', rarity: 'Epic', image: '🔮', description: 'Predict 50 quiz answers correctly' },
        { id: 3, name: 'Magic Wand', rarity: 'Legendary', image: '🪄', description: 'Cast 1000 learning spells' },
        { id: 4, name: 'Time Turner', rarity: 'Epic', image: '⏰', description: 'Study for 1000 hours' },
        { id: 5, name: 'Invisibility Cloak', rarity: 'Rare', image: '👻', description: 'Complete 50 stealth missions' },
        { id: 6, name: 'Flying Carpet', rarity: 'Common', image: '🛋️', description: 'Travel to 25 different subjects' }
    ];

    const badges = [
        { id: 1, name: 'First Steps', rarity: 'Common', image: '🥇', description: 'Complete your first lesson' },
        { id: 2, name: 'Dedicated Learner', rarity: 'Rare', image: '📖', description: 'Study for 7 consecutive days' },
        { id: 3, name: 'Speed Demon', rarity: 'Epic', image: '⚡', description: 'Complete 10 lessons in one day' },
        { id: 4, name: 'Perfect Score', rarity: 'Legendary', image: '💯', description: 'Get 100% on 20 quizzes' },
        { id: 5, name: 'Helping Hand', rarity: 'Rare', image: '🤝', description: 'Help 50 other students' },
        { id: 6, name: 'Innovator', rarity: 'Epic', image: '💡', description: 'Create 10 original projects' },
        { id: 1, name: 'First Steps', rarity: 'Common', image: '🥇', description: 'Complete your first lesson' },
        { id: 2, name: 'Dedicated Learner', rarity: 'Rare', image: '📖', description: 'Study for 7 consecutive days' },
        { id: 3, name: 'Speed Demon', rarity: 'Epic', image: '⚡', description: 'Complete 10 lessons in one day' },
        { id: 4, name: 'Perfect Score', rarity: 'Legendary', image: '💯', description: 'Get 100% on 20 quizzes' },
        { id: 5, name: 'Helping Hand', rarity: 'Rare', image: '🤝', description: 'Help 50 other students' },
        { id: 6, name: 'Innovator', rarity: 'Epic', image: '💡', description: 'Create 10 original projects' }
    
    ];

    const certificates = [
        { id: 1, name: 'Mathematics Certificate', rarity: 'Common', image: '📜', description: 'Complete Advanced Mathematics course' },
        { id: 2, name: 'Science Excellence', rarity: 'Rare', image: '🏆', description: 'Master all science subjects' },
        { id: 3, name: 'Language Proficiency', rarity: 'Epic', image: '🌐', description: 'Fluent in 3 languages' },
        { id: 4, name: 'Creative Arts', rarity: 'Rare', image: '🎭', description: 'Complete Creative Arts program' },
        { id: 5, name: 'Technology Expert', rarity: 'Epic', image: '🤖', description: 'Master programming and AI' },
        { id: 6, name: 'Academic Excellence', rarity: 'Legendary', image: '👑', description: 'Achieve top 1% in all subjects' }
    ];

    const getItemsForTab = (tab) => {
        switch (tab) {
            case 'Trading Cards':
                return tradingCards;
            case 'Trinkets':
                return trinkets;
            case 'Badges':
                return badges;
            case 'Certificates':
                return certificates;
            default:
                return tradingCards;
        }
    };

    const getRarityColor = (rarity) => {
        switch (rarity) {
            case 'Common':
                return 'bg-gray-100 text-gray-800';
            case 'Rare':
                return 'bg-blue-100 text-blue-800';
            case 'Epic':
                return 'bg-purple-100 text-purple-800';
            case 'Legendary':
                return 'bg-yellow-100 text-yellow-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {getItemsForTab(activeTab).map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer"
                    >
                        {/* Rarity Badge */}
                        <div className="flex justify-end p-4 pb-2">
                            <span className={`text-sm font-medium px-2 py-1 rounded ${getRarityColor(item.rarity)}`}>
                                {item.rarity}
                            </span>
                        </div>

                        {/* Image/Icon */}
                        <div className="px-4 pb-2">
                            <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                                <span className="text-6xl">{item.image}</span>
                            </div>
                        </div>

                        {/* Title */}
                        <div className="px-4 pb-3">
                            <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                                {item.name}
                            </h3>
                        </div>

                        {/* Description */}
                        <div className="px-4 pb-4">
                            <p className="text-sm text-gray-600 line-clamp-2">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
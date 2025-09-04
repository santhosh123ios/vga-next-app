'use client';

import { useState } from 'react';

export default function AchievementsPage() {
    const [selectedTrophyTab, setSelectedTrophyTab] = useState('trading-cards');
    const [selectedCertificateTab, setSelectedCertificateTab] = useState('certificates');

    const trophyTabs = [
        { id: 'trading-cards', name: 'Trading Cards' },
        { id: 'trinkets', name: 'Trinkets' },
        { id: 'badges', name: 'Badges' }
    ];

    const certificateTabs = [
        { id: 'certificates', name: 'Certificates' },
        { id: 'awards', name: 'Awards' },
        { id: 'diplomas', name: 'Diplomas' }
    ];

    const trophyItems = [
        {
            id: 1,
            title: 'Achievement Title',
            subtitle: 'Second Line',
            date: '28/10/2025',
            description1: 'Extremely Long Title One',
            description2: 'Long Title One Mission'
        },
        {
            id: 2,
            title: 'Achievement Title',
            subtitle: 'Second Line',
            date: '28/10/2025',
            description1: 'Extremely Long Title One',
            description2: 'Long Title One Mission'
        },
        {
            id: 3,
            title: 'Achievement Title',
            subtitle: 'Second Line',
            date: '28/10/2025',
            description1: 'Extremely Long Title One',
            description2: 'Long Title One Mission'
        }
    ];

    const certificateItems = [
        {
            id: 1,
            title: 'Achievement Title',
            subtitle: 'Second Line',
            date: '28/10/2025',
            description1: 'Extremely Long Title One',
            description2: 'Long Title One Mission'
        },
        {
            id: 2,
            title: 'Achievement Title',
            subtitle: 'Second Line',
            date: '28/10/2025',
            description1: 'Extremely Long Title One',
            description2: 'Long Title One Mission'
        },
        {
            id: 3,
            title: 'Achievement Title',
            subtitle: 'Second Line',
            date: '28/10/2025',
            description1: 'Extremely Long Title One',
            description2: 'Long Title One Mission'
        },
        {
            id: 2,
            title: 'Achievement Title',
            subtitle: 'Second Line',
            date: '28/10/2025',
            description1: 'Extremely Long Title One',
            description2: 'Long Title One Mission'
        }
    ];

    return (
        <div className="p-4 bg-gray-50 h-full overflow-y-auto">
            {/* Header */}
            {/* <div className="bg-blue-400 text-white text-center py-4 rounded-t-lg mb-6">
                <h1 className="text-2xl font-bold uppercase">ACHIVMENTS</h1>
            </div> */}

            {/* Points and Alpha Coins Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 h-[20%]">
                {/* Points Section */}
                <div className="bg-blue-400 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-white font-bold uppercase">POINTS</h2>
                        <button className="bg-blue-500 text-white w-8 h-8 rounded flex items-center justify-center hover:bg-blue-600 transition-colors">
                            <span className="text-sm">+</span>
                        </button>
                    </div>
                    <div className="bg-white rounded-lg p-4 flex justify-between items-center">
                        <span className="text-gray-700">Points</span>
                        <span className="text-2xl font-bold text-gray-800">288</span>
                    </div>
                </div>

                {/* Alpha Coins Section */}
                <div className="bg-blue-400 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-white font-bold uppercase">ALPHA COINS</h2>
                        <button className="bg-blue-500 text-white w-8 h-8 rounded flex items-center justify-center hover:bg-blue-600 transition-colors">
                            <span className="text-sm">+</span>
                        </button>
                    </div>
                    <div className="bg-white rounded-lg p-4 flex justify-between items-center">
                        <span className="text-gray-700">Alpha Coins</span>
                        <span className="text-2xl font-bold text-gray-800">288</span>
                    </div>
                </div>
            </div>

            {/* Trophies and Certificates Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[77%]">
                {/* Trophies Section */}
                <div className="bg-blue-400 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-white font-bold uppercase">TROPHIES</h2>
                        <button className="bg-blue-500 text-white w-8 h-8 rounded flex items-center justify-center hover:bg-blue-600 transition-colors">
                            <span className="text-sm">+</span>
                        </button>
                    </div>
                    
                    {/* Trophy Tabs */}
                    <div className="flex space-x-2 mb-4">
                        {trophyTabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setSelectedTrophyTab(tab.id)}
                                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                                    selectedTrophyTab === tab.id
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-blue-300 text-white hover:bg-blue-400'
                                }`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>

                    {/* Trophy Cards */}
                    <div className="grid grid-cols-3 gap-3 max-h-100 overflow-y-auto">
                        {trophyItems.map((item) => (
                            <div key={item.id} className="bg-purple-500 rounded-lg p-4 text-white flex flex-col items-center text-center">
                                {/* Trophy Icon */}
                                <div className="w-12 h-12 flex items-center justify-center mb-3">
                                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                                    </svg>
                                </div>
                                
                                {/* Achievement Title */}
                                <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                                <p className="font-bold text-xs mb-2">{item.subtitle}</p>
                                
                                {/* Date */}
                                <p className="font-bold text-xs mb-2">{item.date}</p>
                                
                                {/* Description */}
                                <p className="text-xs opacity-90">{item.description1}</p>
                                <p className="text-xs opacity-90">{item.description2}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certificates Section */}
                <div className="bg-blue-400 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-white font-bold uppercase">CETIFICATES</h2>
                        <button className="bg-blue-500 text-white w-8 h-8 rounded flex items-center justify-center hover:bg-blue-600 transition-colors">
                            <span className="text-sm">+</span>
                        </button>
                    </div>
                    

                    {/* Certificate Cards */}
                    <div className="grid grid-cols-3 gap-3 max-h-111 overflow-y-auto">
                        {certificateItems.map((item) => (
                            <div key={item.id} className="bg-orange-500 rounded-lg p-4 text-white flex flex-col items-center text-center">
                                {/* Certificate Icon */}
                                <div className="w-12 h-12 flex items-center justify-center mb-3">
                                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                                    </svg>
                                </div>
                                
                                {/* Achievement Title */}
                                <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                                <p className="font-bold text-xs mb-2">{item.subtitle}</p>
                                
                                {/* Date */}
                                <p className="font-bold text-xs mb-2">{item.date}</p>
                                
                                {/* Description */}
                                <p className="text-xs opacity-90">{item.description1}</p>
                                <p className="text-xs opacity-90">{item.description2}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
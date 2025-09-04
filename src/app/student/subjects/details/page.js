'use client';

import { useState } from 'react';

export default function SubjectDetails() {
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [selectedArea, setSelectedArea] = useState('');
    const [selectedEquipment, setSelectedEquipment] = useState('');
    const [message, setMessage] = useState('');
    const [textAlignment, setTextAlignment] = useState('left');
    const [textFormat, setTextFormat] = useState({ bold: false, italic: false, underline: false, strikethrough: false });

    const objectives = [
        { id: 1, text: "Listen and respond appropriately to adults and their peers Listen and respond appropriately to adults and their peers", status: 'completed' },
        { id: 2, text: "Listen and respond appropriately to adults and their peers Listen and respond appropriately to adults and their peers", status: 'active' },
        { id: 3, text: "Listen and respond appropriately to adults and their peers Listen and respond appropriately to adults and their peers", status: 'pending' },
        { id: 4, text: "Listen and respond appropriately to adults and their peers Listen and respond appropriately to adults and their peers", status: 'pending' },
        { id: 5, text: "Listen and respond appropriately to adults and their peers Listen and respond appropriately to adults and their peers", status: 'pending' }
    ];

    const getObjectiveStyle = (status) => {
        switch (status) {
            case 'completed':
                return 'bg-green-100 border-green-300';
            case 'active':
                return 'bg-white border-gray-300';
            case 'pending':
                return 'bg-gray-100 border-gray-200';
            default:
                return 'bg-gray-100 border-gray-200';
        }
    };

    const getObjectiveIcon = (status) => {
        switch (status) {
            case 'completed':
                return (
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">88</div>
                        <div className="text-green-500 mt-1">✓</div>
                    </div>
                );
            default:
                return (
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-sm font-bold">88</div>
                        <div className="text-gray-400 mt-1">□</div>
                    </div>
                );
        }
    };

    return (
        <div className=" bg-gray-50 overflow-hidden flex flex-col">
           

            {/* Top Shadow View */}
            <div className="w-[calc(100%-2rem)] h-33 bg-white shadow-lg border-b border-gray-200 mx-4 mt-4 rounded-lg">
                <div className="h-full flex">
                    {/* First Section - 1/3 width */}
                    <div className="w-2/3 flex flex-col p-4">
                        {/* Top Row - Labels */}
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">English</span>
                            <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">Spoken Language</span>
                        </div>
                        
                        {/* Title */}
                        <h1 className="text-lg font-bold text-gray-800 mb-3 leading-tight">
                            Mission Extremely Long Title One Mission Title Mission Extremely Long Title One Mission Title O...
                        </h1>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{width: '65%'}}></div>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">65% Complete</div>
                    </div>
                    
                    {/* Second Section - 2/3 width */}
                    <div className="w-1/3 flex items-center justify-center p-4">
                        <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                            <span className="text-gray-500 text-lg">Image Placeholder</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1  mx-auto px-4 py-6 overflow-hidden ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 h-full ">
                    {/* Left Column - Instructions */}
                    <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 overflow-hidden w-full">
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Instructions</h2>
                        <div className="text-gray-700 space-y-4 overflow-y-auto max-h-100">
                            <p className="text-sm lg:text-base">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <p className="text-sm lg:text-base">
                                It has survived not only five centuries, but also the leap into electronic typesetting, 
                                remaining essentially unchanged. It was popularised in the 1960s with the release of 
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                                software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>

                    {/* Middle Column - Objectives */}
                    <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 overflow-hidden w-full">
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Objectives</h2>
                        <div className="space-y-3 overflow-y-auto max-h-102">
                            {objectives.map((objective) => (
                                <div
                                    key={objective.id}
                                    className={`p-3 lg:p-4 rounded-lg border ${getObjectiveStyle(objective.status)}`}
                                >
                                    <div className="flex items-start gap-2 lg:gap-3">
                                        {getObjectiveIcon(objective.status)}
                                        <p className="text-xs lg:text-sm text-gray-700 flex-1 break-words">
                                            {objective.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Response Area */}
                    <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 overflow-hidden w-full">
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Response</h2>
                        
                        {/* Dropdown Menus */}
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4">
                            <select
                                value={selectedArea}
                                onChange={(e) => setSelectedArea(e.target.value)}
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                            >
                                <option value="">Area</option>
                                <option value="area1">Area 1</option>
                                <option value="area2">Area 2</option>
                            </select>
                            <select
                                value={selectedEquipment}
                                onChange={(e) => setSelectedEquipment(e.target.value)}
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                            >
                                <option value="">Equipment</option>
                                <option value="equipment1">Equipment 1</option>
                                <option value="equipment2">Equipment 2</option>
                            </select>
                        </div>

                        {/* Text Editor */}
                        <div className="mb-4">
                            {/* Toolbar */}
                            <div className="flex items-center gap-1 lg:gap-2 mb-2 p-2 bg-gray-50 rounded-t-md border border-gray-300 overflow-hidden">
                                <button
                                    onClick={() => setTextFormat({...textFormat, bold: !textFormat.bold})}
                                    className={`px-1 lg:px-2 py-1 rounded ${textFormat.bold ? 'bg-gray-300' : 'bg-white'} border text-xs lg:text-sm flex-shrink-0`}
                                >
                                    B
                                </button>
                                <button
                                    onClick={() => setTextFormat({...textFormat, italic: !textFormat.italic})}
                                    className={`px-1 lg:px-2 py-1 rounded ${textFormat.italic ? 'bg-gray-300' : 'bg-white'} border text-xs lg:text-sm flex-shrink-0`}
                                >
                                    I
                                </button>
                                <button
                                    onClick={() => setTextFormat({...textFormat, underline: !textFormat.underline})}
                                    className={`px-1 lg:px-2 py-1 rounded ${textFormat.underline ? 'bg-gray-300' : 'bg-white'} border text-xs lg:text-sm flex-shrink-0`}
                                >
                                    U
                                </button>
                                <button
                                    onClick={() => setTextFormat({...textFormat, strikethrough: !textFormat.strikethrough})}
                                    className={`px-1 lg:px-2 py-1 rounded ${textFormat.strikethrough ? 'bg-gray-300' : 'bg-white'} border text-xs lg:text-sm flex-shrink-0`}
                                >
                                    S
                                </button>
                                <div className="border-l border-gray-300 h-6 mx-1 lg:mx-2 flex-shrink-0"></div>
                                <button
                                    onClick={() => setTextAlignment('left')}
                                    className={`px-1 lg:px-2 py-1 rounded ${textAlignment === 'left' ? 'bg-gray-300' : 'bg-white'} border text-xs lg:text-sm flex-shrink-0`}
                                >
                                    ⬅
                                </button>
                                <button
                                    onClick={() => setTextAlignment('center')}
                                    className={`px-1 lg:px-2 py-1 rounded ${textAlignment === 'center' ? 'bg-gray-300' : 'bg-white'} border text-xs lg:text-sm flex-shrink-0`}
                                >
                                    ⬆
                                </button>
                                <button
                                    onClick={() => setTextAlignment('right')}
                                    className={`px-1 lg:px-2 py-1 rounded ${textAlignment === 'right' ? 'bg-gray-300' : 'bg-white'} border text-xs lg:text-sm flex-shrink-0`}
                                >
                                    ➡
                                </button>
                            </div>
                            
                            {/* Text Input */}
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Type your message"
                                className="w-full h-24 lg:h-32 p-3 border border-gray-300 rounded-b-md focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none text-sm"
                                style={{
                                    textAlign: textAlignment,
                                    fontWeight: textFormat.bold ? 'bold' : 'normal',
                                    fontStyle: textFormat.italic ? 'italic' : 'normal',
                                    textDecoration: textFormat.underline ? 'underline' : 'none',
                                    textDecorationLine: textFormat.strikethrough ? 'line-through' : 'none'
                                }}
                            />
                        </div>

                        {/* File Upload Buttons */}
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4">
                            <button className="flex-1 px-3 lg:px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors text-sm">
                                Upload File
                            </button>
                            <button className="flex-1 px-3 lg:px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors text-sm">
                                Take Photo
                            </button>
                        </div>

                        {/* Attached Files */}
                        <div className="flex gap-1 lg:gap-2 mb-4 flex-wrap">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="w-8 h-8 lg:w-12 lg:h-12 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 text-xs font-bold">
                                    IMG
                                </div>
                            ))}
                            {[...Array(2)].map((_, i) => (
                                <div key={i+4} className="w-8 h-8 lg:w-12 lg:h-12 bg-gray-100 rounded-md flex items-center justify-center text-gray-600 text-xs font-bold">
                                    DOC
                                </div>
                            ))}
                        </div>

                        {/* Bottom Buttons */}
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                            <button className="px-3 lg:px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 text-sm">
                                😊 How are you Feeling Now?
                            </button>
                            <button className="flex-1 px-4 lg:px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors font-medium text-sm">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
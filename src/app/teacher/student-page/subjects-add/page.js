'use client';

import { useState } from 'react';

export default function SubjectsAdd() {
    const [instructions, setInstructions] = useState([
        {
            id: 1,
            area: 'Area 1',
            duration: '',
            equipment: 'Equipment Item 1',
            startTime: '13:50',
            startDate: '12/12/2025',
            software: 'Software Item 1',
            endTime: '13:50',
            endDate: '12/12/2025'
        }
    ]);

    const [uploadedImages, setUploadedImages] = useState([null, null, 'filled', 'filled']);

    const addInstruction = () => {
        const newInstruction = {
            id: instructions.length + 1,
            area: '',
            duration: '',
            equipment: '',
            startTime: '',
            startDate: '',
            software: '',
            endTime: '',
            endDate: ''
        };
        setInstructions([...instructions, newInstruction]);
        
        // Scroll to the newly added instruction after a short delay
        setTimeout(() => {
            const newInstructionElement = document.getElementById(`instruction-${newInstruction.id}`);
            if (newInstructionElement) {
                newInstructionElement.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
            }
        }, 100);
    };

    const removeImage = (index) => {
        const newImages = [...uploadedImages];
        newImages[index] = null;
        setUploadedImages(newImages);
    };

    const removeInstruction = (instructionId) => {
        setInstructions(instructions.filter(instruction => instruction.id !== instructionId));
    };

    return (
        <div className="p-6 bg-gray-100 h-full overflow-y-auto">
            {/* Header */}
            <div className="bg-blue-400 text-white text-center py-4 rounded-t-lg mb-6">
                <h1 className="text-2xl font-bold">Create a New Mission</h1>
            </div>

            {/* Top Form Section - Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Left Column */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                        <div className="relative">
                            <input 
                                type="text" 
                                defaultValue="12/12/2025"
                                className="w-full px-3 py-2 bg-gray-200 text-gray-800 rounded border-0 focus:ring-2 focus:ring-blue-500"
                            />
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Main Keystage</label>
                        <div className="relative">
                            <input 
                                type="text" 
                                defaultValue="KS1"
                                className="w-full px-3 py-2 bg-gray-200 text-gray-800 rounded border-0 focus:ring-2 focus:ring-blue-500"
                            />
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Keystage Level</label>
                        <div className="relative">
                            <input 
                                type="text" 
                                defaultValue="1"
                                className="w-full px-3 py-2 bg-gray-200 text-gray-800 rounded border-0 focus:ring-2 focus:ring-blue-500"
                            />
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                        <div className="relative">
                            <input 
                                type="text" 
                                defaultValue="English"
                                className="w-full px-3 py-2 bg-gray-200 text-gray-800 rounded border-0 focus:ring-2 focus:ring-blue-500"
                            />
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Sub Subject</label>
                        <div className="relative">
                            <input 
                                type="text" 
                                defaultValue="Spoken language"
                                className="w-full px-3 py-2 bg-gray-200 text-gray-800 rounded border-0 focus:ring-2 focus:ring-blue-500"
                            />
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Cycle</label>
                        <div className="relative">
                            <input 
                                type="text" 
                                defaultValue="2 Weeks"
                                className="w-full px-3 py-2 bg-gray-200 text-gray-800 rounded border-0 focus:ring-2 focus:ring-blue-500"
                            />
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Area</label>
                        <div className="relative">
                            <input 
                                type="text" 
                                defaultValue="Area 1"
                                className="w-full px-3 py-2 bg-gray-200 text-gray-800 rounded border-0 focus:ring-2 focus:ring-blue-500"
                            />
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Equipment</label>
                        <div className="relative">
                            <input 
                                type="text" 
                                defaultValue="Equipment Item 1"
                                className="w-full px-3 py-2 bg-gray-200 text-gray-800 rounded border-0 focus:ring-2 focus:ring-blue-500"
                            />
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Software</label>
                        <div className="relative">
                            <input 
                                type="text" 
                                defaultValue="Software 1"
                                className="w-full px-3 py-2 bg-gray-200 text-gray-800 rounded border-0 focus:ring-2 focus:ring-blue-500"
                            />
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Title Section */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input 
                    type="text" 
                    defaultValue="Mission Extremely Long Title One Mission Title Mission Extremely Long Title One Mission Title O..."
                    className="w-full px-3 py-2 bg-gray-200 text-gray-800 rounded border-0 focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Objective Section */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Objective</label>
                <textarea 
                    rows={6}
                    defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    className="w-full px-3 py-2 bg-gray-200 text-gray-800 rounded border-0 focus:ring-2 focus:ring-blue-500 resize-none"
                />
            </div>

            {/* Instructions Section */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-4">Instructions</label>
                <div className="space-y-4">
                    {instructions.map((instruction, index) => (
                        <div key={instruction.id} id={`instruction-${instruction.id}`} className="bg-white p-4 rounded-lg border relative">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center">
                                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                                        <span className="text-xs font-bold text-gray-700">{index + 1}</span>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
                                    </p>
                                </div>
                                <button 
                                    onClick={() => removeInstruction(instruction.id)}
                                    className="w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors"
                                    title="Remove Instruction"
                                >
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1">Area</label>
                                    <div className="relative">
                                        <input 
                                            type="text" 
                                            defaultValue={instruction.area}
                                            className="w-full px-2 py-1 bg-gray-200 text-gray-800 rounded text-sm border-0 focus:ring-2 focus:ring-blue-500"
                                        />
                                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                            <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1">Duration</label>
                                    <div className="relative">
                                        <input 
                                            type="text" 
                                            defaultValue={instruction.duration}
                                            className="w-full px-2 py-1 bg-gray-200 text-gray-800 rounded text-sm border-0 focus:ring-2 focus:ring-blue-500"
                                        />
                                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                            <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1">Equipment</label>
                                    <div className="relative">
                                        <input 
                                            type="text" 
                                            defaultValue={instruction.equipment}
                                            className="w-full px-2 py-1 bg-gray-200 text-gray-800 rounded text-sm border-0 focus:ring-2 focus:ring-blue-500"
                                        />
                                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                            <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1">Start Time</label>
                                    <div className="relative">
                                        <input 
                                            type="text" 
                                            defaultValue={instruction.startTime}
                                            className="w-full px-2 py-1 bg-gray-200 text-gray-800 rounded text-sm border-0 focus:ring-2 focus:ring-blue-500"
                                        />
                                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                            <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1">Date</label>
                                    <div className="relative">
                                        <input 
                                            type="text" 
                                            defaultValue={instruction.startDate}
                                            className="w-full px-2 py-1 bg-gray-200 text-gray-800 rounded text-sm border-0 focus:ring-2 focus:ring-blue-500"
                                        />
                                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                            <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1">Software</label>
                                    <div className="relative">
                                        <input 
                                            type="text" 
                                            defaultValue={instruction.software}
                                            className="w-full px-2 py-1 bg-gray-200 text-gray-800 rounded text-sm border-0 focus:ring-2 focus:ring-blue-500"
                                        />
                                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                            <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1">End Time</label>
                                    <div className="relative">
                                        <input 
                                            type="text" 
                                            defaultValue={instruction.endTime}
                                            className="w-full px-2 py-1 bg-gray-200 text-gray-800 rounded text-sm border-0 focus:ring-2 focus:ring-blue-500"
                                        />
                                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                            <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1">Date</label>
                                    <div className="relative">
                                        <input 
                                            type="text" 
                                            defaultValue={instruction.endDate}
                                            className="w-full px-2 py-1 bg-gray-200 text-gray-800 rounded text-sm border-0 focus:ring-2 focus:ring-blue-500"
                                        />
                                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                            <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Add Instruction Button */}
                <button 
                    onClick={addInstruction}
                    className="w-12 h-12 bg-gray-600 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors mt-4"
                >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </button>
            </div>

            {/* Upload Images Section */}
            <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">Upload Images</label>
                <div className="flex items-center space-x-4">
                    <button className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded flex items-center space-x-2 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <span>Upload</span>
                    </button>
                    
                    <div className="flex space-x-2">
                        {uploadedImages.map((image, index) => (
                            <div key={index} className="w-16 h-16 bg-gray-300 rounded border-2 border-dashed border-gray-400 flex items-center justify-center">
                                {image === 'filled' ? (
                                    <button 
                                        onClick={() => removeImage(index)}
                                        className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center hover:bg-gray-700"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                ) : (
                                    <div className="text-gray-500 text-xs">Empty</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
                <button className="px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white font-bold uppercase rounded transition-colors">
                    Submit
                </button>
            </div>
        </div>
    );
}
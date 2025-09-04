"use client";
import { useState, useRef } from 'react';

export default function Gallery() {
    const images = Array.from({ length: 24 });
    const folders = [
        "Folder Title Number One and one",
        "Folder Title Number One and one",
        "Folder Title Number One and one",
        "Folder Title Number One and one",
        "Folder Title Number One and one",
        "Folder Title Number One and one",
        "Folder Title Number One and one",
        "Folder Title Number One and one",
        "Folder Title Number One and one",
        "Folder Title Number One and one",
        "Folder Title Number One and one",
        "Folder Title Number One and one",
        "Folder Title Number One and one",
        "Folder Title Number One and one",
        "Folder Title Number One and one",
        "Folder Title Number One and one",
    ];
    
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [selectedFolder, setSelectedFolder] = useState(0); // Default to first item
    const [selectedImages, setSelectedImages] = useState(new Set()); // Multi-selection for images
    const [isSelectionMode, setIsSelectionMode] = useState(false); // Selection mode state
    const [selectedImageIndex, setSelectedImageIndex] = useState(null); // For popup modal
    const [showShareModal, setShowShareModal] = useState(false); // For share modal
    const [showAddPhotoModal, setShowAddPhotoModal] = useState(false); // For add photo modal

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
            updateScrollButtons();
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
            updateScrollButtons();
        }
    };

    const updateScrollButtons = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    const handleFolderClick = (index) => {
        setSelectedFolder(index);
    };

    const handleImageClick = (index) => {
        if (isSelectionMode) {
            setSelectedImages(prev => {
                const newSet = new Set(prev);
                if (newSet.has(index)) {
                    newSet.delete(index);
                } else {
                    newSet.add(index);
                }
                return newSet;
            });
        } else {
            setSelectedImageIndex(index);
        }
    };

    const toggleSelectionMode = () => {
        setIsSelectionMode(!isSelectionMode);
        if (isSelectionMode) {
            setSelectedImages(new Set()); // Clear selections when exiting mode
        }
    };

    const clearSelections = () => {
        setSelectedImages(new Set());
        setIsSelectionMode(false); // Exit selection mode when clearing
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
    };

    const openShareModal = () => {
        setShowShareModal(true);
    };

    const closeShareModal = () => {
        setShowShareModal(false);
    };

    const openAddPhotoModal = () => {
        setShowAddPhotoModal(true);
    };

    const closeAddPhotoModal = () => {
        setShowAddPhotoModal(false);
    };

    const handleShare = (type, profile) => {
        console.log(`Sharing ${selectedImages.size} images to ${type}: ${profile}`);
        closeShareModal();
        setSelectedImages(new Set()); // Clear grid selections after sharing
        setIsSelectionMode(false); // Exit selection mode after sharing
    };

    const handleFileUpload = (event) => {
        const files = event.target.files;
        console.log('Files selected:', files);
        // Here you would implement the actual file upload logic
    };

    return (
        <div className="p-6 bg-gray-100 h-full overflow-hidden relative">
            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
            
            {/* Image Modal Popup */}
            {selectedImageIndex !== null && (
                <div className="fixed inset-0 bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="relative w-full max-w-6xl h-[90vh] bg-white rounded-lg shadow-2xl">
                        {/* Close Button */}
                        <button 
                            onClick={closeModal}
                            className="absolute top-6 right-6 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-75 transition-colors z-10"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        
                        {/* Image Container */}
                        <div className="p-12 h-full flex items-center justify-center">
                            <div className={`w-full h-full rounded-lg flex items-center justify-center text-white text-4xl font-bold ${
                                selectedImageIndex % 2 === 0 ? "bg-gray-500" : "bg-gray-300"
                            }`}>
                                <span>Image {selectedImageIndex + 1}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Share Modal Popup */}
            {showShareModal && (
                <div className="fixed inset-0  bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl">
                        {/* Close Button */}
                        <button 
                            onClick={closeShareModal}
                            className="absolute top-4 right-4 w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors z-10"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        
                        {/* Share Modal Content */}
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Share to</h2>
                            
                            {/* Parents Section */}
                            <div className="mb-8">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    Parents
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <button 
                                        onClick={() => handleShare('parent', 'mother')}
                                        className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <div className="text-left">
                                            <p className="font-medium text-gray-900">Mother</p>
                                            <p className="text-sm text-gray-500">Sarah Johnson</p>
                                        </div>
                                    </button>
                                    <button 
                                        onClick={() => handleShare('parent', 'father')}
                                        className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <div className="text-left">
                                            <p className="font-medium text-gray-900">Father</p>
                                            <p className="text-sm text-gray-500">Michael Johnson</p>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            {/* Students Section */}
        <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                    Students
                                </h3>
                                <div className="grid grid-cols-2 gap-4 max-h-48 overflow-y-auto">
                                    {[
                                        { name: "Emma Wilson", grade: "Grade 10" },
                                        { name: "Alex Chen", grade: "Grade 11" },
                                        { name: "Maya Patel", grade: "Grade 9" },
                                        { name: "Jake Rodriguez", grade: "Grade 12" },
                                        { name: "Sophie Kim", grade: "Grade 10" },
                                        { name: "David Thompson", grade: "Grade 11" }
                                    ].map((student, index) => (
                                        <button 
                                            key={index}
                                            onClick={() => handleShare('student', student.name)}
                                            className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                                        >
                                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </div>
                                            <div className="text-left">
                                                <p className="font-medium text-gray-900">{student.name}</p>
                                                <p className="text-sm text-gray-500">{student.grade}</p>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Add Photo Modal Popup */}
            {showAddPhotoModal && (
                <div className="fixed inset-0 bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl">
                        {/* Close Button */}
                        <button 
                            onClick={closeAddPhotoModal}
                            className="absolute top-4 right-4 w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors z-10"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        
                        {/* Add Photo Modal Content */}
                        <div className="p-8">
                            {/* Main Upload Section */}
                            <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-12 mb-8 text-center">
                                <div className="mb-4">
                                    <svg className="w-16 h-16 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">Click to upload File</h3>
                                <p className="text-sm text-gray-500 mb-6">Max. File Size: 30MB</p>
                                <label className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    Browse file
                                    <input 
                                        type="file" 
                                        multiple 
                                        accept="image/*" 
                                        className="hidden" 
                                        onChange={handleFileUpload}
                                    />
                                </label>
                            </div>

                            {/* Image Carousel */}
                            <div className="mb-8">
                                <div className="flex items-center gap-4">
                                    <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    
                                    <div className="flex gap-4 flex-1 overflow-x-auto scrollbar-hide">
                                        {Array.from({ length: 6 }).map((_, index) => (
                                            <div key={index} className="flex-shrink-0">
                                                <div className="w-24 h-24 bg-gray-800 rounded-lg flex items-center justify-center mb-2">
                                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <p className="text-xs text-gray-600 text-center">Image Name</p>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex justify-between items-center">
                                <button className="bg-blue-100 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-200 transition-colors flex items-center gap-2">
                                    <span>How are you Feeling Now?</span>
                                    <span className="text-lg">😊</span>
                                </button>
                                <button 
                                    onClick={closeAddPhotoModal}
                                    className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
                                >
                                    Finish
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
            {/* Floating Select Button */}
            <div className="absolute top-8 right-8 z-10">
                {!isSelectionMode ? (
                    <button 
                        onClick={toggleSelectionMode}
                        className="bg-blue-500 text-white rounded-full px-6 py-3 shadow-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <span className="font-medium">Select</span>
                    </button>
                ) : (
                    <div className="flex gap-2">
                        <button 
                            onClick={clearSelections}
                            className="bg-red-500 text-white rounded-full px-4 py-3 shadow-lg hover:bg-red-600 transition-colors flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <span className="font-medium">Clear</span>
                        </button>
                        <div className="bg-blue-500 text-white rounded-full px-4 py-3 shadow-lg flex items-center gap-2">
                            <span className="font-medium">{selectedImages.size}</span>
                            <span className="text-sm">selected</span>
                        </div>
                    </div>
                )}
            </div>
            
            {/* Top Grid - 8/10 */}
            <div className="bg-white rounded-lg shadow-lg p-3 h-8/10">
                <div className="grid grid-cols-6 gap-2 h-full overflow-y-auto scrollbar-hide p-2">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`${index % 2 === 0 ? "bg-gray-500" : "bg-gray-300"} rounded flex items-center justify-center aspect-square transition-all duration-200 relative ${
                                isSelectionMode ? 'cursor-pointer hover:scale-105' : 'cursor-pointer hover:scale-105'
                            } ${
                                selectedImages.has(index) ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                            }`}
                            onClick={() => handleImageClick(index)}
                        >
                            <span className="font-medium text-gray-900 text-xs">Image</span>
                            {selectedImages.has(index) && (
                                <div className="absolute top-1 right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Bar - 2/10 */}
            <div className="bg-gray-200 rounded-lg shadow-lg p-3 h-2/10 mt-3 flex items-center">
                {/* Left Arrow */}
                <button 
                    className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 transition-colors ${
                        canScrollLeft ? 'bg-gray-300 hover:bg-gray-400' : 'bg-gray-200 text-gray-400'
                    }`}
                    onClick={scrollLeft}
                    disabled={!canScrollLeft}
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Folder carousel (scrollable) */}
                <div 
                    ref={scrollContainerRef}
                    className="flex items-end gap-4 flex-1 overflow-x-auto scrollbar-hide py-2"
                    onScroll={updateScrollButtons}
                >
                    {folders.map((title, idx) => (
                        <div 
                            key={idx} 
                            className={`flex flex-col items-center flex-shrink-0 cursor-pointer transition-all duration-200 hover:scale-105 ${
                                selectedFolder === idx ? 'transform scale-105' : ''
                            }`}
                            onClick={() => handleFolderClick(idx)}
                        >
                            <div className={`w-20 h-16 border-2 rounded-xl flex items-center justify-center mb-1 transition-colors hover:shadow-md ${
                                selectedFolder === idx 
                                    ? 'border-blue-500 bg-blue-50 hover:bg-blue-100' 
                                    : 'border-gray-500 hover:border-gray-600 hover:bg-gray-50'
                            }`}>
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-colors ${
                                    selectedFolder === idx 
                                        ? 'bg-blue-200 border-blue-400 hover:bg-blue-300' 
                                        : 'bg-gray-200 border-gray-400 hover:bg-gray-300 hover:border-gray-500'
                                }`}>
                                    <svg className={`w-4 h-4 transition-colors ${
                                        selectedFolder === idx 
                                            ? 'text-blue-600' 
                                            : 'text-gray-700 hover:text-gray-900'
                                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h4l2-2h4l2 2h4a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2V9a2 2 0 012-2z" />
                                    </svg>
                                </div>
                            </div>
                            <div className={`text-center text-xs leading-tight w-28 transition-colors ${
                                selectedFolder === idx 
                                    ? 'text-blue-600 font-medium' 
                                    : 'text-gray-800 hover:text-gray-900'
                            }`}>
                                {title}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button 
                    className={`w-8 h-8 rounded-full flex items-center justify-center ml-3 transition-colors ${
                        canScrollRight ? 'bg-gray-300 hover:bg-gray-400' : 'bg-gray-200 text-gray-400'
                    }`}
                    onClick={scrollRight}
                    disabled={!canScrollRight}
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Actions */}
                <div className="ml-auto flex flex-col gap-2 pl-10">
                    <div className="flex gap-2">
                        <button 
                            onClick={openAddPhotoModal}
                            className="bg-white text-gray-900 border border-gray-300 rounded-lg px-4 py-2 flex items-center gap-2 shadow text-sm hover:bg-gray-50 transition-colors"
                        >
                            <span>ADD Photos</span>
                            <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                            </svg>
                        </button>
                        <button 
                            onClick={openShareModal}
                            className={`rounded-lg px-4 py-2 flex items-center gap-2 shadow text-sm transition-colors ${
                                selectedImages.size > 0 
                                    ? 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50' 
                                    : 'bg-gray-200 text-gray-400 border border-gray-200 cursor-not-allowed'
                            }`}
                            disabled={selectedImages.size === 0}
                        >
                            <span>Share to</span>
                            <svg className={`w-5 h-5 ${
                                selectedImages.size > 0 ? 'text-gray-800' : 'text-gray-400'
                            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                            </svg>
                        </button>
                    </div>
                    <button className="bg-blue-400 text-white rounded-lg px-4 py-2 flex items-center gap-2 text-sm">
                        <span>How are you</span>
                        <span className="font-semibold">Feeling Now?</span>
                        <span className="text-lg">😊</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
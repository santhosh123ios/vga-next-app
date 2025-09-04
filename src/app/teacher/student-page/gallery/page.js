'use client';

import { useState } from 'react';

export default function GalleryPage() {
    
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Photos', color: 'bg-blue-100' },
        { id: 'events', name: 'Events', color: 'bg-green-100' },
        { id: 'activities', name: 'Activities', color: 'bg-purple-100' },
        { id: 'students', name: 'Students', color: 'bg-yellow-100' },
        { id: 'projects', name: 'Projects', color: 'bg-red-100' }
    ];

    // Image share requests
    const shareRequests = [
        {
            id: 1,
            studentName: 'Sarah Johnson',
            studentId: 'ST001',
            imageCount: 5,
            date: '2025-01-15',
            status: 'pending',
            category: 'Science Fair',
            description: 'Photos from the science fair project presentation'
        },
        {
            id: 2,
            studentName: 'Michael Chen',
            studentId: 'ST002',
            imageCount: 3,
            date: '2025-01-14',
            status: 'pending',
            category: 'Math Competition',
            description: 'Competition photos and award ceremony'
        },
        {
            id: 3,
            studentName: 'Emma Davis',
            studentId: 'ST003',
            imageCount: 8,
            date: '2025-01-13',
            status: 'pending',
            category: 'Art Exhibition',
            description: 'Student artwork and creative projects'
        },
        {
            id: 4,
            studentName: 'Alex Rodriguez',
            studentId: 'ST004',
            imageCount: 4,
            date: '2025-01-12',
            status: 'pending',
            category: 'Sports Day',
            description: 'Athletic events and team activities'
        },
        {
            id: 5,
            studentName: 'Sophie Williams',
            studentId: 'ST005',
            imageCount: 6,
            date: '2025-01-11',
            status: 'pending',
            category: 'Coding Workshop',
            description: 'Programming session and project demos'
        }
    ];

    // Gallery images
    const images = [
        {
            id: 1,
            src: '/api/placeholder/300/200',
            alt: 'Science Fair 2025',
            category: 'events',
            date: '2025-01-15',
            description: 'Students presenting their science projects'
        },
        {
            id: 2,
            src: '/api/placeholder/300/200',
            alt: 'Math Competition',
            category: 'activities',
            date: '2025-01-10',
            description: 'Annual mathematics competition winners'
        },
        {
            id: 3,
            src: '/api/placeholder/300/200',
            alt: 'Student Art Exhibition',
            category: 'projects',
            date: '2025-01-08',
            description: 'Creative artwork by talented students'
        },
        {
            id: 4,
            src: '/api/placeholder/300/200',
            alt: 'Sports Day',
            category: 'events',
            date: '2025-01-05',
            description: 'Annual sports day celebration'
        },
        {
            id: 5,
            src: '/api/placeholder/300/200',
            alt: 'Group Study Session',
            category: 'students',
            date: '2025-01-03',
            description: 'Students collaborating on group projects'
        },
        {
            id: 6,
            src: '/api/placeholder/300/200',
            alt: 'Coding Workshop',
            category: 'activities',
            date: '2024-12-28',
            description: 'Programming workshop for beginners'
        },
        {
            id: 7,
            src: '/api/placeholder/300/200',
            alt: 'Literature Club',
            category: 'students',
            date: '2024-12-25',
            description: 'Book discussion and reading sessions'
        },
        {
            id: 8,
            src: '/api/placeholder/300/200',
            alt: 'Science Lab',
            category: 'projects',
            date: '2024-12-20',
            description: 'Laboratory experiments and research'
        }
    ];

    const [selectedRequest, setSelectedRequest] = useState(shareRequests[0]);

    const filteredImages = selectedCategory === 'all' 
        ? images 
        : images.filter(image => image.category === selectedCategory);

    const handleRequestClick = (request) => {
        setSelectedRequest(request);
    };

    const handleAccept = () => {
        // Handle accept logic
        console.log('Accepting request:', selectedRequest);
        setSelectedRequest(null);
    };

    const handleReject = () => {
        // Handle reject logic
        console.log('Rejecting request:', selectedRequest);
        setSelectedRequest(null);
    };

    return (
        <div className="p-6 bg-gray-50 h-[100%]">
            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;  /* Internet Explorer 10+ */
                    scrollbar-width: none;  /* Firefox */
                }
                .scrollbar-hide::-webkit-scrollbar { 
                    display: none;  /* Safari and Chrome */
                }
            `}</style>
            {/* Header */}
            {/* <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-900">Gallery</h1>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        + Upload Photos
                    </button>
                </div>
            </div> */}

            {/* Main Content */}
            <div className="flex gap-6 h-[100%]">
                {/* Left Side - Share Requests */}
                <div className="w-1/3 bg-white rounded-lg shadow-sm">
                    <div className="p-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-800">Share Requests</h2>
                        <p className="text-sm text-gray-600">Pending photo share requests from students</p>
                    </div>
                    <div className="p-4 space-y-3 max-h-[85%] overflow-y-auto scrollbar-hide">
                        {shareRequests.map((request) => (
                            <div
                                key={request.id}
                                onClick={() => handleRequestClick(request)}
                                className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                                    selectedRequest?.id === request.id
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-gray-200 hover:bg-gray-50'
                                }`}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-medium text-gray-800">{request.studentName}</h3>
                                    <span className="text-xs text-gray-500">{request.studentId}</span>
                                </div>
                                <p className="text-sm text-gray-600 mb-2">{request.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-500">
                                        {request.imageCount} photos • {new Date(request.date).toLocaleDateString()}
                                    </span>
                                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                                        Pending
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side - Image Grid */}
                <div className="h-[96.5%] w-2/3">

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[75%]">
                        {filteredImages.map((image) => (
                            <div
                                key={image.id}
                                className="bg-white rounded-lg shadow-sm overflow-hidden"
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="w-full h-full bg-gray-300 flex items-center justify-center hidden">
                                    <span className="text-gray-500 text-sm">Image</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Accept/Reject Buttons */}
                    {selectedRequest && (
                        <div className="mt-6 bg-white rounded-lg shadow-sm p-4 h-[25%]">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-gray-800">
                                    Review Request from {selectedRequest.studentName}
                                </h3>
                                <span className="text-sm text-gray-500">{selectedRequest.studentId}</span>
                            </div>
                            <p className="text-gray-600 mb-4">{selectedRequest.description}</p>
                            <div className="flex space-x-4">
                                <button
                                    onClick={handleAccept}
                                    className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium"
                                >
                                    Accept Request
                                </button>
                                <button
                                    onClick={handleReject}
                                    className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors font-medium"
                                >
                                    Reject Request
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
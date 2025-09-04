'use client';

import { useState } from 'react';

export default function AttendancePage() {
    const [currentDate, setCurrentDate] = useState(new Date(2025, 11, 1)); // December 2025
    const [selectedDate, setSelectedDate] = useState(null);
    const [showEventPopup, setShowEventPopup] = useState(false);

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const dayNames = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

    const navigateMonth = (direction) => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1));
    };

    const generateCalendarDays = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - firstDay.getDay() + 1); // Start from Monday

        const days = [];
        const currentDateObj = new Date(startDate);

        while (currentDateObj <= lastDay || days.length < 42) {
            const isCurrentMonth = currentDateObj.getMonth() === month;
            const isToday = currentDateObj.toDateString() === new Date().toDateString();
            const isSelected = selectedDate && currentDateObj.toDateString() === selectedDate.toDateString();
            
            // Highlight dates 1, 2, 8, 14 as leave days (red), others as attendance days (green)
            const day = currentDateObj.getDate();
            const leaveDays = [1, 2, 8, 14];
            const isLeaveDay = leaveDays.includes(day);
            const isHighlighted = (day >= 1 && day <= 31) && !isLeaveDay; // All other days as attendance
            const isSpecial = isLeaveDay;

            days.push({
                date: new Date(currentDateObj),
                day: currentDateObj.getDate(),
                isCurrentMonth,
                isToday,
                isSelected,
                isHighlighted,
                isSpecial
            });

            currentDateObj.setDate(currentDateObj.getDate() + 1);
        }

        return days;
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
        const leaveDays = [1, 2, 8, 14];
        if (leaveDays.includes(date.getDate())) {
            setShowEventPopup(true);
        } else {
            setShowEventPopup(false);
        }
    };

    const calendarDays = generateCalendarDays();

    return (
        <div className="p-6 bg-gray-50 ">
            {/* Header */}
            <div className="bg-[#6C85FF] text-white text-center py-4 rounded-t-lg mb-6">
                <h1 className="text-2xl font-bold">CALENDAR</h1>
            </div>

            {/* Calendar Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
                {/* Calendar Navigation */}
                <div className="flex items-center justify-between mb-6">
                    <button 
                        onClick={() => navigateMonth(-1)}
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    
                    <h2 className="text-xl font-semibold text-gray-800">
                        {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                    </h2>
                    
                    <button 
                        onClick={() => navigateMonth(1)}
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Days of Week */}
                <div className="grid grid-cols-7 gap-1 mb-4">
                    {dayNames.map((day) => (
                        <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
                            {day}
                        </div>
                    ))}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 relative">
                    {calendarDays.map((day, index) => (
                        <div key={index} className="relative">
                            <button
                                onClick={() => handleDateClick(day.date)}
                                className={`w-full h-12 rounded-lg text-sm font-medium transition-colors ${
                                    !day.isCurrentMonth 
                                        ? 'text-gray-300' 
                                        : day.isSpecial
                                        ? 'bg-red-500 text-white'
                                        : day.isHighlighted
                                        ? 'bg-green-100 text-green-800 border border-green-300'
                                        : 'text-gray-800 hover:bg-gray-100'
                                }`}
                            >
                                {day.day}
                            </button>
                            
                            {/* Event Popup for Leave Days */}
                            {day.isSpecial && showEventPopup && (
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-10">
                                    <div className="bg-red-500 text-white p-3 rounded-lg shadow-lg">
                                        <div className="text-sm font-bold mb-1">Sick Day</div>
                                        <div className="text-xs mb-1">22/11/2025</div>
                                        <div className="text-xs">Short Description about the event and what is it about</div>
                                        {/* Triangle pointer */}
                                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-red-500"></div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4 mt-8">
                <button className="bg-[#6C85FF] hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors">
                    <span>New Task</span>
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </div>
                </button>
                
                <button className="bg-[#6C85FF] hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors">
                    <span>Add Sick Leave</span>
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    );
}
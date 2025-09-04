'use client';

import { useState } from 'react';

export default function CalendarPage() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date(2025, 11, 1)); // December 1, 2025

    // Get current month and year
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Get first day of month and number of days
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const startingDayOfWeek = firstDayOfMonth.getDay();

    // Month names
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Day names - matching the image (Mo, Tu, We, Th, Fr, Sa, Su)
    const dayNames = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

    // Sample events data
    const events = [
        { date: '2025-12-19', title: 'Special Event', type: 'event' }
    ];

    const getEventForDate = (date) => {
        const dateString = date.toISOString().split('T')[0];
        return events.find(event => event.date === dateString);
    };

    const navigateMonth = (direction) => {
        setCurrentDate(new Date(currentYear, currentMonth + direction, 1));
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    // Generate calendar grid
    const generateCalendarDays = () => {
        const days = [];
        
        // Get previous month's last days to fill the grid
        const prevMonth = new Date(currentYear, currentMonth, 0);
        const prevMonthDays = prevMonth.getDate();
        
        // Add days from previous month
        for (let i = 0; i < startingDayOfWeek; i++) {
            const prevDay = prevMonthDays - startingDayOfWeek + i + 1;
            days.push(
                <div key={`prev-${prevDay}`} className="h-16 border border-gray-200 p-2 text-gray-400">
                    <span className="text-sm">{prevDay}</span>
                </div>
            );
        }

        // Add days of the current month
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(currentYear, currentMonth, day);
            const event = getEventForDate(date);
            const isToday = date.toDateString() === new Date().toDateString();
            const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
            const isSpecialDate = day === 8; // December 19th special highlighting

            let cellClasses = "h-16 border border-gray-200 p-2 cursor-pointer hover:bg-gray-50 transition-colors";
            let textClasses = "text-sm font-medium";

            if (isSelected) {
                cellClasses += " border-green-500 bg-green-50";
                textClasses += " text-black";
            } else if (isSpecialDate) {
                cellClasses += " bg-red-500";
                textClasses += " text-white";
            } else if (isToday) {
                cellClasses += " bg-blue-50 border-blue-300";
                textClasses += " text-blue-600";
            } else {
                textClasses += " text-gray-700";
            }

            days.push(
                <div
                    key={day}
                    onClick={() => handleDateClick(date)}
                    className={cellClasses}
                >
                    <span className={textClasses}>{day}</span>
                </div>
            );
        }

        // Add days from next month to complete the grid
        const remainingCells = 42 - days.length; // 6 rows * 7 days = 42 total cells
        for (let day = 1; day <= remainingCells; day++) {
            days.push(
                <div key={`next-${day}`} className="h-16 border border-gray-200 p-2 text-gray-400">
                    <span className="text-sm">{day}</span>
                </div>
            );
        }

        return days;
    };

    return (
        <div className="p-6 bg-gray-50">
            {/* Calendar Container */}
            <div className={`bg-white rounded-lg shadow-sm overflow-hidden mx-auto ${
                selectedDate ? 'max-w-6xl' : 'max-w-4xl'
            }`}>
                {/* Purple Header */}
                <div className="bg-[#6C85FF] text-white p-4 text-center">
                    <h1 className="text-xl font-bold uppercase">Calendar</h1>
                </div>

                {/* Month Navigation */}
                <div className="p-4 bg-white border-b">
                    <div className="flex justify-between items-center">
                        <button
                            onClick={() => navigateMonth(-1)}
                            className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <h2 className="text-xl font-semibold text-gray-800">
                            {monthNames[currentMonth]} {currentYear}
                        </h2>
                        <button
                            onClick={() => navigateMonth(1)}
                            className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex">
                    {/* Calendar Grid */}
                    <div className={`bg-white ${selectedDate ? 'w-2/3' : 'w-full'}`}>
                        {/* Day Headers */}
                        <div className="grid grid-cols-7 bg-gray-100">
                            {dayNames.map(day => (
                                <div key={day} className="p-3 text-center text-sm font-medium text-gray-600">
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* Calendar Days */}
                        <div className="grid grid-cols-7">
                            {generateCalendarDays()}
                        </div>
                    </div>

                    {/* Events Panel */}
                    {selectedDate && (
                        <div className="w-1/3 bg-gray-50 border-l border-gray-200">
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                    {selectedDate.toLocaleDateString('en-US', { 
                                        weekday: 'long', 
                                        year: 'numeric', 
                                        month: 'long', 
                                        day: 'numeric' 
                                    })}
                                </h3>
                                
                                {/* Events List */}
                                <div className="space-y-3">
                                    <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wide">Events</h4>
                                    
                                    {/* Sample Events */}
                                    <div className="space-y-2">
                                        <div className="bg-white rounded-lg p-3 border border-gray-200">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-medium text-gray-800">Morning Meeting</span>
                                                <span className="text-xs text-gray-500">9:00 AM</span>
                                            </div>
                                            <p className="text-xs text-gray-600 mt-1">Team discussion about weekly goals</p>
                                        </div>
                                        
                                        <div className="bg-white rounded-lg p-3 border border-gray-200">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-medium text-gray-800">Student Review</span>
                                                <span className="text-xs text-gray-500">2:00 PM</span>
                                            </div>
                                            <p className="text-xs text-gray-600 mt-1">Progress assessment meeting</p>
                                        </div>
                                        
                                        <div className="bg-white rounded-lg p-3 border border-gray-200">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-medium text-gray-800">Parent Call</span>
                                                <span className="text-xs text-gray-500">4:30 PM</span>
                                            </div>
                                            <p className="text-xs text-gray-600 mt-1">Follow-up on student performance</p>
                                        </div>
                                    </div>
                                    
                                    {/* Add Event Button */}
                                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                                        + Add Event
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
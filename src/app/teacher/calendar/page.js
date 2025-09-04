'use client';

import { useState } from 'react';

export default function CalendarPage() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showEventPopup, setShowEventPopup] = useState(false);
    const [events, setEvents] = useState([
        { id: 1, date: '2024-01-01', title: 'New Year Meeting', description: 'Team planning session' },
        { id: 2, date: '2024-01-02', title: 'Project Review', description: 'Review Q1 objectives' },
        { id: 3, date: '2024-01-08', title: 'Student Assessment', description: 'Grade submissions due' },
        { id: 4, date: '2024-01-14', title: 'Parent Conference', description: 'Discuss student progress' }
    ]);
    const [newEvent, setNewEvent] = useState({ title: '', description: '', time: '' });

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const navigateMonth = (direction) => {
        setCurrentDate(prev => {
            const newDate = new Date(prev);
            if (direction === 'next') {
                newDate.setMonth(newDate.getMonth() + 1);
            } else {
                newDate.setMonth(newDate.getMonth() - 1);
            }
            return newDate;
        });
    };

    const generateCalendarDays = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - firstDay.getDay());

        const days = [];
        const currentDateObj = new Date();

        for (let i = 0; i < 42; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);

            const isCurrentMonth = date.getMonth() === month;
            const isToday = date.toDateString() === currentDateObj.toDateString();
            const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();

            days.push({
                date,
                isCurrentMonth,
                isToday,
                isSelected,
                isSpecial: [1, 2, 8, 14].includes(date.getDate()) // Special days for events
            });
        }

        return days;
    };

    const handleDateClick = (day) => {
        setSelectedDate(day.date);
    };

    const addEvent = () => {
        if (newEvent.title && newEvent.description) {
            const event = {
                id: events.length + 1,
                date: selectedDate.toISOString().split('T')[0],
                title: newEvent.title,
                description: newEvent.description,
                time: newEvent.time
            };
            setEvents([...events, event]);
            setNewEvent({ title: '', description: '', time: '' });
        }
    };

    const getEventsForDate = (date) => {
        const dateString = date.toISOString().split('T')[0];
        return events.filter(event => event.date === dateString);
    };

    const calendarDays = generateCalendarDays();

    return (
        <div className="p-6 bg-gray-50 h-[100%]">
            {/* Header */}
            <div className="bg-[#6C85FF] text-white rounded-lg p-6 mb-6">
                <h1 className="text-2xl font-bold mb-2">Calendar</h1>
                <p className="text-blue-100">View and manage your schedule</p>
            </div>

            {/* Main Content - Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Calendar - Takes 2/3 of the space */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg shadow p-6">
                        {/* Month Navigation */}
                        <div className="flex justify-between items-center mb-6">
                            <button
                                onClick={() => navigateMonth('prev')}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <h2 className="text-xl font-semibold text-gray-900">
                                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                            </h2>
                            <button
                                onClick={() => navigateMonth('next')}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Days of Week */}
                        <div className="grid grid-cols-7 gap-1 mb-4">
                            {dayNames.map(day => (
                                <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* Calendar Grid */}
                        <div className="grid grid-cols-7 gap-1">
                            {calendarDays.map((day, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleDateClick(day)}
                                    className={`
                                        p-3 text-sm rounded-lg transition-colors relative
                                        ${!day.isCurrentMonth ? 'text-gray-300' : 'text-gray-900'}
                                        ${day.isToday ? 'bg-blue-100 text-blue-900 font-semibold' : ''}
                                        ${day.isSelected ? 'bg-[#6C85FF] text-white' : ''}
                                        ${day.isSpecial && day.isCurrentMonth ? 'bg-red-100 text-red-900' : ''}
                                        ${!day.isCurrentMonth ? '' : 'hover:bg-gray-100'}
                                    `}
                                >
                                    {day.date.getDate()}
                                    {day.isSpecial && day.isCurrentMonth && (
                                        <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Events Panel - Takes 1/3 of the space */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-lg shadow p-6">
                        {/* Selected Date Header */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {selectedDate.toLocaleDateString('en-US', { 
                                    weekday: 'long', 
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric' 
                                })}
                            </h3>
                        </div>

                        {/* Events List */}
                        <div className="mb-6">
                            <h4 className="text-sm font-medium text-gray-700 mb-3">Events</h4>
                            <div className="space-y-3">
                                {getEventsForDate(selectedDate).map((event) => (
                                    <div key={event.id} className="bg-gray-50 p-3 rounded-lg">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h5 className="font-medium text-gray-900">{event.title}</h5>
                                                <p className="text-sm text-gray-600">{event.description}</p>
                                                {event.time && (
                                                    <p className="text-xs text-gray-500 mt-1">{event.time}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {getEventsForDate(selectedDate).length === 0 && (
                                    <p className="text-sm text-gray-500 text-center py-4">No events scheduled</p>
                                )}
                            </div>
                        </div>

                        {/* Add New Event */}
                        <div className="border-t border-gray-200 pt-4">
                            <h4 className="text-sm font-medium text-gray-700 mb-3">Add New Event</h4>
                            <div className="space-y-3">
                                <input
                                    type="text"
                                    placeholder="Event Title"
                                    value={newEvent.title}
                                    onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                                <textarea
                                    placeholder="Event Description"
                                    value={newEvent.description}
                                    onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                                    rows="3"
                                />
                                <input
                                    type="time"
                                    value={newEvent.time}
                                    onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                                <button
                                    onClick={addEvent}
                                    className="w-full bg-[#6C85FF] hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                                >
                                    Add Event
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}
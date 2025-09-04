'use client';
import { useState, useRef } from 'react';

export default function Journal() {
    const [selectedMonth, setSelectedMonth] = useState('October');
    const [selectedDate, setSelectedDate] = useState('');
    const [showAddDayModal, setShowAddDayModal] = useState(false);
    const [showAddMoreModal, setShowAddMoreModal] = useState(false);
    const [showAddThisMonthsModal, setShowAddThisMonthsModal] = useState(false);
    const [selectedDateIndex, setSelectedDateIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    // Generate dates for the selected month
    const generateDates = () => {
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();
        const currentDay = today.getDate();
        
        const dates = [];
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                           'July', 'August', 'September', 'October', 'November', 'December'];
        const monthAbbr = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 
                          'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        
        // Find the selected month index
        const selectedMonthIndex = monthNames.indexOf(selectedMonth);
        
        // If selected month is current month, show current date and previous 30 days
        if (selectedMonthIndex === currentMonth) {
            for (let i = 29; i >= 0; i--) {
                const date = new Date(currentYear, currentMonth, currentDay - i);
                if (date.getDate() > 0) { // Ensure valid date
                    dates.push({
                        day: date.getDate(),
                        month: monthAbbr[currentMonth],
                        fullDate: date.toISOString().split('T')[0],
                        isToday: i === 0
                    });
                }
            }
        } else {
            // For other months, show last 30 days of that month
            const daysInMonth = new Date(currentYear, selectedMonthIndex + 1, 0).getDate();
            const startDay = Math.max(1, daysInMonth - 29);
            
            for (let day = startDay; day <= daysInMonth; day++) {
                dates.push({
                    day: day,
                    month: monthAbbr[selectedMonthIndex],
                    fullDate: `${currentYear}-${String(selectedMonthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
                    isToday: false
                });
            }
        }
        
        return dates;
    };

    const dates = generateDates();

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    const openAddDayModal = () => {
        setShowAddDayModal(true);
    };

    const closeAddDayModal = () => {
        setShowAddDayModal(false);
    };

    const openAddMoreModal = () => {
        setShowAddMoreModal(true);
    };

    const closeAddMoreModal = () => {
        setShowAddMoreModal(false);
    };

    const openAddThisMonthsModal = () => {
        setShowAddThisMonthsModal(true);
    };

    const closeAddThisMonthsModal = () => {
        setShowAddThisMonthsModal(false);
    };

    const handleDateSelect = (index) => {
        setSelectedDateIndex(index);
        setSelectedDate(dates[index].fullDate);
    };

    const goals = [
        { id: 1, title: 'Goal Title Space Might be aLong Title', category: 'Academic', completed: true },
        { id: 2, title: 'Goal Title Space Might be aLong TitleGoal Title Space Might be aLong Title', category: 'Wellness', completed: true },
        { id: 3, title: 'Goal Title Space Might be aLong Title', category: 'Academic', completed: true },
        { id: 4, title: 'Goal Title Space Might be aLong Title', category: 'Social', completed: true },
        { id: 5, title: 'Goal Title Space Might be aLong Title', category: 'Personal', completed: true },
        { id: 6, title: 'Goal Title Space Might be aLong Title', category: 'Academic', completed: true },
        { id: 7, title: 'Goal Title Space Might be aLong Title', category: 'Wellness', completed: true },
        { id: 8, title: 'Goal Title Space Might be aLong Title', category: 'Personal', completed: true }
    ];

    const getCategoryColor = (category) => {
        switch (category) {
            case 'Academic':
                return 'bg-blue-100 text-blue-800';
            case 'Wellness':
                return 'bg-purple-100 text-purple-800';
            case 'Social':
                return 'bg-green-100 text-green-800';
            case 'Personal':
                return 'bg-orange-100 text-orange-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <>
            <div className="flex h-full bg-gray-50">
            {/* Left Column - Progress Tracking */}
            <div className="w-2/10 p-6 space-y-4">
                {/* Monthly Goals Card */}
                <div className="bg-gradient-to-br from-green-400 to-red-500 rounded-lg p-6 text-white">
                    <h3 className="text-lg font-semibold mb-4">Monthly Goals</h3>
                    <div className="text-left">
                        <div className="text-4xl font-bold mb-2">24/48</div>
                        <div className="w-16 h-16 bg-white/40 rounded-full flex items-center justify-center relative">
                            <svg className="w-16 h-16 absolute inset-0" viewBox="0 0 36 36">
                                <path
                                    d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="rgba(255,255,255,0.3)"
                                    strokeWidth="2"
                                />
                                <path
                                    d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeDasharray="50, 100"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <svg className="w-8 h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Monthly Achievements Card 1 */}
                <div className="bg-gradient-to-br from-blue-400 to-red-500 rounded-lg p-6 text-white">
                    <h3 className="text-lg font-semibold mb-4">Monthly Achivments</h3>
                    <div className="text-left">
                        <div className="text-4xl font-bold mb-2">24/48</div>
                        <div className="w-16 h-16 bg-white/40 rounded-full flex items-center justify-center relative">
                            <svg className="w-16 h-16 absolute inset-0" viewBox="0 0 36 36">
                                <path
                                    d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="rgba(255,255,255,0.3)"
                                    strokeWidth="2"
                                />
                                <path
                                    d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeDasharray="50, 100"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <svg className="w-8 h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Monthly Achievements Card 2 */}
                <div className="bg-gradient-to-br from-blue-400 to-red-500 rounded-lg p-6 text-white">
                    <h3 className="text-lg font-semibold mb-4">Monthly Achivments</h3>
                    <div className="text-left">
                        <div className="text-4xl font-bold mb-2">24/48</div>
                        <div className="w-16 h-16 bg-white/40 rounded-full flex items-center justify-center relative">
                            <svg className="w-16 h-16 absolute inset-0" viewBox="0 0 36 36">
                                <path
                                    d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="rgba(255,255,255,0.3)"
                                    strokeWidth="2"
                                />
                                <path
                                    d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeDasharray="50, 100"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <svg className="w-8 h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle Column - Monthly Goals & Reflections */}
            <div className="w-4/10 p-6 space-y-6 h-full">
                {/* My Monthly Goals */}
                <div className="bg-white rounded-lg shadow-md h-[57%]">
                    <div className="flex justify-between items-center p-6 border-b">
                        <h2 className="text-2xl font-bold text-gray-800">My Monthly Goals</h2>
                        <button onClick={openAddMoreModal} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                            </svg>
                            ADD MORE
                        </button>
                    </div>
                    <div className="p-6 space-y-3 overflow-y-auto  scrollbar-hide h-[70%]">
                        {goals.map((goal) => (
                            <div key={goal.id} className="flex items-center gap-3">
                                <input 
                                    type="checkbox" 
                                    checked={goal.completed}
                                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <span className="flex-1 text-gray-800">{goal.title}</span>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(goal.category)}`}>
                                    {goal.category}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* End of Monthly Reflections */}
                <div className="bg-white rounded-lg shadow-md  h-[40%] ">
                    <div className="bg-gray-800 text-white p-4 rounded-t-lg">
                        <h3 className="text-center font-semibold">End of Monthly Reflections</h3>
                    </div>
                    <div className="p-6 space-y-4 ">
                        <div className="flex gap-4">
                            <select 
                                value={selectedMonth}
                                onChange={(e) => setSelectedMonth(e.target.value)}
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                            </select>
                            <button onClick={openAddThisMonthsModal} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                </svg>
                                Add This Months
                            </button>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg overflow-y-auto scrollbar-hide h-28">
                            <p className="text-gray-600">
                                Extremely Long Title One Mission Title Extremely Long Title One Mission Title Extremely Long Title One Mission Title Extremely Long Title One Mission Title Extremely Long Title One Mission Title Extremely Long Title One.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column - Daily Journal */}
            <div className="w-4/10 p-6 space-y-6">
            
                {/* Last Entry */}
                <div className="bg-white rounded-lg shadow-md h-[53%]">

                    <div className="bg-gray-800 text-white p-4 rounded-t-lg">
                        <h3 className="text-center font-semibold">Daily Journal</h3>
                    </div>
                    
                    <div className="p-6 space-y-3">
                        
                        <div className="space-y-3">
                            <div className="text-sm text-gray-500">
                                <span>28/10/2025</span> • <span>2:33 PM</span>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Extremely Long Title One Mission Title Extremely Long Title One Mission Title Extremely Long Title One Mission Title Extremely Long Title One Mission Title Extremely Long Title One Mission.
                            </p>
                            <div className="grid grid-cols-6 gap-2">
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <div key={index} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Date Navigation */}
                        <div className="bg-white mt-4">
                            <div className="flex items-center gap-4">
                                <select 
                                    value={selectedMonth}
                                    onChange={(e) => setSelectedMonth(e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>October</option>
                                    <option>November</option>
                                    <option>December</option>
                                </select>
                                <button onClick={scrollLeft} className="p-2 hover:bg-gray-100 rounded-lg">
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <div ref={scrollContainerRef} className="flex-1 overflow-x-auto scrollbar-hide">
                                    <div className="flex gap-2 min-w-max">
                                        {dates.map((date, index) => (
                                            <button 
                                                key={index}
                                                onClick={() => handleDateSelect(index)}
                                                className={`w-16 h-16 rounded-lg border transition-colors flex flex-col items-center justify-center ${
                                                    selectedDateIndex === index ? 'bg-blue-500 text-white border-blue-500' : 
                                                    date.isToday ? 'bg-green-100 border-green-300 text-green-700' : 
                                                    'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                                                }`}
                                            >
                                                <span className="text-xs font-medium">{date.month}</span>
                                                <span className="text-lg font-bold">{date.day}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <button onClick={scrollRight} className="p-2 hover:bg-gray-100 rounded-lg">
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>

                {/* Add This Day Modal */}
                <div className="bg-white rounded-lg shadow-md h-[44%]">

                    <div className="bg-gray-800 text-white p-4 rounded-t-lg">
                        <h3 className="text-center font-semibold">Today&apos;s Reflection</h3>
                    </div>
                    
                    <div className="pl-6 pr-6 space-y-4">
                        {/* Rich Text Toolbar */}
                        

                        {/* Text Input Area */}
                        <textarea 
                            placeholder="Type your message"
                            className="w-full h-35 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none mt-4"
                        ></textarea>

                        {/* Action Bar */}
                        <div className="flex items-center justify-between pt-0 ">
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-600">How are you Feeling Now?</span>
                                <button className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
                                    <span className="text-sm">😊</span>
                                </button>
                            </div>
                            <div className="flex items-center gap-4">
                                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                    </svg>
                                    ADD Photos
                                </button>
                                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        {/* Add More Modal */}
        {showAddMoreModal && (
            <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4">
                    <div className="flex justify-between items-center p-6 border-b">
                        <h3 className="text-xl font-semibold text-gray-800">Add Monthly Goals</h3>
                        <button 
                            onClick={closeAddMoreModal}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="p-6 space-y-0">
                        {/* Rich Text Toolbar */}
                        

                        {/* Text Input Area */}
                        <textarea 
                            placeholder="Type your message"
                            className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        ></textarea>

                        {/* Action Bar */}
                        <div className="flex items-center justify-between pt-4">
                            <div className="flex items-center gap-2">
                                <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors flex items-center gap-2">
                                    <span className="text-sm">How are you Feeling Now?</span>
                                    <span className="text-lg">😊</span>
                                </button>
                            </div>
                            <div className="flex items-center gap-4">
                                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-100">
                                    <option>Goal Type</option>
                                    <option>Academic</option>
                                    <option>Wellness</option>
                                    <option>Social</option>
                                    <option>Personal</option>
                                </select>
                                <button className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* Add This Months Modal */}
        {showAddThisMonthsModal && (
            <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4">
                    <div className="flex justify-between items-center p-6 border-b">
                        <h3 className="text-xl font-semibold text-gray-800">Add Monthly Reflections</h3>
                        <button 
                            onClick={closeAddThisMonthsModal}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="p-6 space-y-0">
                        

                        {/* Text Input Area */}
                        <textarea 
                            placeholder="Type your message"
                            className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        ></textarea>

                        {/* Action Bar */}
                        <div className="flex items-center justify-between pt-4">
                            <div className="flex items-center gap-2">
                                <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors flex items-center gap-2">
                                    <span className="text-sm">How are you Feeling Now?</span>
                                    <span className="text-lg">😊</span>
                                </button>
                            </div>
                            <div className="flex items-center gap-4">
                                
                                <button className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}

        <style jsx>{`
            .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
            }
            .scrollbar-hide::-webkit-scrollbar {
                display: none;
            }
        `}</style>
        </>
    );
}
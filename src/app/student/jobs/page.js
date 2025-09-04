export default function Jobs() {
    return (
        <div className="p-6 bg-gray-100 h-full overflow-hidden">
            {/* Main Table */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6 h-8/10">
                <table className="w-full">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="px-4 py-3 text-left">Job</th>
                            <th className="px-4 py-3 text-center">Price</th>
                            <th className="px-4 py-3 text-center">S</th>
                            <th className="px-4 py-3 text-center">M</th>
                            <th className="px-4 py-3 text-center">T</th>
                            <th className="px-4 py-3 text-center">W</th>
                            <th className="px-4 py-3 text-center">T</th>
                            <th className="px-4 py-3 text-center">F</th>
                            <th className="px-4 py-3 text-center">S</th>
                            <th className="px-4 py-3 text-center">Total</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-50">
                        {[
                            { job: "Job Description text area", price: 2, days: [true, false, false, false, true, false, false], total: 6 },
                            { job: "Job Description text area", price: 2, days: [false, true, false, false, true, false, false], total: 6 },
                            { job: "Job Description text area", price: 2, days: [false, false, true, false, false, true, false], total: 6 },
                            { job: "Job Description text area", price: 2, days: [true, false, false, false, false, false, true], total: 6 },
                            { job: "Job Description text area", price: 2, days: [true, false, false, false, true, false, false], total: 6 },
                            { job: "Job Description text area", price: 2, days: [false, true, false, false, true, false, false], total: 6 },
                            { job: "Job Description text area", price: 2, days: [false, false, true, false, false, true, false], total: 6 },
                            { job: "Job Description text area", price: 2, days: [true, false, false, false, false, false, true], total: 6 }
                        ].map((row, index) => (
                            <tr key={index} className="border-b border-gray-200">
                                <td className="px-4 py-3 text-gray-700">
                                    <textarea 
                                        className="w-full p-2 border border-gray-300 rounded resize-none"
                                        rows="2"
                                        defaultValue={row.job}
                                    />
                                </td>
                                <td className="px-4 py-3 text-center text-gray-700">{row.price}</td>
                                {row.days.map((checked, dayIndex) => (
                                    <td key={dayIndex} className="px-4 py-3 text-center">
                                        <input 
                                            type="checkbox" 
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                            defaultChecked={checked}
                                        />
                                    </td>
                                ))}
                                <td className="px-4 py-3 text-center font-semibold text-gray-700">{row.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Bottom Section */}
            <div className="flex items-center justify-between bg-white rounded-lg shadow-lg p-6 h-2/10">
                {/* Mood Tracker */}
                <div className="flex items-center bg-blue-100 rounded-lg p-4">
                    <div className="mr-3">
                        <h3 className="text-sm font-medium text-gray-700">How are you</h3>
                        <h3 className="text-sm font-medium text-gray-700">Feeling Now?</h3>
                    </div>
                    <div className="text-2xl">😊</div>
                </div>

                {/* Payday Info */}
                <div className="text-center">
                    <p className="text-sm text-gray-600">PAYDAY IS EVERY</p>
                    <p className="text-2xl font-bold text-black">Thursday</p>
                </div>

                {/* Action Button */}
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    8888
                </button>
            </div>
            
        </div>
    )
}

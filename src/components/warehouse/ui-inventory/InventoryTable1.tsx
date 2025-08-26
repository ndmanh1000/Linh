

export default function InventoryTable1() {
    return (
        <div>
            <div className="overflow-x-auto rounded-[4px] shadow bg-white">
                <table className="min-w-full text-sm text-left border-collapse border border-gray-200">
                    <thead className=" text-gray-500 text-sm">
                        <tr>
                            <th className="px-4 py-3 font-semibold border border-gray-200">Location</th>
                            <th className="px-4 py-3 font-semibold border border-gray-200">Area</th>
                            <th className="px-4 py-3 font-semibold border border-gray-200">Status</th>
                            <th className="px-4 py-3 font-semibold border border-gray-200">Available Qty</th>
                            <th className="px-4 py-3 font-semibold border border-gray-200">On Hand Qty</th>
                            <th className="px-4 py-3 font-semibold border border-gray-200">Minimum Qty</th>
                            <th className="px-4 py-3 font-semibold border border-gray-200"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-3 text-gray-700 border border-gray-200">Suite B</td>
                            <td className="px-4 py-3 text-gray-500 border border-gray-200"></td>
                            <td className="px-4 py-3 border border-gray-200">
                                <span className="px-2 py-1 rounded-md bg-red-100 text-red-600 text-xs font-medium whitespace-nowrap">
                                    Out of stock
                                </span>
                            </td>
                            <td className="px-4 py-3 text-red-500 font-medium border border-gray-200">0.00</td>
                            <td className="px-4 py-3 text-gray-700 border border-gray-200">1.00</td>
                            <td className="px-4 py-3 text-gray-700 border border-gray-200">10</td>
                            <td className="px-4 py-3 text-gray-400 border border-gray-200">•••</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
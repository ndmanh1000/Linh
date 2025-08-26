import { FaImage } from "react-icons/fa";

export default function TableWarehouseAssets() {
    const data = [
        {
            name: "Linh",
            barcode: "MES",
            description: "",
        },
    ];

    return (
        <div>
            <div className="overflow-x-auto rounded-[4px] shadow bg-white">
                <table className="min-w-full text-sm text-left border-collapse">
                    <thead className=" text-gray-500">
                        <tr>
                            <th className="px-4 py-3 font-semibold border border-gray-200 w-16"></th>
                            <th className="px-4 py-3 font-semibold border border-gray-200">
                                Name
                            </th>
                            <th className="px-4 py-3 font-semibold border border-gray-200">
                                Barcode
                            </th>
                            <th className="px-4 py-3 font-semibold border border-gray-200">
                                Description
                            </th>
                            <th className="px-4 py-3 font-semibold border border-gray-200 w-12"></th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((row, idx) => (
                            <tr key={idx} className="hover:bg-gray-50">
                                {/* Avatar */}
                                <td className="px-4 py-3 border border-gray-200">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-100">
                                        <FaImage className="text-gray-400 text-lg" />
                                    </div>
                                </td>

                                {/* Name */}
                                <td className="px-4 py-3 border border-gray-200 text-gray-700">
                                    {row.name}
                                </td>

                                {/* Barcode */}
                                <td className="px-4 py-3 border border-gray-200 text-gray-700">
                                    {row.barcode}
                                </td>

                                {/* Description */}
                                <td className="px-4 py-3 border border-gray-200 text-gray-700">
                                    {row.description}
                                </td>

                                {/* Action */}
                                <td className="px-4 py-3 border border-gray-200 text-center">
                                    <button className="text-gray-500 hover:text-gray-700">⋮</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

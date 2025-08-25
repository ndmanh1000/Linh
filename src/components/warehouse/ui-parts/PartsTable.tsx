import React, { useState } from "react";
import { FaImage } from "react-icons/fa";
import { useNavigate } from "react-router";

interface Product {
    id: number;
    name: string;
    status: { text: string; color: string; bg: string };
    qty: number;
    qtyColor: string;
    inventoryLines: number;
    barcode: string;
    tag: { text: string; color: string; bg: string };
    cost: string;
    category: string;
    description: string;
}

export default function PartsTable() {
    const navigate = useNavigate();
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const [selectAll, setSelectAll] = useState(false);

    const data: Product[] = [
        {
            id: 1,
            name: "Bút",
            status: { text: "Out of stock", color: "text-red-600", bg: "bg-red-100" },
            qty: 0,
            qtyColor: "text-red-600",
            inventoryLines: 1,
            barcode: "333333",
            tag: { text: "High", color: "text-red-600", bg: "bg-red-100" },
            cost: "$2.000",
            category: "dd",
            description: "dd",
        },
        {
            id: 2,
            name: "Foil Tape 1.89 - paper...",
            status: { text: "Non-stock", color: "text-gray-700", bg: "bg-gray-100" },
            qty: 2,
            qtyColor: "text-gray-700",
            inventoryLines: 1,
            barcode: "111111",
            tag: { text: "None", color: "text-gray-500", bg: "bg-gray-100" },
            cost: "N/A",
            category: "HVAC Parts",
            description: "322 HVAC Multi-P",
        },
    ];

    // Toggle chọn từng dòng
    const toggleRow = (id: number) => {
        setSelectedRows((prev) =>
            prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
        );
    };

    // Toggle chọn tất cả
    const toggleSelectAll = () => {
        if (selectAll) {
            setSelectedRows([]);
        } else {
            setSelectedRows(data.map((d) => d.id));
        }
        setSelectAll(!selectAll);
    };

    return (
        <div className=" overflow-x-auto">
            <table className="min-w-full border-collapse rounded-xl shadow whitespace-nowrap border border-[#F3F3F3]">
                <thead>
                    <tr className=" text-left">
                        <th className="px-4 py-2">
                            <input
                                type="checkbox"
                                checked={selectAll}
                                onChange={toggleSelectAll}
                            />
                        </th>
                        <th className="px-4 py-2 text-gray-500">Name</th>
                        <th className="px-4 py-2 text-gray-500">Image</th>
                        <th className="px-4 py-2 text-gray-500">Status</th>
                        <th className="px-4 py-2 text-gray-500">Available Qty</th>
                        <th className="px-4 py-2 text-gray-500">Inventory Lines</th>
                        <th className="px-4 py-2 text-gray-500">Barcode</th>
                        <th className="px-4 py-2 text-gray-500">Tag</th>
                        <th className="px-4 py-2 text-gray-500">Cost</th>
                        <th className="px-4 py-2 text-gray-500">Category</th>
                        <th className="px-4 py-2 text-gray-500">Description</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {data.map((row) => {
                        const isSelected = selectedRows.includes(row.id);
                        return (
                            <tr
                                key={row.id}
                                className={`border-t cursor-pointer ${isSelected ? "bg-blue-50" : "hover:bg-gray-50"
                                    }`}
                                onClick={() => navigate("/ware-house-inventory-details")}
                            >
                                {/* Checkbox riêng */}
                                <td
                                    className="px-4 py-2"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleRow(row.id);
                                    }}
                                >
                                    <input
                                        type="checkbox"
                                        checked={isSelected}
                                        onChange={() => toggleRow(row.id)}
                                    />
                                </td>

                                <td className="px-4 py-2">{row.name}</td>
                                <td className="px-4 py-2">
                                    <div className="w-8 h-8 flex items-center justify-center rounded bg-gray-200">
                                        <FaImage className="text-gray-500" />
                                    </div>
                                </td>
                                <td className="px-4 py-2">
                                    <span
                                        className={`px-2 py-1 rounded ${row.status.bg} ${row.status.color} text-sm`}
                                    >
                                        {row.status.text}
                                    </span>
                                </td>
                                <td className={`px-4 py-2 font-medium ${row.qtyColor}`}>
                                    {row.qty.toFixed(2)}
                                </td>
                                <td className="px-4 py-2">{row.inventoryLines}</td>
                                <td className="px-4 py-2">{row.barcode}</td>
                                <td className="px-4 py-2">
                                    <span
                                        className={`px-2 py-1 rounded ${row.tag.bg} ${row.tag.color} text-sm`}
                                    >
                                        {row.tag.text}
                                    </span>
                                </td>
                                <td className="px-4 py-2">{row.cost}</td>
                                <td className="px-4 py-2">{row.category}</td>
                                <td className="px-4 py-2">{row.description}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

import React, { useState, useRef, useEffect } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

interface LocationData {
    id: number;
    address: string;
    status: "Approved" | "Pending" | "Rejected";
    dateCreated: string;
    worker: string;
}

const locationData: LocationData[] = [
    {
        id: 1,
        address: "Kho A",
        status: "Approved",
        dateCreated: "07/01/25",
        worker: "Tran Linh"
    },
    {
        id: 2,
        address: "Kho A",
        status: "Approved",
        dateCreated: "07/01/25",
        worker: "Tran Linh"
    },
    {
        id: 3,
        address: "Kho A",
        status: "Approved",
        dateCreated: "07/01/25",
        worker: "Tran Linh"
    },
    {
        id: 4,
        address: "Kho A",
        status: "Approved",
        dateCreated: "07/01/25",
        worker: "Tran Linh"
    },
    {
        id: 5,
        address: "Kho A",
        status: "Approved",
        dateCreated: "07/01/25",
        worker: "Tran Linh"
    }
];

interface Position {
    top: number;
    left: number;
}

export default function LocationTable() {
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const [allSelected, setAllSelected] = useState<boolean>(false);
    const [openMenu, setOpenMenu] = useState<number | null>(null);
    const [menuPosition, setMenuPosition] = useState<Position | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setSelectedRows(locationData.map(item => item.id));
            setAllSelected(true);
        } else {
            setSelectedRows([]);
            setAllSelected(false);
        }
    };

    const handleSelectRow = (id: number) => {
        setSelectedRows((prev) =>
            prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
        setAllSelected(false);
    };

    const toggleMenu = (event: React.MouseEvent, id: number) => {
        event.stopPropagation();
        if (openMenu === id) {
            setOpenMenu(null);
            setMenuPosition(null);
        } else {
            const rect = event.currentTarget.getBoundingClientRect();
            setMenuPosition({
                top: rect.bottom + window.pageYOffset,
                left: rect.left + window.pageXOffset,
            });
            setOpenMenu(id);
        }
    };

    const handleEdit = (id: number) => {
        console.log("Edit location:", id);
        setOpenMenu(null);
        setMenuPosition(null);
    };

    const handleDelete = (id: number) => {
        console.log("Delete location:", id);
        setOpenMenu(null);
        setMenuPosition(null);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpenMenu(null);
                setMenuPosition(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto max-h-96 overflow-y-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50 sticky top-0 z-10">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                <input
                                    type="checkbox"
                                    className="rounded text-blue-600 focus:ring-blue-500"
                                    checked={allSelected}
                                    onChange={handleSelectAll}
                                />
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Address
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date Created
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Worker
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {locationData.map((location) => (
                            <tr key={location.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <input
                                        type="checkbox"
                                        className="rounded text-blue-600 focus:ring-blue-500"
                                        checked={selectedRows.includes(location.id)}
                                        onChange={() => handleSelectRow(location.id)}
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {location.address}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                                        {location.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {location.dateCreated}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {location.worker}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button
                                        onClick={(e) => toggleMenu(e, location.id)}
                                        className="text-gray-400 hover:text-gray-600 focus:outline-none"
                                    >
                                        <HiDotsVertical className="h-5 w-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Dropdown Menu */}
            {openMenu && menuPosition && (
                <div
                    ref={menuRef}
                    className="fixed z-50 bg-white rounded-lg shadow-lg border border-gray-200 py-1 min-w-[120px]"
                    style={{
                        top: menuPosition.top,
                        left: menuPosition.left,
                    }}
                >
                    <button
                        onClick={() => handleEdit(openMenu)}
                        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                    >
                        <FiEdit2 className="h-4 w-4" />
                        Edit
                    </button>
                    <button
                        onClick={() => handleDelete(openMenu)}
                        className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100 flex items-center gap-2"
                    >
                        <FiTrash2 className="h-4 w-4" />
                        Delete
                    </button>
                </div>
            )}
        </div>
    );
}
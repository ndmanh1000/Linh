import React, { useState } from "react";
import { FaImage } from "react-icons/fa";

interface RowData {
  name: string;
  id: string;
  title: string;
  description: string;
  assets: number;
  category: string;
  priority: string;
  paused: string;
  checklist: string;
  priorityColor: string;
}

export default function PreventiveMainTable() {
  const data: RowData[] = [
    {
      name: "kiểm tra máy điều hòa",
      id: "6863fb69392...",
      title: "HVAC Monthly Preventive M...",
      description: "Monthly HVAC preventative...",
      assets: 3,
      category: "Meter Reading",
      priority: "High",
      paused: "No",
      checklist: "Test 1",
      priorityColor: "bg-red-100 text-red-500",
    },
    {
      name: "truyền một",
      id: "6863fb69392...",
      title: "kiểm tra máy điều hòa",
      description: "kiểm tra máy điều hòa",
      assets: 3,
      category: "Meter Reading",
      priority: "None",
      paused: "No",
      checklist: "Test 1",
      priorityColor: "bg-gray-100 text-gray-500",
    },
    {
      name: "HVAC Preventive Maintenance",
      id: "6863fb69392...",
      title: "kiểm tra máy điều hòa",
      description: "kiểm tra máy điều hòa",
      assets: 3,
      category: "Meter Reading",
      priority: "Medium",
      paused: "No",
      checklist: "Test 1",
      priorityColor: "bg-yellow-100 text-yellow-600",
    },
  ];

  const [selected, setSelected] = useState<number[]>([]);
  const isAllSelected = selected.length === data.length;

  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelected([]);
    } else {
      setSelected(data.map((_, idx) => idx));
    }
  };

  const toggleSelect = (index: number) => {
    if (selected.includes(index)) {
      setSelected(selected.filter((i) => i !== index));
    } else {
      setSelected([...selected, index]);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead className="text-gray-500 text-sm">
          <tr>
            <th className="p-3">
              <input
                type="checkbox"
                checked={isAllSelected}
                onChange={toggleSelectAll}
              />
            </th>
            <th className="p-3">Name</th>
            <th className="p-3">ID</th>
            <th className="p-3">Work Order Title</th>
            <th className="p-3">Work Order Description</th>
            <th className="p-3">Image</th>
            <th className="p-3">Assets & Location</th>
            <th className="p-3">Category</th>
            <th className="p-3">Priority</th>
            <th className="p-3">Paused</th>
            <th className="p-3">Checklist</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {data.map((row, idx) => (
            <tr key={idx} className="border-t hover:bg-gray-50">
              <td className="p-3">
                <input
                  type="checkbox"
                  checked={selected.includes(idx)}
                  onChange={() => toggleSelect(idx)}
                />
              </td>
              <td className="p-3">{row.name}</td>
              <td className="p-3">{row.id}</td>
              <td className="p-3">{row.title}</td>
              <td className="p-3">{row.description}</td>
              <td className="p-3">
                <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                  <FaImage className="text-gray-500" />
                </div>
              </td>
              <td className="p-3">{row.assets}</td>
              <td className="p-3">{row.category}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 text-xs rounded ${row.priorityColor}`}
                >
                  {row.priority}
                </span>
              </td>
              <td className="p-3">{row.paused}</td>
              <td className="p-3 text-blue-500 cursor-pointer">
                {row.checklist}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

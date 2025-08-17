import { useState } from "react";
import { FaImage } from "react-icons/fa";

interface Product {
  name: string;
  status: string;
  statusColor: string;
  qty: number;
  qtyColor: string;
  allocated: number;
}

export default function WarehouseTable() {
  const data: Product[] = [
    {
      name: "Bút",
      status: "Out of stock",
      statusColor: "bg-red-100 text-red-600",
      qty: 0,
      qtyColor: "text-red-500",
      allocated: 1,
    },
    {
      name: "Foil Tape 1.89 - paper...",
      status: "Non-stock",
      statusColor: "bg-gray-100 text-gray-500",
      qty: 2,
      qtyColor: "text-gray-800",
      allocated: 1,
    },
    {
      name: "HVAC Filter 20x20x1",
      status: "Low stock",
      statusColor: "bg-yellow-100 text-yellow-600",
      qty: 3,
      qtyColor: "text-gray-800",
      allocated: 2,
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
    <div className="overflow-x-auto">
      <table className="min-w-full table border-separate border-spacing-y-2">
        <thead
          className={`text-sm ${
            isAllSelected
              ? "bg-blue-100 text-blue-700"
              : "bg-gray-50 text-gray-500"
          }`}
        >
          <tr>
            <th className="p-3 text-left">
              <input
                type="checkbox"
                checked={isAllSelected}
                onChange={toggleSelectAll}
              />
            </th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Image</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Available Qty</th>
            <th className="p-3 text-left">Allocated</th>
            <th className="p-3 text-left">On Hand Qty</th>
            <th className="p-3 text-left">Incoming Qty</th>
            <th className="p-3 text-left">Location</th>
            <th className="p-3 text-left">Barcode</th>
            <th className="p-3 text-left">Tag</th>
            <th className="p-3 text-left">Area</th>
            <th className="p-3 text-left">Cost</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Description</th>
            <th className="p-3 text-left">Worker</th>
            <th className="p-3 text-left">Vendor</th>
            <th className="p-3 text-left">Date Created</th>
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Part Number</th>
            <th className="p-3 text-left">Customer</th>
            <th className="p-3 text-left">Additional Details</th>
            <th className="p-3 text-left">Team</th>
            <th className="p-3 text-left">Minimum Qty</th>
            <th className="p-3 text-left">Maximum Qty</th>
            <th className="p-3 text-left">Critical</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            const isSelected = selected.includes(index);
            return (
              <tr
                key={index}
                onClick={() => toggleSelect(index)}
                className="cursor-pointer rounded-lg shadow-sm transition-colors"
              >
                <td className="p-3 text-center">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onClick={(e) => e.stopPropagation()}
                    onChange={() => toggleSelect(index)}
                  />
                </td>
                <td className="p-3">{item.name}</td>
                <td className="p-3">
                  <div className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-md">
                    <FaImage className="text-gray-500" />
                  </div>
                </td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-md text-xs font-medium ${item.statusColor}`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className={`p-3 font-medium ${item.qtyColor}`}>
                  {item.qty.toFixed(2)}
                </td>
                <td className="p-3">{item.allocated.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

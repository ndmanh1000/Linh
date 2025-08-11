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

export default function FlTable() {
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
      <table className="min-w-full border-separate border-spacing-y-2">
        <thead className="text-sm text-gray-500">
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
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            const isSelected = selected.includes(index);
            return (
              <tr
                key={index}
                className={`rounded-lg shadow-sm transition-colors ${
                  isSelected ? "bg-blue-100" : "bg-white hover:bg-gray-50"
                }`}
              >
                <td className="p-3">
                  <input
                    type="checkbox"
                    checked={isSelected}
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

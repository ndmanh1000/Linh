import React, { useState } from "react";

type Item = {
  id: number;
  name: string;
  status: string;
  statusColor: string;
  available: number;
  allocated: number;
  onHand: number;
};

export default function FlTable() {
  const [selected, setSelected] = useState<number[]>([]);

  const items: Item[] = [
    {
      id: 1,
      name: "Bút",
      status: "Out of stock",
      statusColor: "bg-red-100 text-red-600",
      available: 0,
      allocated: 1,
      onHand: 1,
    },
    {
      id: 2,
      name: "Foil Tape 1.89 - paper...",
      status: "Non-stock",
      statusColor: "bg-gray-100 text-gray-600",
      available: 2,
      allocated: 1,
      onHand: 3,
    },
    {
      id: 3,
      name: "HVAC Filter 20x20x1",
      status: "Low stock",
      statusColor: "bg-yellow-100 text-yellow-600",
      available: 3,
      allocated: 2,
      onHand: 5,
    },
    {
      id: 4,
      name: "HVAC Filter 20x20x1",
      status: "Low stock",
      statusColor: "bg-yellow-100 text-yellow-600",
      available: 3,
      allocated: 4,
      onHand: 1,
    },
  ];

  const toggleSelect = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500">
            <th className="p-3">
              <input
                type="checkbox"
                checked={selected.length === items.length}
                onChange={() => {
                  if (selected.length === items.length) {
                    setSelected([]);
                  } else {
                    setSelected(items.map((i) => i.id));
                  }
                }}
              />
            </th>
            <th className="p-3">Name</th>
            <th className="p-3">Image</th>
            <th className="p-3">Status</th>
            <th className="p-3">Available Qty</th>
            <th className="p-3">Allocated Qty</th>
            <th className="p-3">On Hand</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr
              key={item.id}
              className={`${
                selected.includes(item.id) ? "bg-blue-50" : ""
              } border-t`}
            >
              <td className="p-3">
                <input
                  type="checkbox"
                  checked={selected.includes(item.id)}
                  onChange={() => toggleSelect(item.id)}
                />
              </td>
              <td className="p-3">{item.name}</td>
              <td className="p-3">
                <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7h4l3-3h4l3 3h4v13H3V7z"
                    />
                  </svg>
                </div>
              </td>
              <td className="p-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${item.statusColor}`}
                >
                  {item.status}
                </span>
              </td>
              <td className="p-3">
                {item.available === 0 ? (
                  <span className="text-red-500 line-through">
                    {item.available.toFixed(2)}
                  </span>
                ) : (
                  item.available.toFixed(2)
                )}
              </td>
              <td className="p-3">{item.allocated.toFixed(2)}</td>
              <td className="p-3">{item.onHand.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

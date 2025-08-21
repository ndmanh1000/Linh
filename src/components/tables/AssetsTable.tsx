import React, { useMemo, useState } from "react";
import { FaImage } from "react-icons/fa";
import { useNavigate } from "react-router";

interface AssetRow {
  id: number;
  name: string;
  image?: string | null;
  location: string;
  barcode: string;
  serialNumber: string;
  description: string;
  category: string;
  status: "High" | "Medium" | "Low" | "None";
  paused: boolean;
  checklist: string;
}

const initialRows: AssetRow[] = [
  {
    id: 1,
    name: "Máy A",
    image: null,
    location: "MES",
    barcode: "MES",
    serialNumber: "Monthly HVAC preventative...",
    description: "3",
    category: "Meter Reading",
    status: "High",
    paused: false,
    checklist: "Test 1",
  },
  {
    id: 2,
    name: "Máy B",
    image: null,
    location: "",
    barcode: "sdsfsd",
    serialNumber: "",
    description: "3",
    category: "Meter Reading",
    status: "None",
    paused: false,
    checklist: "Test 1",
  },
  {
    id: 3,
    name: "Máy C",
    image: null,
    location: "Suite B",
    barcode: "6863fb69392...",
    serialNumber: "kiểm tra máy điều hòa",
    description: "3",
    category: "Meter Reading",
    status: "Medium",
    paused: false,
    checklist: "Test 1",
  },
];

function StatusBadge({ level }: { level: AssetRow["status"] }) {
  const styles: Record<AssetRow["status"], string> = {
    High: "bg-rose-100 text-rose-600",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-emerald-100 text-emerald-700",
    None: "bg-gray-100 text-gray-600",
  };
  return (
    <span className={`px-2 py-1 rounded-md text-xs font-medium ${styles[level]}`}>
      {level}
    </span>
  );
}

const AssetsTable: React.FC = () => {
  const [selected, setSelected] = useState<number[]>([]);
  const rows = useMemo(() => initialRows, []);
  const navigate = useNavigate();

  const isAllSelected = selected.length === rows.length;

  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelected([]);
    } else {
      setSelected(rows.map((r) => r.id));
    }
  };

  const toggleSelect = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  };

  return (
    <div className="overflow-x-auto rounded-lg bg-white shadow">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-3">
              <input type="checkbox" checked={isAllSelected} onChange={toggleSelectAll} />
            </th>
            <th className="p-3 font-medium">Name</th>
            <th className="p-3 font-medium">Image</th>
            <th className="p-3 font-medium">Location</th>
            <th className="p-3 font-medium">Barcode</th>
            <th className="p-3 font-medium">Serial Number</th>
            <th className="p-3 font-medium">Description</th>
            <th className="p-3 font-medium">Category</th>
            <th className="p-3 font-medium">Status</th>
            <th className="p-3 font-medium">Paused</th>
            <th className="p-3 font-medium">Checklist</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const isSelected = selected.includes(row.id);
            return (
              <tr
                key={row.id}
                className={`border-t hover:bg-gray-100 cursor-pointer ${
                  isSelected ? "bg-blue-50" : ""
                }`}
                onClick={() => navigate("/assets-task1")}
              >
                <td className="p-3">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onClick={(e) => e.stopPropagation()}
                    onChange={() => toggleSelect(row.id)}
                  />
                </td>
                <td className="p-3 whitespace-nowrap">{row.name}</td>
                <td className="p-3">
                  <div className="w-9 h-9 bg-gray-200 flex items-center justify-center rounded-md">
                    {row.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={row.image} alt={row.name} className="w-9 h-9 object-cover rounded" />
                    ) : (
                      <FaImage className="text-gray-500" />
                    )}
                  </div>
                </td>
                <td className="p-3 whitespace-nowrap">{row.location}</td>
                <td className="p-3 whitespace-nowrap">{row.barcode}</td>
                <td className="p-3 whitespace-nowrap">{row.serialNumber}</td>
                <td className="p-3 whitespace-nowrap">{row.description}</td>
                <td className="p-3 whitespace-nowrap">{row.category}</td>
                <td className="p-3 whitespace-nowrap">
                  <StatusBadge level={row.status} />
                </td>
                <td className="p-3 whitespace-nowrap">{row.paused ? "Yes" : "No"}</td>
                <td className="p-3 whitespace-nowrap text-blue-600">{row.checklist}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AssetsTable;



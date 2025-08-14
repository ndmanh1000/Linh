import React, { useState } from "react";

interface RowData {
  id: number;
  name: string;
  tags: string;
  uploadedBy: string;
  uploadedByAvatar: string;
  uploadedOn: string;
}

const VerdorsCustomersTable: React.FC = () => {
  const [rows, setRows] = useState<RowData[]>([
    {
      id: 1,
      name: "Westwood HVAC Solutions",
      tags: "",
      uploadedBy: "Trần Linh",
      uploadedByAvatar: "T",
      uploadedOn: "John Doe",
    },
  ]);

  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [menuOpenId, setMenuOpenId] = useState<number | null>(null);

  const allSelected = selectedIds.length === rows.length;

  const toggleSelectAll = () => {
    if (allSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(rows.map((row) => row.id));
    }
  };

  const toggleSelectOne = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleEdit = (id: number) => {
    alert(`Edit row ID: ${id}`);
    setMenuOpenId(null);
  };

  const handleDelete = (id: number) => {
    if (confirm("Bạn có chắc muốn xóa dòng này?")) {
      setRows((prev) => prev.filter((row) => row.id !== id));
    }
    setMenuOpenId(null);
  };

  return (
    <div className="p-4">
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full table-auto text-sm text-gray-700">
          <thead>
            <tr className="border-b">
              <th className="p-3 text-left">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={toggleSelectAll}
                  className="w-4 h-4"
                />
              </th>
              <th className="p-3 text-left font-semibold">Name</th>
              <th className="p-3 text-left font-semibold">Tags</th>
              <th className="p-3 text-left font-semibold">Uploaded By</th>
              <th className="p-3 text-left font-semibold">Uploaded On</th>
              <th className="p-3 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.id}
                className="border-b last:border-0 hover:bg-gray-50 transition relative"
              >
                <td className="p-3">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(row.id)}
                    onChange={() => toggleSelectOne(row.id)}
                    className="w-4 h-4"
                  />
                </td>
                <td className="p-3">{row.name}</td>
                <td className="p-3">{row.tags}</td>
                <td className="p-3 flex items-center gap-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-700 text-white font-bold">
                    {row.uploadedByAvatar}
                  </div>
                  {row.uploadedBy}
                </td>
                <td className="p-3">{row.uploadedOn}</td>
                <td className="p-3 relative">
                  <button
                    onClick={() =>
                      setMenuOpenId(menuOpenId === row.id ? null : row.id)
                    }
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ⋮
                  </button>
                  {menuOpenId === row.id && (
                    <div className="absolute right-0 mt-2 w-28 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                      <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                        ✏️ Edit
                      </button>
                      <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                        🗑 Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VerdorsCustomersTable;

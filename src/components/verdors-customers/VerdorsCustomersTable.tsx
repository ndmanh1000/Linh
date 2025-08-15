import React, { useMemo, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

type Vendor = {
  id: number;
  name: string;
  address: string;
  phone: string;
  contact: string;
  email: string;
  vendorType: string;
  website: string;
  dateCreate: string; // ISO YYYY-MM-DD để sort chuẩn
  hourlyRate: string;
};

const vendors: Vendor[] = [
  {
    id: 1,
    name: "Westwood HVAC Solutions",
    address: "10855 Lindbrook Dr, Los Angeles, CA",
    phone: "+84 912 123 412",
    contact: "John Doe",
    email: "linhtranhai747@gmail.com",
    vendorType: "HVAC Repair and Service",
    website: "N/A",
    dateCreate: "2025-07-01",
    hourlyRate: "$95.00",
  },
  {
    id: 2,
    name: "McMaster - Carr",
    address: "9630 Norwalk Blvd. Santa Fe Springs, CA",
    phone: "+84 912 123 412",
    contact: "John Doe",
    email: "linhtranhai747@gmail.com",
    vendorType: "General Parts",
    website: "http://www.mcmaster.com/",
    dateCreate: "2025-07-01",
    hourlyRate: "N/A",
  },
  {
    id: 3,
    name: "Another Vendor",
    address: "123 Example St, New York, NY",
    phone: "+84 912 111 222",
    contact: "Jane Smith",
    email: "jane@example.com",
    vendorType: "Supplies",
    website: "https://example.com",
    dateCreate: "2025-06-15",
    hourlyRate: "$80.00",
  },
];

export default function VerdorsCustomersTable() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);

  const isAllSelected = selectedIds.length === vendors.length;

  const toggleSelectAll = () => {
    setSelectedIds(isAllSelected ? [] : vendors.map((v) => v.id));
  };

  const toggleRow = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const setSort = (dir: "asc" | "desc") => {
    // click lại icon đang chọn để bỏ sort
    setSortOrder((cur) => (cur === dir ? null : dir));
  };

  const sortedVendors = useMemo(() => {
    if (!sortOrder) return vendors;
    const arr = [...vendors];
    arr.sort((a, b) => {
      const da = new Date(a.dateCreate).getTime();
      const db = new Date(b.dateCreate).getTime();
      return sortOrder === "asc" ? da - db : db - da;
    });
    return arr;
  }, [sortOrder]);

  return (
    <div className="p-4">
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3">
                <input
                  type="checkbox"
                  className="h-4 w-4"
                  checked={isAllSelected}
                  onChange={toggleSelectAll}
                />
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">
                Name
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">
                Address
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">
                Phone Number
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">
                Contact
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">
                Email
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">
                Vendor Type
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">
                Website
              </th>

              {/* Date Create + 2 icon riêng biệt */}
              <th className="px-4 py-2 text-left font-medium text-gray-700">
                <div className="flex items-center gap-2">
                  <span>Date Create</span>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => setSort("asc")}
                      className={`p-1 rounded hover:bg-gray-100 transition
                        ${
                          sortOrder === "asc"
                            ? "text-gray-900"
                            : "text-gray-400"
                        }`}
                      aria-pressed={sortOrder === "asc"}
                      title="Sort ascending"
                    >
                      <FaArrowUp />
                    </button>
                    <button
                      type="button"
                      onClick={() => setSort("desc")}
                      className={`p-1 rounded hover:bg-gray-100 transition
                        ${
                          sortOrder === "desc"
                            ? "text-gray-900"
                            : "text-gray-400"
                        }`}
                      aria-pressed={sortOrder === "desc"}
                      title="Sort descending"
                    >
                      <FaArrowDown />
                    </button>
                  </div>
                </div>
              </th>

              <th className="px-4 py-2 text-left font-medium text-gray-700">
                Hourly Rate
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {sortedVendors.map((vendor) => {
              const isSelected = selectedIds.includes(vendor.id);
              return (
                <tr
                  key={vendor.id}
                  className={`${
                    isSelected ? "bg-blue-100" : "hover:bg-gray-50"
                  } transition-colors`}
                >
                  <td className="p-3">
                    <input
                      type="checkbox"
                      className="h-4 w-4"
                      checked={isSelected}
                      onChange={() => toggleRow(vendor.id)}
                    />
                  </td>
                  <td className="px-4 py-2">{vendor.name}</td>
                  <td className="px-4 py-2">{vendor.address}</td>
                  <td className="px-4 py-2">{vendor.phone}</td>
                  <td className="px-4 py-2">{vendor.contact}</td>
                  <td className="px-4 py-2">{vendor.email}</td>
                  <td className="px-4 py-2">{vendor.vendorType}</td>
                  <td className="px-4 py-2 text-blue-500 underline">
                    {vendor.website === "N/A" ? (
                      "N/A"
                    ) : (
                      <a
                        href={vendor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {vendor.website}
                      </a>
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {new Date(vendor.dateCreate).toLocaleDateString("en-US")}
                  </td>
                  <td className="px-4 py-2">{vendor.hourlyRate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

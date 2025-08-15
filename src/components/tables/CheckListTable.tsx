import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import ModalEditCheckList from "../modal/ModalEditCheckList";
import { useModal } from "../../hooks/useModal";

interface RowData {
  id: number;
  name: string;
  description: string;
  tasks?: string;
  tags?: string;
}

const data: RowData[] = [
  {
    id: 1,
    name: "Westwood HVAC Solutions",
    description: "Check tổng quan cơ bản các máy",
  },
  {
    id: 2,
    name: "McMaster–Carr",
    description:
      "These tasks and checks should be performed every day at the end",
  },
];

export default function CheckListTable() {
  const {
    isOpen: isModalEditCheckListOpen,
    openModal: openModalEditCheckList,
    closeModal: closeModalEditCheckList,
  } = useModal();

  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  const toggleSelectAll = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((row) => row.id));
    }
  };

  const toggleSelectRow = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const toggleMenu = (id: number) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  return (
    <div className="overflow-x-auto rounded-lg shadow bg-white relative">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-3">
              <input
                type="checkbox"
                checked={selectedRows.length === data.length}
                onChange={toggleSelectAll}
              />
            </th>
            <th className="p-3 font-medium">Name</th>
            <th className="p-3 font-medium">Description</th>
            <th className="p-3 font-medium">Tasks</th>
            <th className="p-3 font-medium">Tags</th>
            <th className="p-3"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            const isSelected = selectedRows.includes(row.id);
            return (
              <tr
                key={row.id}
                className={`border-t hover:bg-gray-100 ${
                  isSelected ? "bg-blue-50" : ""
                }`}
              >
                <td className="p-3">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => toggleSelectRow(row.id)}
                  />
                </td>
                <td className="p-3">{row.name}</td>
                <td className="p-3">{row.description}</td>
                <td className="p-3">{row.tasks || ""}</td>
                <td className="p-3">{row.tags || ""}</td>
                <td className="p-3">
                  <div className="relative inline-block">
                    <button onClick={() => toggleMenu(row.id)}>
                      <BsThreeDotsVertical />
                    </button>
                    {openMenuId === row.id && (
                      <div className="absolute right-4 -top-8 mt-1 w-28 bg-white border rounded shadow-md z-50">
                        <button
                          className="block w-full text-left px-3 py-2 hover:bg-gray-100"
                          type="button"
                          onClick={openModalEditCheckList}
                        >
                          Edit
                        </button>
                        <button
                          className="block w-full text-left px-3 py-2 hover:bg-gray-100"
                          type="button"
                        >
                          Delete
                        </button>
                        <button
                          className="block w-full text-left px-3 py-2 hover:bg-gray-100"
                          type="button"
                        >
                          Duplicate
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ModalEditCheckList
        isOpen={isModalEditCheckListOpen}
        onClose={closeModalEditCheckList}
      />
    </div>
  );
}

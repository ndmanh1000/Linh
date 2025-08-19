import { useState } from "react";
import ModalPeopleDetails from "../modal/ModalPeopleDetails";
import { useModal } from "../../hooks/useModal";

interface User {
  id: number;
  name: string;
  status: string;
  accountType: string;
  email: string;
  phone: string;
  jobTitle: string;
  hourlyRate: string;
  company: string;
}

export default function PeopleTeamTable() {
  const {
    isOpen: isModalPeopleDetailsOpen,
    openModal: openModalPeopleDetails,
    closeModal: closeModalPeopleDetails,
  } = useModal();
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const data: User[] = [
    {
      id: 1,
      name: "Trần Linh",
      status: "Active",
      accountType: "Administrator",
      email: "linhtranhai747@gmail.com",
      phone: "+84 912 123 412",
      jobTitle: "N/A",
      hourlyRate: "N/A",
      company: "MESz",
    },
  ];

  const toggleRow = (id: number) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const toggleAll = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((item) => item.id));
    }
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-50 text-gray-700">
          <tr>
            <th className="px-4 py-2">
              <input
                type="checkbox"
                checked={selectedRows.length === data.length}
                onChange={toggleAll}
                onClick={(e) => e.stopPropagation()} // chặn lan click
              />
            </th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Account Type</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone Number</th>
            <th className="px-4 py-2">Job Title</th>
            <th className="px-4 py-2">Hourly Rate</th>
            <th className="px-4 py-2">Company Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr
              key={user.id}
              className={`border-t cursor-pointer ${selectedRows.includes(user.id) ? "bg-green-50" : "bg-white"
                }`}
              onClick={openModalPeopleDetails}
            >
              <td className="px-4 py-2">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(user.id)}
                  onChange={() => toggleRow(user.id)}
                  onClick={(e) => e.stopPropagation()}
                />
              </td>
              <td className="px-4 py-2 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold">
                  {user.name.charAt(0)}
                </div>
                {user.name}
              </td>
              <td className="px-4 py-2">
                <span className="px-2 py-1 text-xs rounded-md bg-green-100 text-green-700 font-medium">
                  {user.status}
                </span>
              </td>
              <td className="px-4 py-2">{user.accountType}</td>
              <td className="px-4 py-2 truncate max-w-[180px]">{user.email}</td>
              <td className="px-4 py-2">{user.phone}</td>
              <td className="px-4 py-2">{user.jobTitle}</td>
              <td className="px-4 py-2">{user.hourlyRate}</td>
              <td className="px-4 py-2">{user.company}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalPeopleDetails
        isOpen={isModalPeopleDetailsOpen}
        onClose={closeModalPeopleDetails}
      />
    </div>
  );
}

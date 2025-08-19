import React, { useState } from "react";
import Select from "../form/Select";
import DatePicker from "../form/date-picker";

interface RowData {
  id: number;
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  timezone: string;
  assignedTo: string;
  additionalWorkers: string;
}

const PmTable: React.FC = () => {
  const [rows, setRows] = useState<RowData[]>([
    {
      id: 1,
      name: "",
      location: "",
      startDate: "2025-07-03",
      endDate: "",
      timezone: "(UTC +07:00) Asia/Hanoi",
      assignedTo: "",
      additionalWorkers: "",
    },
  ]);

  const handleChange = (id: number, field: keyof RowData, value: string) => {
    setRows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const handleDelete = (id: number) => {
    setRows((prev) => prev.filter((row) => row.id !== id));
  };

  const options2a = [
    { value: "marketing", label: "Marketing" },
    { value: "template", label: "Template" },
    { value: "development", label: "Development" },
  ];
  const handleSelectChange2a = (value: string) => {
    console.log("Selected value:", value);
  };

  const options2b = [
    { value: "marketing", label: "Marketing" },
    { value: "template", label: "Template" },
    { value: "development", label: "Development" },
  ];
  const handleSelectChange2b = (value: string) => {
    console.log("Selected value:", value);
  };

  const options2c = [
    { value: "hanoi", label: "(UTC +07:00) Asia/Hanoi" },
    { value: "my", label: "(UTC +10:00) United State" },
  ];
  const handleSelectChange2c = (value: string) => {
    console.log("Selected value:", value);
  };

  const options2d = [
    { value: "hanoi", label: "(UTC +07:00) Asia/Hanoi" },
    { value: "my", label: "(UTC +10:00) United State" },
  ];
  const handleSelectChange2d = (value: string) => {
    console.log("Selected value:", value);
  };

  const options2e = [
    { value: "hanoi", label: "(UTC +07:00) Asia/Hanoi" },
    { value: "my", label: "(UTC +10:00) United State" },
  ];
  const handleSelectChange2e = (value: string) => {
    console.log("Selected value:", value);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg shadow-sm block md:table">
        <thead className="hidden md:table-header-group">
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="p-2 text-left border-r border-gray-200">Name</th>
            <th className="p-2 text-left border-r border-gray-200">Location</th>
            <th className="p-2 text-left border-r border-gray-200">
              Start Date
            </th>
            <th className="p-2 text-left border-r border-gray-200">End Date</th>
            <th className="p-2 text-left border-r border-gray-200">Timezone</th>
            <th className="p-2 text-left border-r border-gray-200">
              Assigned To
            </th>
            <th className="p-2 text-left border-r border-gray-200">
              Additional Workers
            </th>
            <th className="p-2 text-left">Action</th>
          </tr>
        </thead>

        <tbody className="block md:table-row-group">
          {rows.map((row) => (
            <tr
              key={row.id}
              className="border-t block md:table-row mb-4 md:mb-0"
            >
              <td className="p-2 block md:table-cell">
                <div className="md:hidden font-semibold mb-1">Name</div>
                <Select
                  options={options2a}
                  placeholder="Select an option"
                  onChange={handleSelectChange2a}
                  className="dark:bg-dark-900 w-full"
                />
              </td>
              <td className="p-2 block md:table-cell">
                <div className="md:hidden font-semibold mb-1">Location</div>
                <Select
                  options={options2b}
                  placeholder="Select an option"
                  onChange={handleSelectChange2b}
                  className="dark:bg-dark-900 w-full"
                />
              </td>
              <td className="p-2 block md:table-cell ">
                <div className="md:hidden font-semibold mb-1">Start Date</div>
                <div className="w-full">
                  <DatePicker
                    id="date-picker"
                    placeholder="Select a date"
                    onChange={(dates, currentDateString) => {

                      console.log({ dates, currentDateString });
                    }}
                  />
                </div>
              </td>
              <td className="p-2 block md:table-cell ">
                <div className="md:hidden font-semibold mb-1">End Date</div>
                <DatePicker
                  id="date-picker"
                  placeholder="Select end date"
                  onChange={(dates, currentDateString) => {
                    console.log({ dates, currentDateString });
                  }}
                />
              </td>
              <td className="p-2 block md:table-cell ">
                <div className="md:hidden font-semibold mb-1">Timezone</div>
                <Select
                  options={options2c}
                  placeholder="Select timezone"
                  onChange={handleSelectChange2c}
                  className="dark:bg-dark-900 w-full"
                />
              </td>
              <td className="p-2 block md:table-cell ">
                <div className="md:hidden font-semibold mb-1">Assigned To</div>
                <Select
                  options={options2d}
                  placeholder="Select assigned to"
                  onChange={handleSelectChange2d}
                  className="dark:bg-dark-900 w-full"
                />
              </td>
              <td className="p-2 block md:table-cell ">
                <div className="md:hidden font-semibold mb-1">
                  Additional Workers
                </div>
                <Select
                  options={options2e}
                  placeholder="Select additional worker"
                  onChange={handleSelectChange2e}
                  className="dark:bg-dark-900 w-full"
                />
              </td>
              <td className="p-2 block md:table-cell  text-center">
                <div className="md:hidden font-semibold mb-1">Action</div>
                <button
                  className="text-red-500 hover:text-red-700"
                  type="button"
                  onClick={() => handleDelete(row.id)}
                >
                  🗑
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PmTable;

import { useState, useRef } from "react";

export default function OpenButton() {
  const [open, setOpen] = useState(false);
  // State lưu mục đang chọn, mặc định Open
  const [selected, setSelected] = useState({
    label: "Open",
    color: "text-gray-600",
    icon: "◯",
  });

  // Các option để chọn
  const options = [
    { label: "Open", color: "text-gray-600", icon: "◯" },
    { label: "In Progress", color: "text-green-700", icon: "◐" },
    { label: "On Hold", color: "text-orange-600", icon: "⏸" },
    { label: "Complete", color: "text-blue-600", icon: "✓" },
  ];

  // Bật tắt dropdown
  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(!open);
  };

  // Khi chọn 1 mục, cập nhật selected và đóng dropdown
  const handleSelect = (option: typeof selected) => {
    console.log("Chọn:", option);
    setSelected(option);
    setOpen(false);
  };

  return (
    <div
      className="relative inline-block text-left w-full"
      onBlur={() => setOpen(false)}
      tabIndex={0} // cần để nhận onBlur
    >
      <button
        onClick={handleToggle}
        className={` flex items-center w-full gap-2 border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 focus:outline-none ${selected.color}`}
      >
        <span className="text-lg">{selected.icon}</span>
        <span>{selected.label}</span>
        <svg
          className={`ml-auto h-4 w-4 transition-transform ${
            open ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div
          className="absolute mt-1 md:w-48 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10"
          onMouseLeave={() => setOpen(false)}
        >
          {options.map((option) => (
            <button
              key={option.label}
              className={`flex items-center gap-3 px-4 py-2 w-full text-left hover:bg-gray-100 ${option.color} text-sm`}
              onClick={() => handleSelect(option)}
            >
              <span className="text-lg">{option.icon}</span>
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

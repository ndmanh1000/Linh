import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { LocationIcon } from "../../../icons";

export default function LocationButton() {
  const [selected, setSelected] = useState("Location");
  const [open, setOpen] = useState(false);

  const options = ["Location", "Hà Nội", "Hồ Chí Minh", "Đà Nẵng", "Cần Thơ"];

  return (
    <div className="relative">
      {/* Nút chính */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 border rounded-lg px-3 w-full py-1.5 h-10 shadow-sm hover:bg-gray-50"
      >
        <LocationIcon className="w-4 h-4 text-gray-600" />
        <span>{selected}</span>
        <FaAngleDown
          className={`ml-auto w-4 h-4 text-gray-600 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 mt-2 md:w-40 w-full bg-white border rounded-lg shadow-lg z-10">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                selected === option ? "bg-gray-100 font-semibold" : ""
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

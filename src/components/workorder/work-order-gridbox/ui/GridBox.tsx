import React from "react";
import image60 from "../../../../../public/images/work-order-grid-box/image60.png";
import { LocationIcon, Boc1Icon, UserocIcon } from "../../../../icons";
interface GridBoxProps {
  woNumber: string;
  statusText: string;
  statusColor: string;
  statusBg: string;
}

export default function GridBox({
  woNumber,
  statusText,
  statusColor,
  statusBg,
}: GridBoxProps) {
  return (
    <div className="w-full h-full bg-white px-3 py-4">
      {" "}
      {/* Thêm h-full */}
      <div className="w-full h-full flex flex-col bg-white rounded-[4px] py-[16px] px-[10px] border-2 border-[#F3F3F3] relative">
        <div className="w-full h-[5px] absolute -right-0 -top-1 bg-[#D9D9D9] rounded-tl-md rounded-tr-md"></div>

        {/* Header */}
        <div className="w-full flex items-center justify-around">
          <p>{woNumber}</p>
          <div
            className="border rounded-[4px] w-32 text-[14px] text-center px-[2px] py-[8px]"
            style={{ borderColor: statusColor, backgroundColor: statusBg }}
          >
            <p style={{ color: statusColor }}>{statusText}</p>
          </div>
        </div>

        <div className="w-full border-b border-[#F3F3F3] mt-2"></div>

        {/* Nội dung chính */}
        <div className="flex-1 flex flex-col justify-between">
          {" "}
          {/* Chiếm hết chiều cao còn lại */}
          {/* Image */}
          <div className="flex items-center justify-center mt-2">
            <img src={image60} alt="img60" className="max-w-full h-auto" />
          </div>
          <div className="w-full border-b border-[#F3F3F3] mt-2"></div>
          {/* Info */}
          <div className="w-full px-[6px] py-[16px] flex flex-col gap-4">
            <div className="grid grid-cols-2 w-full">
              <div className="flex items-center gap-2">
                <LocationIcon />
                <p>Location</p>
              </div>
              <p>Suite B</p>
            </div>

            <div className="grid grid-cols-2 w-full">
              <div className="flex items-center gap-2">
                <Boc1Icon />
                <p>Assets</p>
              </div>
              <p>TRANE HVAC Suite B Suite B</p>
            </div>

            <div className="grid grid-cols-2 w-full">
              <div className="flex items-center gap-2">
                <Boc1Icon />
                <p>Closeout Notes</p>
              </div>
              <p>N/A</p>
            </div>

            <div className="grid grid-cols-2 w-full">
              <div className="flex items-center gap-2">
                <UserocIcon />
                <p>Assets</p>
              </div>
              <p>Trần Linh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

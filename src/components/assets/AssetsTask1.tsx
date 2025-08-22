import AssetsTask1Header from "./ui-assets-task1/AssetsTask1Header";
import { useState } from "react";
import WorkOrderTask from "../workorder/work-order-task/WorkOrderTask";
import FilterButton from "../workorder/work-order-button/FilterButton";
import LocationButton from "../workorder/work-order-button/LocationButton";
import AssetsWorkOrderTable from "./ui-assets-task1/AssetsWorkOrderTable";
import { RiQrScan2Line } from "react-icons/ri";
import ModalAddPart from "../modal/ModalAddPart";


export default function AssetsTask1() {
    const [activeTab, setActiveTab] = useState("People");
    const [isModalAddPartOpen, setIsModalAddPartOpen] = useState(false);

    const handleOpenModalAddPart = () => {
        setIsModalAddPartOpen(true);
    };

    const handleCloseModalAddPart = () => {
        setIsModalAddPartOpen(false);
    };

  return <div className="w-full flex flex-col gap-4 md:gap-6">
   
    <AssetsTask1Header/>
    <div className="w-full border-b border-[#F3F3F3]" />
    <div className="w-full md:flex items-center justify-between grid grid-col-1 gap-3">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setActiveTab("work-order")}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "work-order"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Work Orders
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("details")}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "details"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Details
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("part")}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "part"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Part
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("file")}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "file"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Files
        </button>
      </div>
      <div className="flex items-center md:justify-end md:gap-4 gap-3">
        <RiQrScan2Line size={20} className="cursor-pointer"/>
        QRcode
      </div>
     
    </div>

    <div className="w-full">
      {activeTab === "work-order" && (
        <div className="py-4 flex flex-col md:gap-2 gap-4">
          <WorkOrderTask/>  
          <div className="w-full border-b border-[#F3F3F3]" />
          <div className="w-full flex items-center justify-start md:gap-4 gap-4">
            <FilterButton/>
            <LocationButton/>
            <p className="cursor-pointer text-[#007FE6] ">Reset</p>
          </div>
          <AssetsWorkOrderTable/>
        </div>
      )}

      {activeTab === "details" && (
        <div>fwnekfbewh</div>
      )}
      
      {activeTab === "part" && (
        <div className="py-4 flex flex-col md:gap-3 gap-4">
          <WorkOrderTask/>
          <div className="w-full md:flex items-center justify-between grid grid-col-1 gap-3">
          <div className="w-full flex items-center justify-start md:gap-4 gap-4">
            <FilterButton/>
            <LocationButton/>
            <p className="cursor-pointer text-[#007FE6] ">Reset</p>
          </div>
          <div>
            <button 
              className="border border-[#949494] bg-white text-black h-10 rounded-[4px] p-2 text-center w-30 md:w-30 hover:bg-gray-50 transition-colors"
              onClick={handleOpenModalAddPart}
            >
              Add Parts
            </button>
          </div>
          </div>
          <div className="w-full bg-[#C3BEBE14] md:h-[400px] flex items-center justify-center h-[200px] rounded-[4px]">No Part</div>
        </div>
      )}
      
      {activeTab === "file" && (
        <div>file</div>
      )}
    </div>

    {/* Modal Add Part */}
    <ModalAddPart 
      isOpen={isModalAddPartOpen} 
      onClose={handleCloseModalAddPart} 
    />
  
  </div>;
}
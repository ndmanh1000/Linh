import { MoreIcon } from "../icons";
import { useState } from "react";
import { useModal } from "../hooks/useModal";
import WorkOrderTask from "../components/workorder/work-order-task/WorkOrderTask";
import ModalCreateVendor from "../components/modal/ModalCreateVendor";
import { ScanIcon } from "../icons";
import ModalQr from "../components/modal/ModalQr";
import FilterButton from "../components/workorder/work-order-button/FilterButton";
import StatusButton from "../components/workorder/work-order-button/StatusButton";
import IncomingButton from "../components/warehouse/IncomingButton";
import LocationButton from "../components/workorder/work-order-button/LocationButton";
import TagButton from "../components/filess/ui/filess-button/TagButton";
import WarehouseTable from "../components/warehouse/WarehouseTable";
import ModalWareHouseCreatPart from "../components/modal/ModalWareHouseCreatPart";
export default function Warehouse() {
  const {
    isOpen: isModalWareHouseCreatPartOpen,
    openModal: openModalWareHouseCreatPart,
    closeModal: closeModalWareHouseCreatPart,
  } = useModal();
  const {
    isOpen: isModalQrOpen,
    openModal: openModalQr,
    closeModal: closeModalQr,
  } = useModal();

  const [activeTab, setActiveTab] = useState("Inventory");
  return (
    <div className="w-full flex flex-col md:gap-4 gap-3">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center md:gap-3 gap-3">
          <div>Inventory</div>
          <div>
            {" "}
            <button
              type="button"
              onClick={() => setActiveTab("inventory")}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "inventory"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Inventory
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("parts")}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "parts"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Parts
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("sets")}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "sets"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Sets
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("cyclecounts")}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "cyclecounts"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Cycle Counts
            </button>
          </div>
        </div>

        <div className="flex items-center md:gap-3 gap-3">
          {" "}
          <button
            className="border border-[#0C6FF9] bg-[#0C6FF9] text-white flex items-center justify-center px-2 py-2 rounded-[4px]"
            type="button"
            onClick={openModalWareHouseCreatPart}
          >
            Creater Part
          </button>
          <MoreIcon />
          <div className="cursor-pointer">
            <ScanIcon className="w-5 h-5" onClick={openModalQr} />
          </div>
        </div>
      </div>
      <div className="w-full border-b border-[#F3F3F3]" />
      <div className="mt-4 p-4 ">
        {activeTab === "inventory" && (
          <div className="flex flex-col md:gap-3 gap-3">
            <WorkOrderTask />
            <div className=" grid grid-cols-1 md:flex items-center md:gap-4 gap-4">
              <FilterButton />
              <StatusButton />
              <IncomingButton />
              <LocationButton />

              <TagButton />
              <p className="cursor-pointer font-medium text-[#007FE6]">Reset</p>
            </div>

            <WarehouseTable />
          </div>
        )}

        {activeTab === "parts" && (
          <div>
            <h2 className="text-lg font-semibold">Tasks Content</h2>
            <p>Danh sách các công việc cần làm sẽ hiển thị ở đây.</p>
          </div>
        )}

        {activeTab === "sets" && (
          <div>
            <h2 className="text-lg font-semibold">Tasks Content</h2>
            <p>Danh sách các công việc cần làm sẽ hiển thị ở đây.</p>
          </div>
        )}

        {activeTab === "cyclecounts" && (
          <div>
            <h2 className="text-lg font-semibold">Tasks Content</h2>
            <p>Danh sách các công việc cần làm sẽ hiển thị ở đây.</p>
          </div>
        )}
      </div>
      <ModalWareHouseCreatPart
        isOpen={isModalWareHouseCreatPartOpen}
        onClose={closeModalWareHouseCreatPart}
      />
      <ModalQr isOpen={isModalQrOpen} onClose={closeModalQr} />
    </div>
  );
}

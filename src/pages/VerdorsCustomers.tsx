import WorkOrderTask from "../components/workorder/work-order-task/WorkOrderTask";
import FilterButton from "../components/workorder/work-order-button/FilterButton";
import TagButton from "../components/verdors-customers/ui/verdors-customers-button/TagButton";
import VerdorsCustomersTable from "../components/verdors-customers/ui/verdors-customers-table/VerdorsCustomersTable";
import ModalVerdorCustomerAddFile from "../components/modal/ModalVerdorCustomerAddFile";
import { useModal } from "../hooks/useModal";

export default function VerdorsCustomers() {
  const {
    isOpen: isModalVerdorCustomerAddFileOpen,
    openModal: openModalVerdorCustomerAddFile,
    closeModal: closeModalVerdorCustomerAddFile,
  } = useModal();
  return (
    <div className="w-full flex flex-col md:gap-4 gap-3">
      <div className="w-full flex items-center justify-between">
        <div>Files</div>
        <div>
          <button
            className="border border-[#0C6FF9] bg-[#0C6FF9] text-white flex items-center justify-center px-2 py-2 rounded-[4px]"
            type="button"
            onClick={openModalVerdorCustomerAddFile}
          >
            Add Files
          </button>
        </div>
      </div>
      <div className="w-full border-b border-[#F3F3F3]" />
      <div>
        <WorkOrderTask />
      </div>
      <div className="w-full border-b border-[#F3F3F3]" />
      <div className="w-full flex items-center md:justify-items-start md:gap-2 gap-2">
        <FilterButton />
        <TagButton />
        <p className="text-[#007FE6] cursor-pointer">Reset</p>
      </div>
      <div>
        <VerdorsCustomersTable />
      </div>
      <ModalVerdorCustomerAddFile
        isOpen={isModalVerdorCustomerAddFileOpen}
        onClose={closeModalVerdorCustomerAddFile}
      />
    </div>
  );
}

import { PlusOutlinedIcon, MoreIcon, ScanIcon } from "../../icons";
import { Modal } from "../ui/modal";

import Label from "../form/Label";
import Input from "../form/input/InputField";
import Select from "../form/Select";
import TextArea from "../form/input/TextArea";
import { CiSearch } from "react-icons/ci";
import DatePicker from "../form/date-picker";
import { useModal } from "../../hooks/useModal";
import ModalQr from "../modal/ModalQr";
import Toggle from "../toggle-switch/Toggle";

const options = [
  { value: "marketing", label: "Marketing" },
  { value: "template", label: "Template" },
  { value: "development", label: "Development" },
];
const options2 = [
  { value: "marketing", label: "Marketing" },
  { value: "template", label: "Template" },
  { value: "development", label: "Development" },
];
const options3 = [
  { value: "marketing", label: "Marketing" },
  { value: "template", label: "Template" },
  { value: "development", label: "Development" },
];
const options4 = [
  { value: "marketing", label: "Marketing" },
  { value: "template", label: "Template" },
  { value: "development", label: "Development" },
];
const options5 = [
  { value: "marketing", label: "Marketing" },
  { value: "template", label: "Template" },
  { value: "development", label: "Development" },
];
const handleSelectChange5 = (value: string) => {
  console.log("Selected value:", value);
};
const options6 = [
  { value: "marketing", label: "Marketing" },
  { value: "template", label: "Template" },
  { value: "development", label: "Development" },
];
const handleSelectChange7 = (value: string) => {
  console.log("Selected value:", value);
};
const handleSelectChange8 = (value: string) => {
  console.log("Selected value:", value);
};
const options8 = [
  { value: "marketing", label: "Marketing" },
  { value: "template", label: "Template" },
  { value: "development", label: "Development" },
];
const options7 = [
  { value: "marketing", label: "Marketing" },
  { value: "template", label: "Template" },
  { value: "development", label: "Development" },
];
const handleSelectChange6 = (value: string) => {
  console.log("Selected value:", value);
};
const handleSelectChange1 = (value: string) => {
  console.log("Selected value:", value);
};
const handleSelectChange2 = (value: string) => {
  console.log("Selected value:", value);
};
const handleSelectChange3 = (value: string) => {
  console.log("Selected value:", value);
};
const handleSelectChange4 = (value: string) => {
  console.log("Selected value:", value);
};

export default function WorkOrderHeader() {
  const { isOpen, openModal, closeModal } = useModal();
  const {
    isOpen: isModalQrOpen,
    openModal: openModalQr,
    closeModal: closeModalQr,
  } = useModal();

  return (
    <div>
      <div className="w-full flex items-center justify-between">
        <div>Work Orders</div>
        <div className="flex items-center md:gap-10 gap-5">
          {/* Nút mở modal */}
          <button
            onClick={openModal}
            className="flex items-center gap-2 justify-center text-white bg-[#1677ff] px-2 py-2 rounded-[8px] hover:bg-blue-light-300 cursor-pointer"
          >
            <PlusOutlinedIcon />
            <p>Create Work Order</p>
          </button>

          <div className="cursor-pointer">
            <MoreIcon />
          </div>
          <div className="cursor-pointer">
            <ScanIcon className="w-5 h-5" onClick={openModalQr} />
          </div>
        </div>

        <Modal
          isOpen={isOpen}
          onClose={closeModal}
          className="max-w-[700px] m-4"
        >
          <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
            <div className="px-2 pr-14">
              <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                Create New Order
              </h4>
            </div>
            <form className="flex flex-col">
              <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
                <div className="mt-7">
                  <div className="w-full border-b border-[#F3F3F3] mt-4"></div>
                  <div className="mt-3 flex flex-col w-full md:gap-5">
                    <div>Work Order Details</div>
                    <div>
                      <Label>Work Order Title</Label>
                      <Input />
                    </div>
                    <div>
                      <Label>Description </Label>
                      <TextArea />
                    </div>

                    <div className="w-full grid grid-cols-1 md:flex gap-2 md:gap-2 ">
                      <div className="w-full">
                        <Label>Category</Label>
                        <Select
                          options={options}
                          placeholder="Select an option"
                          onChange={handleSelectChange1}
                          className="dark:bg-dark-900 w-full"
                        />
                      </div>
                      <div className="w-full">
                        <Label>Priority</Label>
                        <Select
                          options={options2}
                          placeholder="Select an option"
                          onChange={handleSelectChange2}
                          className="dark:bg-dark-900 w-full"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label className="text-sm text-gray-700">Photos</label>
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                          <div className="flex flex-col items-center justify-center pt-2 pb-2">
                            <span className="text-sm text-gray-500 flex items-center justify-center gap-2">
                              <button className="border border-[#333333] bg-white h-10 w-30 rounded-[5px]">
                                Upload
                              </button>{" "}
                              or Drop Images
                            </span>
                          </div>
                          <input type="file" className="hidden" multiple />
                        </label>
                      </div>
                    </div>
                    <div className="w-full border-b border-[#F3F3F3]"></div>
                    <div>Job Specifications</div>
                    <div className="grid grid-cols-1 md:flex gap-2 md:gap-2">
                      <div className="w-full">
                        <Label>Assets</Label>
                        <div className="flex items-center w-full">
                          <div className="relative w-full">
                            <input
                              type="text"
                              className="w-full h-10 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <CiSearch className="absolute top-2 left-3 text-gray-500" />
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <Label>Location</Label>
                        <Select
                          options={options3}
                          placeholder="Select an option"
                          onChange={handleSelectChange3}
                          className="dark:bg-dark-900 w-full h-10"
                        />
                      </div>
                    </div>
                    <div className=" grid grid-cols-1 md:flex md:gap-2 gap-2">
                      <div className="w-full">
                        <DatePicker
                          id="date-picker"
                          label="Date Start"
                          placeholder="Select a date"
                          onChange={(dates, currentDateString) => {
                            // Handle your logic
                            console.log({ dates, currentDateString });
                          }}
                        />
                      </div>
                      <div className="w-full">
                        <DatePicker
                          id="date-picker"
                          label="Due Date"
                          placeholder="Select a date"
                          onChange={(dates, currentDateString) => {
                            // Handle your logic
                            console.log({ dates, currentDateString });
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <Label>Duration (as hours)</Label>
                      <Select
                        options={options4}
                        placeholder="Select an option"
                        onChange={handleSelectChange4}
                        className="dark:bg-dark-900 w-full h-10"
                      />
                    </div>
                    <div className="w-full border-b border-[#F3F3F3]"></div>
                    <div className="mt-2">Assignment & Team</div>
                    <div>
                      <div className="w-full grid grid-cols-1 md:flex gap-2 md:gap-2 mt-2 ">
                        <div className="w-full">
                          <Label>Primary Assignee</Label>
                          <Select
                            options={options5}
                            placeholder="Select an option"
                            onChange={handleSelectChange5}
                            className="dark:bg-dark-900 w-full"
                          />
                        </div>
                        <div className="w-full">
                          <Label>Team</Label>
                          <Select
                            options={options6}
                            placeholder="Select an option"
                            onChange={handleSelectChange6}
                            className="dark:bg-dark-900 w-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full mt-2">
                      <Label>Additional Assignee(s)</Label>
                      <Select
                        options={options7}
                        placeholder="Select an option"
                        onChange={handleSelectChange7}
                        className="dark:bg-dark-900 w-full h-10"
                      />
                    </div>
                    <div className="w-full border-b border-[#F3F3F3]"></div>
                    <div className="mt-2">Assets</div>
                    <div className="w-full flex items-center justify-between">
                      <div>Photo</div>
                      <div>
                        <button className="border border-[#333333] bg-white px-2 py-2 rounded-[8px]">
                          Add Part
                        </button>
                      </div>
                    </div>
                    <div className="w-full h-12 border border-dashed text-center flex items-center justify-center mt-2">
                      <p>No line items have been added yet</p>
                    </div>
                    <div className="w-full border-b border-[#F3F3F3]"></div>
                    {/*  */}
                    <div className="mt-4">Tasks & Checklists</div>
                    <div className="w-full flex items-center justify-between mt-4">
                      <div>List</div>
                      <div>
                        <div className="flex items-center gap-2">
                          <button className="border border-[#333333] bg-white h-10 w-30 rounded-[5px]">
                            Add Task
                          </button>
                          <button className="border border-[#333333] bg-white h-10 w-30 rounded-[5px]">
                            Add Checklist
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-12 border border-dashed text-center flex items-center justify-center mt-4">
                      <p>No line items have been added yet</p>
                    </div>

                    <div className="w-full border-b border-[#F3F3F3]"></div>
                    <div className="mt-4">Documents & Reference</div>
                    <div className="mt-4">File</div>
                    <div className="flex items-center justify-center w-full mt-4">
                      <label className="flex flex-col w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-2 pb-2">
                          <span className="text-sm text-gray-500 flex items-center justify-center gap-2">
                            <button className="border border-[#333333] bg-white h-10 w-30 rounded-[5px]">
                              Upload
                            </button>{" "}
                            or Drop Images
                          </span>
                        </div>
                        <input type="file" className="hidden" multiple />
                      </label>
                    </div>
                    <div className="text-[16px] font-medium text-[#0071FF] cursor-pointer mt-4">
                      Add from Saved Files
                    </div>
                    <div className="mt-4">
                      <div className="w-full">
                        <Label>Purchase Order</Label>
                        <Select
                          options={options}
                          placeholder="Select an option"
                          onChange={handleSelectChange1}
                          className="dark:bg-dark-900 w-full"
                        />
                      </div>
                    </div>
                    <div className="w-full flex items-center justify-between mt-4">
                      <div className="flex flex-col gap-2">
                        <p>Signature Required</p>
                        <p>
                          Require technicians to upload a signature image in
                          order to complete this work order.
                        </p>
                      </div>
                      <div>
                        <Toggle />
                      </div>
                    </div>
                  </div>
                  <div className="w-full border-b border-[#F3F3F3] mt-4"></div>
                  <div className="w-full flex items-center justify-end gap-2 md:gap-4 md:mt-3 mt-3">
                    <button
                      onClick={closeModal}
                      className=" bg-white px-2 py-2  rounded border border-gray-300"
                    >
                      Cancel
                    </button>
                    <button className="border border-gray-300 bg-white flex items-center justify-center px-2 py-2 rounded-[4px]">
                      Creat Word Order
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Modal>
      </div>
      <ModalQr isOpen={isModalQrOpen} onClose={closeModalQr} />
    </div>
  );
}

import React, { useState } from "react";
import Label from "../form/Label";
import Select from "../form/Select";
import Input from "../form/input/InputField";
import TextArea from "../form/input/TextArea";
import UpFile10 from "../upload/UpFile10";
import ModalRequestDecline from "../modal/ModalRequestDecline";
import { useModal } from "../../hooks/useModal";
import DatePicker from "../form/date-picker";

interface OptionType {
  value: string;
  label: string;
}

const RequestFormDetails: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "",
    startDate: "",
    dueDate: "",
    category: "",
    asset: "",
    primaryWorker: "",
    team: ""
  });

  const {
    isOpen: isModalRequestDeclineOpen,
    openModal: openModalRequestDecline,
    closeModal: closeModalRequestDecline,
  } = useModal();

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const priorityOptions: OptionType[] = [
    { value: "low", label: "Low" },
    { value: "medium", label: "Medium" },
    { value: "high", label: "High" },
    { value: "urgent", label: "Urgent" }
  ];

  const categoryOptions: OptionType[] = [
    { value: "maintenance", label: "Maintenance" },
    { value: "repair", label: "Repair" },
    { value: "inspection", label: "Inspection" },
    { value: "installation", label: "Installation" }
  ];

  const assetOptions: OptionType[] = [
    { value: "asset1", label: "Asset 1" },
    { value: "asset2", label: "Asset 2" },
    { value: "asset3", label: "Asset 3" }
  ];

  const workerOptions: OptionType[] = [
    { value: "worker1", label: "Worker 1" },
    { value: "worker2", label: "Worker 2" },
    { value: "worker3", label: "Worker 3" }
  ];

  const teamOptions: OptionType[] = [
    { value: "team1", label: "Team 1" },
    { value: "team2", label: "Team 2" },
    { value: "team3", label: "Team 3" }
  ];

  return (
    <div className="w-full">
      {/* Header with Details Tab */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <div className="flex space-x-8">
            <div className="border-b-2 border-blue-600 pb-2">
              <span className="text-blue-600 font-medium">Details</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-6">
        {/* Title Field */}
        <div className="space-y-2">
          <Label htmlFor="title">
            Title <span className="text-red-500">*</span>
          </Label>
          <Input
            id="title"
            name="title"
            placeholder="Enter title"
            value={formData.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            className="w-full"
          />
        </div>

        {/* Description Field */}
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <TextArea
            placeholder="Enter description"
            rows={4}
            value={formData.description}
            onChange={(value) => handleInputChange("description", value)}
            className="w-full resize-none"
          />
        </div>

        {/* Priority Field */}
        <div className="space-y-2">
          <Label htmlFor="priority">Priority</Label>
          <Select
            options={priorityOptions}
            placeholder="Select priority"
            onChange={(value) => handleSelectChange("priority", value)}
            className="w-full"
          />
        </div>

        {/* Image Upload Section */}
        <div className="space-y-2">
          <Label>Image</Label>
          <UpFile10 onFilesSelected={(files) => console.log("Image files selected:", files)} />
        </div>

        {/* Start Date and Due Date */}
        <div className=" grid grid-cols-1 md:flex md:gap-2 gap-2">
                      <div className="w-full">
                        <DatePicker
                          id="date-picker"
                          label="Date Start"
                          placeholder="Select a date"
                          onChange={(dates, currentDateString) => {

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

                            console.log({ dates, currentDateString });
                          }}
                        />
                      </div>
                    </div>

        {/* Category and Asset */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Category</Label>
            <Select
              options={categoryOptions}
              placeholder="Select category"
              onChange={(value) => handleSelectChange("category", value)}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label>Asset</Label>
            <Select
              options={assetOptions}
              placeholder="Select asset"
              onChange={(value) => handleSelectChange("asset", value)}
              className="w-full"
            />
          </div>
        </div>

        {/* Primary Worker and Team */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Primary Worker</Label>
            <Select
              options={workerOptions}
              placeholder="Select worker"
              onChange={(value) => handleSelectChange("primaryWorker", value)}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label>Team</Label>
            <Select
              options={teamOptions}
              placeholder="Select team"
              onChange={(value) => handleSelectChange("team", value)}
              className="w-full"
            />
          </div>
        </div>

        {/* Files Upload Section */}
        <div className="space-y-2">
          <Label>Files</Label>
          <UpFile10 onFilesSelected={(files) => console.log("Files selected:", files)} />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-gray-200">
        <button
          type="button"
          className="w-full sm:w-auto px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          onClick={openModalRequestDecline}
        >
          Decline Request
        </button>

        <button
          type="button"
          className="w-full sm:w-auto px-6 py-3 bg-white text-green-600 border-2 border-green-600 rounded-lg hover:bg-green-50 transition-colors"
        >
          Save Without Approving
        </button>

        <button
          type="button"
          className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Approve Request
        </button>
      </div>
      <ModalRequestDecline
        isOpen={isModalRequestDeclineOpen}
        onClose={closeModalRequestDecline}
      />
    </div>
  );
};

export default RequestFormDetails;

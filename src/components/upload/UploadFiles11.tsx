import React, { useRef } from "react";
// import UserProfiles from "../../pages/UserProfiles";

interface UploadFiles11Props {
  onFilesSelected?: (files: FileList) => void;
}

export default function UploadFiles11({ onFilesSelected }: UploadFiles11Props) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && onFilesSelected) {
      onFilesSelected(event.target.files);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <label
        className="flex flex-col w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
        onClick={handleClick}
      >
        <div className="flex flex-col items-center justify-center pt-2 pb-2">
          <span className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={handleClick}
              className="border border-[#333333] bg-white h-10 px-4 rounded-[5px]"
            >
              Upload
            </button>
            or Drop Images
          </span>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          multiple
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
}

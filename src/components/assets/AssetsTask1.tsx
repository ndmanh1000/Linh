import AssetsTask1Header from "./ui-assets-task1/AssetsTask1Header";
import { useState } from "react";

export default function AssetsTask1() {

    const [activeTab, setActiveTab] = useState("People");

  return <div className="w-full flex flex-col gap-4 md:gap-6s">
   
    <AssetsTask1Header/>
    <div className="w-full border-b border-[#F3F3F3]" />
    <div className="w-full flex items-center justify-between">
        <div><div>
            {" "}
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
          </div>  <div className="mt-4 p-4 ">
        {activeTab === "work-order" && (
          <div className="flex flex-col md:gap-3 gap-3">
           vferwfr
          </div>
        )}

        {activeTab === "details" && (
         <div>fwnekfbewh</div>
        )}
        
        {activeTab === "part" && (
         <div>part</div>
        )}
        
        {activeTab === "file" && (
         <div>file</div>
        )}
      </div></div>
        <div>2fewhgf vg</div>
    </div>
  </div>;
}
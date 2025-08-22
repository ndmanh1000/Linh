import React, { useState } from "react";
import ModalRequestDetails from "../modal/ModalRequestDetails";

interface Request {
  id: string;
  title: string;
  asset: string;
  status: {
    text: string;
    color: string;
    bgColor: string;
  };
  workOrderStatus: string;
  submittedCreated: string;
  category: string;
  submittedBy: string;
  priority: string;
  workOrder: string;
  isSelected?: boolean;
}

const requests: Request[] = [
  {
    id: "1",
    title: "Linh",
    asset: "ABC",
    status: {
      text: "Declined",
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    workOrderStatus: "Open",
    submittedCreated: "07/01/25 - 02:23...",
    category: "ABC",
    submittedBy: "Tran Linh",
    priority: "",
    workOrder: "007"
  },
  {
    id: "2",
    title: "Linh",
    asset: "ABC",
    status: {
      text: "Approved",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    workOrderStatus: "Open",
    submittedCreated: "07/01/25 - 02:23...",
    category: "ABC",
    submittedBy: "Tran Linh",
    priority: "",
    workOrder: "007"
  },
  {
    id: "3",
    title: "Linh",
    asset: "ABC",
    status: {
      text: "Declined",
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    workOrderStatus: "Open",
    submittedCreated: "07/01/25 - 02:23...",
    category: "ABC",
    submittedBy: "Tran Linh",
    priority: "",
    workOrder: "007"
  },
  {
    id: "4",
    title: "Linh",
    asset: "ABC",
    status: {
      text: "Declined",
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    workOrderStatus: "Open",
    submittedCreated: "07/01/25 - 02:23...",
    category: "ABC",
    submittedBy: "Tran Linh",
    priority: "",
    workOrder: "007"
  }
];

const RequestTable: React.FC = () => {
  const [selectedRequests, setSelectedRequests] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRequests([]);
    } else {
      setSelectedRequests(requests.map(request => request.id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectRequest = (requestId: string) => {
    if (selectedRequests.includes(requestId)) {
      setSelectedRequests(selectedRequests.filter(id => id !== requestId));
    } else {
      setSelectedRequests([...selectedRequests, requestId]);
    }
  };

  const handleRowClick = (request: Request) => {
    setSelectedRequest(request);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRequest(null);
  };

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200">
      {/* Table Container with Horizontal Scroll */}
      <div className="overflow-x-auto">
        <div className="min-w-[1000px] lg:min-w-[1300px] xl:min-w-[1500px]">
          {/* Table Header */}
          <div className="bg-gray-50 px-3 sm:px-4 md:px-6 py-3 sm:py-4 border-b border-gray-200">
            <div className="grid grid-cols-10 gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm font-medium text-gray-700">
              <div className="col-span-1 min-w-[120px] sm:min-w-[140px] flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span>Title</span>
              </div>
              <div className="col-span-1 min-w-[80px] sm:min-w-[100px]">Image</div>
              <div className="col-span-1 min-w-[80px] sm:min-w-[100px]">Asset</div>
              <div className="col-span-1 min-w-[100px] sm:min-w-[120px]">Status</div>
              <div className="col-span-1 min-w-[140px] sm:min-w-[160px]">Work Order Status</div>
              <div className="col-span-1 min-w-[140px] sm:min-w-[160px]">Submitted Created</div>
              <div className="col-span-1 min-w-[100px] sm:min-w-[120px]">Category</div>
              <div className="col-span-1 min-w-[120px] sm:min-w-[140px]">Submitted By</div>
              <div className="col-span-1 min-w-[80px] sm:min-w-[100px]">Priority</div>
              <div className="col-span-1 min-w-[100px] sm:min-w-[120px]">Work Order</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {requests.map((request) => (
              <div 
                key={request.id} 
                className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => handleRowClick(request)}
              >
                <div className="grid grid-cols-10 gap-2 sm:gap-3 md:gap-4 items-center text-xs sm:text-sm">
                  {/* Title with Checkbox */}
                  <div className="col-span-1 min-w-[120px] sm:min-w-[140px] flex items-center gap-2">
                    <div onClick={(e) => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        checked={selectedRequests.includes(request.id)}
                        onChange={() => handleSelectRequest(request.id)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                    </div>
                    <span className="text-gray-900">{request.title}</span>
                  </div>

                  {/* Image */}
                  <div className="col-span-1 min-w-[80px] sm:min-w-[100px]">
                    <button className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-300 transition-colors">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>

                  {/* Asset */}
                  <div className="col-span-1 min-w-[80px] sm:min-w-[100px]">
                    <span className="text-gray-700">{request.asset}</span>
                  </div>

                  {/* Status */}
                  <div className="col-span-1 min-w-[100px] sm:min-w-[120px]">
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${request.status.bgColor} ${request.status.color} whitespace-nowrap`}>
                      {request.status.text}
                    </span>
                  </div>

                  {/* Work Order Status */}
                  <div className="col-span-1 min-w-[140px] sm:min-w-[160px]">
                    <span className="text-gray-700">{request.workOrderStatus}</span>
                  </div>

                  {/* Submitted Created */}
                  <div className="col-span-1 min-w-[140px] sm:min-w-[160px]">
                    <span className="text-gray-700">{request.submittedCreated}</span>
                  </div>

                  {/* Category */}
                  <div className="col-span-1 min-w-[100px] sm:min-w-[120px]">
                    <span className="text-gray-700">{request.category}</span>
                  </div>

                  {/* Submitted By */}
                  <div className="col-span-1 min-w-[120px] sm:min-w-[140px]">
                    <span className="text-gray-700">{request.submittedBy}</span>
                  </div>

                  {/* Priority */}
                  <div className="col-span-1 min-w-[80px] sm:min-w-[100px]">
                    <span className="text-gray-700">{request.priority}</span>
                  </div>

                  {/* Work Order */}
                  <div className="col-span-1 min-w-[100px] sm:min-w-[120px]">
                    <span className="text-blue-600 font-medium cursor-pointer hover:text-blue-800">
                      {request.workOrder}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Modal Request Details */}
      <ModalRequestDetails 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default RequestTable;

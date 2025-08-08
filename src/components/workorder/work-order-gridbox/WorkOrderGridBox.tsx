import GridBox from "./ui/GridBox";

export default function WorkOrderGridBox() {
  const workOrders = [
    {
      woNumber: "WO #001",
      statusText: "Đang hoạt động",
      statusColor: "#73D13D",
      statusBg: "#F6FFED",
    },
    {
      woNumber: "WO #002",
      statusText: "Đang bảo dưỡng",
      statusColor: "#1890FF",
      statusBg: "#E6F7FF",
    },
    {
      woNumber: "WO #003",
      statusText: "Đang kiểm tra",
      statusColor: "#FAAD14",
      statusBg: "#FFFBE6",
    },
    {
      woNumber: "WO #004",
      statusText: "Quá tải",
      statusColor: "#FF4D4F",
      statusBg: "#FFF1F0",
    },
    // ... thêm các trạng thái khác
  ];

  return (
    <div className="w-full bg-white px-3 py-4 grid grid-cols-1 md:grid-cols-5 gap-4">
      {Array.from({ length: 10 }).map((_, index) => {
        const wo = workOrders[index % workOrders.length]; // lặp lại trạng thái nếu hết
        return (
          <GridBox
            key={index}
            woNumber={wo.woNumber}
            statusText={wo.statusText}
            statusColor={wo.statusColor}
            statusBg={wo.statusBg}
          />
        );
      })}
    </div>
  );
}

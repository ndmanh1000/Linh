import DataTable, { TableColumn, TableAction, StatusConfig } from "./DataTable";
import { FiEdit2, FiTrash2, FiEye } from "react-icons/fi";

// Example data
const exampleData = [
    {
        id: 1,
        name: "Máy A",
        location: "MES",
        barcode: "MES",
        serialNumber: "Monthly HVAC preventative...",
        description: "3",
        category: "Meter Reading",
        status: "High",
        paused: false,
        checklist: "Test 1",
    },
    {
        id: 2,
        name: "Máy B",
        location: "",
        barcode: "sdsfsd",
        serialNumber: "",
        description: "3",
        category: "Meter Reading",
        status: "None",
        paused: false,
        checklist: "Test 1",
    },
    {
        id: 3,
        name: "Máy C",
        location: "Suite B",
        barcode: "6863fb69392...",
        serialNumber: "kiểm tra máy điều hòa",
        description: "3",
        category: "Meter Reading",
        status: "Medium",
        paused: false,
        checklist: "Test 1",
    },
];

// Define columns
const columns: TableColumn[] = [
    {
        key: "name",
        label: "Name",
        sortable: true,
    },
    {
        key: "location",
        label: "Location",
    },
    {
        key: "barcode",
        label: "Barcode",
    },
    {
        key: "serialNumber",
        label: "Serial Number",
    },
    {
        key: "description",
        label: "Description",
    },
    {
        key: "category",
        label: "Category",
    },
    {
        key: "status",
        label: "Status",
    },
    {
        key: "paused",
        label: "Paused",
        render: (value: boolean) => value ? "Yes" : "No",
    },
    {
        key: "checklist",
        label: "Checklist",
        render: (value: string) => (
            <span className="text-blue-600 cursor-pointer hover:text-blue-800">
                {value}
            </span>
        ),
    },
];

// Define status configuration
const statusConfig: StatusConfig = {
    High: {
        text: "High",
        color: "error",
    },
    Medium: {
        text: "Medium",
        color: "warning",
    },
    Low: {
        text: "Low",
        color: "success",
    },
    None: {
        text: "None",
        color: "info",
    },
};

// Define actions
const actions: TableAction[] = [
    {
        label: "View",
        icon: <FiEye className="h-4 w-4" />,
        onClick: (row) => console.log("View", row),
    },
    {
        label: "Edit",
        icon: <FiEdit2 className="h-4 w-4" />,
        onClick: (row) => console.log("Edit", row),
    },
    {
        label: "Delete",
        icon: <FiTrash2 className="h-4 w-4" />,
        onClick: (row) => console.log("Delete", row),
        variant: "danger",
    },
];

export default function DataTableExample() {
    const handleRowClick = (row: any) => {
        console.log("Row clicked:", row);
    };

    const handleSelectionChange = (selectedRows: any[]) => {
        console.log("Selected rows:", selectedRows);
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">DataTable Example</h2>
            <DataTable
                data={exampleData}
                columns={columns}
                actions={actions}
                statusConfig={statusConfig}
                selectable={true}
                onRowClick={handleRowClick}
                onSelectionChange={handleSelectionChange}
                showActions={true}
                maxHeight="max-h-96"
                stickyHeader={true}
            />
        </div>
    );
}

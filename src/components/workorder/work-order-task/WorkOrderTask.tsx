import SortLabel from "./ui/SortLabel";
import { GridColumnIcon } from "../../../icons";
import WorkOrderSearch from "./ui/WorkOrderSearch";

export default function WorkOrderTask() {
  return (
    <div className="grid grid-cols-1 md:flex md:items-center md:justify-between gap-4 md:gap-8">
      <div className="text-sm md:text-base">11 Results Returned</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:items-center md:gap-6 lg:gap-10 gap-3">
        <div>
          <SortLabel />
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <GridColumnIcon />
          <p className="text-sm">Columns</p>
        </div>
        <div className="sm:col-span-2 md:col-span-1">
          <WorkOrderSearch />
        </div>
      </div>
    </div>
  );
}

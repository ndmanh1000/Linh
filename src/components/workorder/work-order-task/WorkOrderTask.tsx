import SortLabel from "./ui/SortLabel";
import { GridColumnIcon } from "../../../icons";
import WorkOrderSearch from "./ui/WorkOrderSearch";

export default function WorkOrderTask() {
  return (
    <div className=" grid grid-cols-1 md:flex md:items-center md:justify-between gap-8">
      <div>11 Results Returned</div>
      <div className=" grid grid-cols-1 md:flex items-center  md:gap-10 gap-4">
        <div>
          <SortLabel />
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <GridColumnIcon />
          <p>Columns </p>
        </div>
        <div>
          <WorkOrderSearch />
        </div>
      </div>
    </div>
  );
}

// src/components/schedule/ScheduleBox.tsx
import { useModal } from "../../hooks/useModal";
import ModalCalendar from "../modal/ModalCalendar";
import { CalenderIcon1, TimerIcon2, SettingIcon2 } from "../../icons";
import ModalMeterSchedule from "../modal/ModalMeterSchedule";
import ModalCalendarQr from "../modal/ModalCalendarQr";

export default function ScheduleBox({ closeBox }) {
  const {
    isOpen: isModalCalendarOpen,
    openModal: openModalCalendar,
    closeModal: closeModalCalendar,
  } = useModal();
  const {
    isOpen: isModalMeterScheduleOpen,
    openModal: openModalMeterSchedule,
    closeModal: closeModalMeterSchedule,
  } = useModal();
  const {
    isOpen: isModalCalendarQrOpen,
    openModal: openModalCalendarQr,
    closeModal: closeModalCalendarQr,
  } = useModal();

  const handleClickCalendar = () => {
    if (closeBox) closeBox(); // đóng box trước
    openModalCalendar(); // mở modal Calendar
  };

  return (
    <div className="absolute md:w-[700px] w-96 rounded-[8px] border border-[#D9D9D9] bg-white shadow-lg p-4 z-40">
      {/* Calendar */}
      <div
        className="flex items-start gap-3 px-4 py-3 hover:bg-blue-100 cursor-pointer"
        onClick={handleClickCalendar}
      >
        <CalenderIcon1 className="text-gray-600 mt-1" />
        <div>
          <p className="font-medium text-gray-800">Calendar</p>
          <p className="text-sm text-gray-500">
            WOs due regularly, or when the previous is completed
          </p>
        </div>
      </div>
      <div className="border-t border-gray-200"></div>

      {/* Meter readings */}
      <div
        className="flex items-start gap-3 px-4 py-3 hover:bg-blue-100 cursor-pointer"
        onClick={openModalMeterSchedule}
      >
        <TimerIcon2 className="text-gray-600 mt-1" />
        <div>
          <p className="font-medium text-gray-800">Meter readings</p>
          <p className="text-sm text-gray-500">
            Creates WOs when readings meet specific criteria
          </p>
        </div>
      </div>
      <div className="border-t border-gray-200"></div>

      {/* Calendar OR meter readings */}
      <div
        className="flex items-start gap-3 px-4 py-3 hover:bg-blue-100 cursor-pointer"
        onClick={openModalCalendarQr}
      >
        <SettingIcon2 className="text-gray-600 mt-1" />
        <div>
          <p className="font-medium text-gray-800">
            Calendar OR meter readings
          </p>
          <p className="text-sm text-gray-500">
            Uses both, based on whichever happens first
          </p>
        </div>
      </div>

      {/* Modal Calendar */}
      <ModalCalendar
        isOpen={isModalCalendarOpen}
        onClose={closeModalCalendar}
      />
      <ModalMeterSchedule
        isOpen={isModalMeterScheduleOpen}
        onClose={closeModalMeterSchedule}
      />
      <ModalCalendarQr
        isOpen={isModalCalendarQrOpen}
        onClose={closeModalCalendarQr}
      />
    </div>
  );
}

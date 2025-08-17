import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
  Textarea,
} from "flowbite-react";
import Select from "../form/Select";
import Label from "../form/Label";
import TextArea from "../form/input/TextArea";

export default function FormAdditionalInformation() {
  return (
    <Accordion>
      <AccordionPanel>
        <AccordionTitle>Additional Information</AccordionTitle>
        <AccordionContent>
          <div className="flex flex-col md:gap-3 gap-3 w-full">
            <div>
              <Label>Notes</Label>
              <Textarea />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm text-gray-700">Files</label>
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
            <div className="text-[#0071FF] cursor-pointer">
              Add from Saved Files
            </div>
          </div>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  );
}

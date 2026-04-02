import LocationPopup from "./LocationPopup";
import GuestPopup from "./GuestPopup";
import SchedulePopup from "./SchedulePopup";
import { popupType } from "../app/types";
import { XMarkIcon } from "@heroicons/react/24/solid";

type Props = {
    popup: popupType,
    popupHandler: (action: "none") => void
}

export default function PopupScreen({popup, popupHandler}: Props) {

    const p = false

    function renderStep(popup: Props["popup"]) {
            switch (popup) {
                case "location": 
                    return <LocationPopup />;
                case "schedule": 
                    return <SchedulePopup />;
                case "guest": 
                    return <GuestPopup />;           
            }
        }

    return (
        popup != "none" &&
            <div className="absolute inset-0 grid items-center justify-center">
                <div className="w-150 bg-white p-8 rounded-md shadow-[0px_5px_15px_rgba(0,0,0,0.35)]">
                    <div className="flex justify-end">
                        <XMarkIcon className="size-6 mb-4 cursor-pointer" onClick={() => {popupHandler("none")}} />
                    </div>
                    {renderStep(popup)}
                </div>
            </div>
        
    )
}
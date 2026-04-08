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
            <div className="absolute z-100 inset-0 w-screen h-screen max-[640px]:bg-white max-[640px]:py-5 min-[640px]:grid min-[640px]:items-center min-[640px]:justify-center">
                <div className="w-150 max-w-full mx-auto bg-white p-8 rounded-md min-[640px]:shadow-[0px_5px_15px_rgba(0,0,0,0.35)]">
                    <div className="flex justify-end">
                        <XMarkIcon className="size-6 mb-4 cursor-pointer" onClick={() => {popupHandler("none")}} />
                    </div>
                    {renderStep(popup)}
                </div>
            </div>
        
    )
}
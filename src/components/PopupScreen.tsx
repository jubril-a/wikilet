'use client'

import LocationPopup from "./LocationPopup";
import GuestPopup from "./GuestPopup";
import SchedulePopup from "./SchedulePopup";
import { popupType } from "../app/types";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { usePopupStore } from "../stores/popupsStore"
import { useEffect } from "react";

export default function PopupScreen() {

    const { seacrhPopup, setSeacrhPopup } = usePopupStore()

    useEffect(() => {
        if (seacrhPopup !== "none") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // cleanup (important)
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [seacrhPopup]);

    function renderStep(popup: popupType) {
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
        seacrhPopup != "none" &&
            <div className="fixed z-200 bg-black/40 backdrop-blur-xl py-4 inset-0 max-[640px]:bg-white max-[640px]:py-5 min-[640px]:grid min-[640px]:items-center max-h-screen overflow-scroll no-scrollbar min-[640px]:justify-center">
                <div className="w-150 max-w-full mx-auto bg-white p-8 rounded-md min-[640px]:shadow-[0px_5px_15px_rgba(0,0,0,0.35)]">
                    <div className="flex justify-end">
                        <XMarkIcon className="size-6 mb-4 cursor-pointer" onClick={() => {setSeacrhPopup("none")}} />
                    </div>
                    {renderStep(seacrhPopup)}
                </div>
            </div>
        
    )
}
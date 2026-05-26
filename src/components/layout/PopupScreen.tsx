'use client'

import LocationPopup from "../../features/search/components/LocationPopup";
import GuestPopup from "@/src/features/search/components/GuestPopup";
import SchedulePopup from "@/src/features/search/components/SchedulePopup";
import AddReview from "../../features/review/components/AddReview";
import { popupType } from "../../app/types";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { usePopupStore } from "../../stores/popupsStore"
import { useEffect } from "react";

export default function PopupScreen() {

    const { popup, setPopup } = usePopupStore()

    useEffect(() => {
        if (popup !== "none") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // cleanup (important)
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [popup]);

    function renderStep(popup: popupType) {
            switch (popup) {
                case "location": 
                    return <LocationPopup />;
                case "schedule": 
                    return <SchedulePopup />;
                case "guest": 
                    return <GuestPopup />;   
                case "review":
                    return <AddReview />; 
            }
        }

    return (
        popup != "none" &&
            <div className="fixed z-200 bg-black/40 backdrop-blur-xl py-4 inset-0 max-[640px]:bg-white max-[640px]:py-5 min-[640px]:grid min-[640px]:items-center max-h-screen overflow-scroll no-scrollbar min-[640px]:justify-center">
                <div className="w-150 max-w-full mx-auto bg-white p-8 rounded-md min-[640px]:shadow-[0px_5px_15px_rgba(0,0,0,0.35)]">
                    <div className="flex justify-end">
                        <XMarkIcon className="size-6 mb-4 cursor-pointer" onClick={() => {setPopup("none")}} />
                    </div>
                    {renderStep(popup)}
                </div>
            </div>
        
    )
}
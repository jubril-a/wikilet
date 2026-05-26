import { create } from "zustand";
import { popupType } from "../app/types";

type PopupState = {
    popup: popupType,

    // actions
    setPopup: (value: popupType) => void;
};

export const usePopupStore = create<PopupState>((set) => ({
    
    popup: "none",

    // actions
    setPopup: (value) => set({ popup: value }),
    reset: () =>
    set({
        popup: "none",
    }),
}));
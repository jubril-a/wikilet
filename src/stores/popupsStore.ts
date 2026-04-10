import { create } from "zustand";
import { popupType } from "../app/types";

type PopupState = {
    seacrhPopup: popupType,

    // actions
    setSeacrhPopup: (value: popupType) => void;
   
};

export const usePopupStore = create<PopupState>((set) => ({
    
    seacrhPopup: "none",

    // actions
    setSeacrhPopup: (value) => set({ seacrhPopup: value }),
    reset: () =>
    set({
        seacrhPopup: "none",
    }),
}));
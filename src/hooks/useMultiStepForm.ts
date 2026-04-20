'use client'

import { useState, JSX } from "react";

export default function useMultiStepForm(steps: (() => JSX.Element)[]) {

    const [currentStep, setCurrentStep] = useState(0)

    function prev() {
        setCurrentStep(i => {
            if (i <= 0) return i
            return i -1
        }) 
    }

    function next() {
       setCurrentStep(i => {
        if (i >= steps.length - 1) return i
        return i + 1
       })
    }

    function goTo(i: number) {
        setCurrentStep(i)
    }

    return {
        steps,
        step: steps[currentStep],
        prev,
        next,
        goTo
    }
}
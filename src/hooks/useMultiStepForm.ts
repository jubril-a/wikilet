'use client'

import { useState, ReactElement } from "react";

export default function useMultiStepForm(steps: ReactElement[]) {

    const [currentStep, setCurrentStep] = useState(0)

    function prev() {
        setCurrentStep(i => {
            if (i <= 0) return i
            return i - 1
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
        CurrentStep: steps[currentStep],
        prev,
        next,
        goTo,
        currentStepIndex: currentStep
    }
}
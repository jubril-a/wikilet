'use client'

import Step1 from "./steps/Step1"
import Step2 from "./steps/Step2"
import Step3 from "./steps/Step3"
import Step4 from "./steps/Step4"
import Step5 from "./steps/Step5"
import Step6 from "./steps/Step6"
import Step7 from "./steps/Step7"
import Step8 from "./steps/Step8"
import Step9 from "./steps/Step9"
import Step10 from "./steps/Step10"
import NextButton from "./NextButton"
import { useState } from "react"
import Form from "next/form"

export default function MultiStepForm() {

    const [currentStep, setCurrentStep] = useState(1)

    function renderStep(step: number) {
        switch (step) {
            case 1: 
                return <Step1 />;
            case 2: 
                return <Step2 />;
            case 3: 
                return <Step3 />;
            case 4: 
                return <Step4 />  
             case 5: 
                return <Step5 />;
            case 6: 
                return <Step6 />;
            case 7: 
                return <Step7 />;
            case 8: 
                return <Step8 />
            case 9: 
                return <Step9 />;
            case 10: 
                return <Step10 />        
        }
    }

  return (
    <main className="max-w-300 mx-auto pt-36 px-4">
        <Form action={""} className="max-w-150 mx-auto">
            <div className="grid gap-6 w-full">
                {renderStep(currentStep)}
                <NextButton onClick={() => setCurrentStep(currentStep + 1)}/>
            </div>
        </Form>
    </main>
  )
}
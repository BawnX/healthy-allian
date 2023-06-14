'use client'
import { type ReactElement, useState } from 'react'

import DietFormProvider from '@/components/molecules/dietForm.context'
import FirstStepFormMolecule from '@/components/molecules/firstStepForm.molecule'

export default function RightSide (): ReactElement {
  const [formStep, setFormStep] = useState(0)
  // const { data } = useFormData()

  const nextFormStep = (): void => { setFormStep((currentStep: number) => currentStep + 1) }

  // const prevFormStep = (): void => { setFormStep((currentStep: number) => currentStep - 1) }

  return (
  <div className="lg:p-6">
    <DietFormProvider>
      {
        formStep === 0 && (
          <FirstStepFormMolecule
            formStep={formStep}
            nextFormStep={nextFormStep}
            wrapperClass={formStep === 0 ? 'grid grid-cols-2 w-full gap-4 mx-auto sm:w-[600px]' : 'hide'}
          />
        )
      }
      {
        formStep === 1 && (
          <h1>New</h1>
        )
      }
    </DietFormProvider>
  </div>
  )
}

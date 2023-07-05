'use client'
import { type ReactElement, useState } from 'react'
import Image from 'next/image'

import DietFormProvider from '@/components/molecules/dietForm.context'
import FirstStepFormMolecule from '@/components/molecules/firstStepForm.molecule'
import FinalStepFormMolecule from '@/components/molecules/finalStepForm.molecule'
import SideMolecule from '@/components/molecules/side.molecule'
import thinkingImage from '@/public/img/thinking.svg'
import analisysImage from '@/public/img/analisys.svg'

export default function MultiStep (): ReactElement {
  const [formStep, setFormStep] = useState(0)

  const nextFormStep = (): void => { setFormStep((currentStep: number) => currentStep + 1) }

  const prevFormStep = (): void => { setFormStep((currentStep: number) => currentStep - 1) }

  return (
    <DietFormProvider>
      {
        formStep === 0 && (
          <>
            <SideMolecule
              text="Nisi mollit et irure magna nisi ut in aliquip ut incididunt minim anim."
              wrapperClass="relative lg:flex p-10"
            >
              <Image
                src={thinkingImage}
                alt="Picture of the author"
                style={{
                  width: '40%',
                  height: 'auto'
                }}
              />
            </SideMolecule>
            <FirstStepFormMolecule
              formStep={formStep}
              nextFormStep={nextFormStep}
              wrapperClass={formStep === 0 ? 'lg:p-6 grid grid-cols-2 w-full gap-4 mx-auto sm:w-[600px]' : 'hide'}
            />
          </>
        )
      }
      {
        formStep === 1 && (
          <>
            <FinalStepFormMolecule
              formStep={formStep}
              prevFormStep={prevFormStep}
              wrapperClass={formStep > 0 ? '' : 'hide'}
            />

              <SideMolecule
              text="Nisi mollit et irure magna nisi ut in aliquip ut incididunt minim anim."
              wrapperClass="relative lg:flex p-10"
            >
              <Image
                src={analisysImage}
                alt="Picture of the author"
                style={{
                  width: '70%',
                  height: 'auto'
                }}
              />
            </SideMolecule>
          </>
        )
      }
    </DietFormProvider>
  )
}

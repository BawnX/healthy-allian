
import { type ReactElement } from 'react'
import { Progress } from '@/components/ui/progress'
import LogoAtom from '@/components/atoms/logo.atom'

interface IFinalStepForm {
  wrapperClass: string
}

export default function FinalStepForm ({ wrapperClass }: IFinalStepForm): ReactElement {
  return (
    <>
      <section className={`h-full text-black p-10 ${wrapperClass}`}>
        <div className="absolute inset-0 bg-coverflex h-screen w-full justify-center items-center">
        </div>

        <LogoAtom isDark={false}/>

        <div>
          <Progress value={45} />
        </div>
      </section>
    </>
  )
}

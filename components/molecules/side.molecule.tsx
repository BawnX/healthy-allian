import { type ReactElement } from 'react'
import LogoAtom from '@/components/atoms/logo.atom'

export interface ISide {
  children: any
  text: string
  wrapperClass: string
}

export default function Side ({ children, text, wrapperClass }: ISide): ReactElement {
  return (
        <section className={`h-full flex-col text-white dark:border-r ${wrapperClass}`}>
          <div className="absolute inset-0 bg-cover bg-gray-700 flex h-screen w-full justify-center items-center">
            {children}
          </div>

          <LogoAtom isDark={true}/>

          <div className="relative z-20 mt-auto">
            {text}
          </div>
        </section>
  )
}

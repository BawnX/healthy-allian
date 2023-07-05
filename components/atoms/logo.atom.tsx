import { type ReactElement } from 'react'
import Image from 'next/image'
import logoDarkImage from '@/public/img/logo-dark.svg'
import logoLigthImage from '@/public/img/logo.svg'

interface ILogoAtom {
  isDark: boolean
}

export default function LogoAtom ({ isDark }: ILogoAtom): ReactElement {
  return (
    <div className="relative z-20 flex items-center text-lg font-medium">
      <Image
        src={isDark ? logoDarkImage : logoLigthImage}
        alt="Picture of the author"
        className="mr-2 h-12 w-12"
      />
      Allian
    </div>
  )
}

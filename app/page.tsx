import MultiStep from '@/components/organisms/multiStep'
import { type ReactNode } from 'react'

export default function Home (): ReactNode {
  return (
    <main className="h-screen relative flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <MultiStep />
    </main>
  )
}

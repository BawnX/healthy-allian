import LeftSide from '@/components/organisms/leftSide'
import RightSide from '@/components/organisms/rightSide'

export default function Home (): ReactNode {
  return (
    <main className="h-screen relative flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <LeftSide />

      <RightSide />
    </main>
  )
}

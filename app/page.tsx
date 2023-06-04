import LeftSide from '@/components/organisms/leftSide'
import RightSide from '@/components/organisms/rightSide'

export default function Home() {
  return (
    <main className="h-screen container relative hidden flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <LeftSide />
      
      <RightSide />
    </main>
  )
}

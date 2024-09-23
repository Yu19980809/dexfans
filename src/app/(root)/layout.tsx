import { redirect } from 'next/navigation'

import Actions from '@/components/layout/actions'
import Sidebar from '@/components/layout/sidebar'
import MobileSidebar from '@/components/layout/mobile-sidebar'

type Props = {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => {
  let isLogin = true
  if (!isLogin) redirect('/login')

  return (
    <div className="h-screen">
      <div className="flex justify-center items-center h-full mx-auto">
        <Sidebar />
        <MobileSidebar />

        <main className="max-w-3xl w-full h-full md:w-2/3 md:border-l lg:w-1/2 lg:border-x">
          {children}
        </main>

        <Actions />
      </div>
    </div>
  )
}

export default RootLayout

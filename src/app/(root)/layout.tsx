import { redirect } from 'next/navigation'

import Sidebar from '@/components/layout/sidebar'
import Actions from '@/components/layout/actions'
import PostButton from '@/components/layout/mobile/post-button'

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
        <PostButton />

        <main className="max-w-2xl w-full md:w-2/3 lg:w-1/2 h-full border-x border-gray-300 dark:border-gray-700">
          {children}
        </main>

        <Actions />
      </div>
    </div>
  )
}

export default RootLayout

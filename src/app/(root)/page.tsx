'use client'

import { PostListType } from '@/lib/types'
import useTabType from '@/store/use-tab-type'
import Editor from '@/components/common/editor'
import PostList from '@/components/main/post-list'
import HeaderTab from '@/components/main/header-tab'
import Topbar from '@/components/layout/mobile/topbar'
import { ScrollArea } from '@/components/ui/scroll-area'

const Home = () => {
  const { isSubscribing } = useTabType()
  const type = isSubscribing ? PostListType.SUBSCRIBING : PostListType.FOR_YOU

  return (
    <div className="relative h-full">
      <Topbar />
      <HeaderTab />

      <ScrollArea>
        <Editor />
        <PostList type={type} />
      </ScrollArea>
    </div>
  )
}

export default Home

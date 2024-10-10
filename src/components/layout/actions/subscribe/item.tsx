'use client'

import Link from 'next/link'
import { useState } from 'react'
import toast from 'react-hot-toast'

import { cn } from '@/lib/utils'
import { User } from '@/lib/types'
import AvatarItem from '@/components/common/avatar'
import Loader from '@/components/common/loader'
import { Button } from '@/components/ui/button'

type Props = {
  data: User
  showAll?: boolean
}

const SubscribeItem = ({ data, showAll = false }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onSubscribe = (id: string) => {
    setIsLoading(true)

    setTimeout(() => {
      toast.success('subscribe succeed')
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="flex justify-between items-center">
      <Link href={`/users/${data.user_id}`} className="flex items-center gap-x-2 cursor-pointer">
        <AvatarItem user={data}/>

        <div className="flex flex-col">
          <span className={cn('font-semibold truncate', showAll ? 'max-w-[400px]' : 'max-w-[100px]')}>
            {data.username}
          </span>

          <span className="text-xs text-muted-foreground">
            @dex_fans
          </span>
        </div>
      </Link>

      <Button
        onClick={() => onSubscribe(data.user_id)}
        size="sm"
        disabled={isLoading}
        className="rounded-full md:text-xs xl:h-9 xl:px-3 xl:text-sm"
      >
        {isLoading ? <Loader /> : 'Subscribe'}
      </Button>
    </div>
  )
}

export default SubscribeItem

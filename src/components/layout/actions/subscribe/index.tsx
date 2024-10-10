import Link from 'next/link'

import { User } from '@/lib/types'
import SubscribeItem from './item'

type Props = {
  data: User[]
  showAll?: boolean
}

const SubscribeList = ({ data, showAll = false }: Props) => {
  return (
    <div className="flex flex-col gap-y-4 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700">
      <p className="font-semibold text-xl">Who to subscribe</p>

      <div className="flex flex-col gap-y-3">
        {data.map(item => <SubscribeItem key={item.user_id} data={item} showAll={showAll} />)}
      </div>

      <Link
        href="/subscribe"
        className="text-sm text-sky-500 cursor-pointer hover:underline"
      >
        Show more
      </Link>
    </div>
  )
}

export default SubscribeList

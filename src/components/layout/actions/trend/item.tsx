import Link from 'next/link'

import { TTrend } from '@/lib/types'
import MoreButton from './more-button'

type Props = {
  data: TTrend
}

const TrendItem = ({ data }: Props) => {
  return (
    <div className="flex justify-between">
      <Link href="/trends" className="cursor-pointer">
        <p className="text-xs text-muted-foreground">{data.subtitle}</p>
        <p>{data.title}</p>
        <p className="text-xs text-muted-foreground">{data.postsNumber} posts</p>
      </Link>

      <MoreButton />
    </div>
  )
}

export default TrendItem

import Link from 'next/link'

import { TTrend } from '@/lib/types'
import TrendItem from './item'

type Props = {
  data: TTrend[]
}

const Trend = ({ data }: Props) => {
  return (
    <div className="flex flex-col gap-y-4 px-4 py-3 border rounded-xl">
      <p className="font-semibold text-xl">Trends for you</p>

      <div className="flex flex-col gap-y-4">
        {data.map((item, index) => <TrendItem key={index} data={item} />)}
      </div>

      <Link
        href="/trends"
        className="text-sm text-sky-500 cursor-pointer hover:underline"
      >
        Show more
      </Link>
    </div>
  )
}

export default Trend

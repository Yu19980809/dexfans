import Link from 'next/link'

const Trend = () => {
  return (
    <div className="space-y-4 px-4 py-3 border rounded-xl">
      <p className="font-semibold text-xl">Trends for you</p>

      <div className="flex flex-col gap-y-2">
        
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

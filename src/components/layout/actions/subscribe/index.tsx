import Link from 'next/link'

const SubscribeList = () => {
  return (
    <div className="space-y-4 px-4 py-3 border rounded-xl">
      <p className="font-semibold text-xl">Who to subscribe</p>

      <div className="flex flex-col gap-y-2">
        
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

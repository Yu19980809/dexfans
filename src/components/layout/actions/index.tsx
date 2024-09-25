import SearchBar from './search'
import SubscribeList from './subscribe'

const Actions = () => {
  return (
    <aside className="hidden lg:flex flex-col items-center gap-y-4 max-w-[300px] lg:w-1/4 h-full py-4">
      <SearchBar />
      <SubscribeList />
    </aside>
  )
}

export default Actions

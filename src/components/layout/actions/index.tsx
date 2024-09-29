import Links from './links'
import Trend from './trend'
import Upgrade from './upgrade'
import SearchBar from './search'
import SubscribeList from './subscribe'

const Actions = () => {
  return (
    <aside className="hidden lg:flex flex-col gap-y-4 max-w-[350px] lg:w-1/4 h-full pl-4 py-4">
      <SearchBar />
      <Upgrade />
      <Trend />
      <SubscribeList />
      <Links />
    </aside>
  )
}

export default Actions

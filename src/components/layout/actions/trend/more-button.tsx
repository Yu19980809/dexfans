import { Frown, MoreHorizontal } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

const MoreButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <MoreHorizontal className="size-8 p-2 rounded-full cursor-pointer hover:bg-secondary hover:text-sky-500" />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem>
          <div className="flex items-center gap-x-3 font-semibold cursor-pointer">
            <Frown className="size-4" />
            <p>Not interested in this</p>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <div className="flex items-center gap-x-3 font-semibold cursor-pointer">
            <Frown className="size-4" />
            <p>This trend is harmful or spammy</p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MoreButton

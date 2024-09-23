'use client'

import { usePathname } from 'next/navigation'
import { HiOutlineUser, HiUser } from 'react-icons/hi2'

import Logo from './logo'
import SidebarItem from './item'
import UserButton from './user-button'
import PostButton from './post-button'
import { SidebarLinks } from '@/lib/constants'

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <aside className="hidden md:flex flex-col justify-between items-center lg:items-start max-w-[240px] md:w-[72px] lg:w-1/4 h-full py-4 md:pr-4 lg:px-4">
      <div className="space-y-2">
        {/* <Logo /> */}

        {SidebarLinks.map(item => (
          <SidebarItem
            key={item.href}
            label={item.label}
            href={item.href}
            icon={item.icon}
            activeIcon={item.activeIcon}
            isActive={pathname.includes(item.href)}
          />
        ))}

        <SidebarItem
          label="Profile"
          href={`/`}
          icon={HiOutlineUser}
          activeIcon={HiUser}
          isActive={pathname.includes('/profile')}
        />

        <div className="mt-4">
          <PostButton />
        </div>
      </div>

      <UserButton />
    </aside>
  )
}

export default Sidebar

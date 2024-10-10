import { Settings } from 'lucide-react'
import { GoHome, GoHomeFill } from 'react-icons/go'
import { TbAward, TbAwardFilled } from 'react-icons/tb'
import { HiBellAlert, HiOutlineBellAlert } from 'react-icons/hi2'

import { PostType } from './types'

export const DAY_IN_MS = 86_400_000
export const AMOUNT_PER_PAGE = 10

export const SidebarLinks = [
  {
    label: 'Home',
    href: '/',
    icon: GoHome,
    activeIcon: GoHomeFill
  },
  {
    label: 'Notifications',
    href: '/notifications',
    icon: HiOutlineBellAlert,
    activeIcon: HiBellAlert
  },
  {
    label: 'Premium',
    href: '/premium',
    icon: TbAward,
    activeIcon: TbAwardFilled
  }
]

export const MobileSidebarLinks = [
  {
    label: 'Home',
    href: '/',
    icon: GoHome,
    activeIcon: GoHomeFill
  },
  {
    label: 'Notifications',
    href: '/notifications',
    icon: HiOutlineBellAlert,
    activeIcon: HiBellAlert
  },
  {
    label: 'Premium',
    href: '/premium',
    icon: TbAward,
    activeIcon: TbAwardFilled
  }
]

export const userOptions = [
  // {
  //   label: 'Profile',
  //   href: '/user/profile',
  //   icon: User
  // },
  {
    label: 'Settings',
    href: '/settings',
    icon: Settings
  }
]

export const links = [
  {
    label: 'Terms of Service',
    href: '/service'
  },
  {
    label: 'Privacy Policy',
    href: '/privacy'
  },
  {
    label: 'Cookie Policy',
    href: '/cookie'
  },
  {
    label: 'Ads info',
    href: '/ads'
  }
]

export const headerItems = [
  {
    label: 'For you'
  },
  {
    label: 'Subscribing'
  }
]

export const postOptions = [
  {
    label: 'Post as free content',
    value: PostType.FREE
  },
  {
    label: 'Post as silver content',
    value: PostType.SILVER
  },
  {
    label: 'Post as gold content',
    value: PostType.GOLD
  },
  {
    label: 'Post as platinum content',
    value: PostType.PLATINUM
  },
  {
    label: 'Post as paid content',
    value: PostType.PAID
  }
]

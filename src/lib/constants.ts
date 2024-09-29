import { Settings } from 'lucide-react'
import { GoHome, GoHomeFill } from 'react-icons/go'
import { TbAward, TbAwardFilled } from 'react-icons/tb'
import { HiBellAlert, HiOutlineBellAlert } from 'react-icons/hi2'

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

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

"use client"

import { MobileMenu } from '@/context/handleOpenMobileMenu'
import { MdMenu } from 'react-icons/md'

export function MobileMenuButton() {
  const { isOpen, switchVisibility } = MobileMenu()

  return (
    <button id='menu-button' onClick={() => switchVisibility(!isOpen)} className="p-2 rounded-md transition-colors duration-200 text-black hover:bg-light-gray" >
      <MdMenu size={24} />
    </button>
  )
}
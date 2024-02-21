"use client"

import Image from 'next/image'
import Link from 'next/link'

// eslint-disable-next-line import/no-absolute-path
import cmaLogo from '/public/assets/cma-extensive-logo.svg'
import { Menu } from './Menu'
import { CTAButton } from '../CTAButton'
import { MobileMenu } from '@/context/handleOpenMobileMenu'
import { MobileMenuButton } from './MobileMenuButton'
import { MobileSideMenu } from './MobileMenu'

export function Navbar() {
  const { isOpen } = MobileMenu()

  return (
    <header className="max-w-7xl w-full px-4 sm:px-8 md:px-12 mx-auto flex items-center justify-between pt-4">
      <div className="flex items-center gap-6">
        <Link href="/">
          <Image src={cmaLogo} alt="CMA Logo" />
        </Link>

        <div className="hidden slg:flex items-center gap-6">
          <div role="separator" className="w-[1px] h-4 bg-light-gray"></div>

          <Menu />
        </div>
      </div>

      <div className="hidden slg:block">
        <CTAButton title="Venha fazer parte" colorVariant="black" />
      </div>

      {/* Appears before 845px */}
      <div className="relative block slg:hidden" >
        <MobileMenuButton />

        { isOpen ? ( <MobileSideMenu /> ) : null }
      </div>
    </header>
  )
}

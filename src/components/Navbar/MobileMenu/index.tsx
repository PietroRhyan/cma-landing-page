"use client"

import { MobileMenu } from "@/context/handleOpenMobileMenu"
import Link from "next/link"

interface MenuItemType {
  name: string
  section: string
}

const menus: MenuItemType[] = [
  {
    name: 'Sobre nós',
    section: '/#sobre',
  },
  {
    name: 'Artistas',
    section: '/#artistas',
  },
  {
    name: 'FAQ',
    section: '/#faq',
  },
  {
    name: 'Contato',
    section: '/#contato',
  },
]

export function MobileSideMenu() {
  const { switchVisibility } = MobileMenu()

  return (
    <div role="dialog" className="w-[225px] p-3 z-50 absolute top-[56px] right-0 bg-[#FFF] rounded-lg shadow-float-thin border border-light-gray" >
      <h4 className="text-sm font-normal mb-1">Sessões</h4>

      <menu className="flex flex-col">
        {menus.map((menu) => (
          <Link onClick={() => switchVisibility(false)} key={menu.section} href={menu.section}>
            <li className="py-2 px-2 text-sm font-medium border-b border-light-gray">
              {menu.name}
            </li>
          </Link>
        ))}

        <Link onClick={() => switchVisibility(false)} href='#contato' className="flex items-center justify-center border mt-2 text-white bg-black rounded-lg transition-opacity duration-200 hover:bg-opacity-95 font-semibold py-2" >Venha fazer parte</Link>
      </menu>
    </div>
  )
}
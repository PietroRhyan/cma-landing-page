import Link from 'next/link'

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

export function Menu() {
  return (
    <menu className="flex items-center justify-center gap-[6px]">
      {menus.map((menu) => (
        <Link key={menu.section} href={menu.section}>
          <li className="py-2 px-3 text-sm font-medium transition-colors duration-200 hover:bg-light-gray rounded-[4px]">
            {menu.name}
          </li>
        </Link>
      ))}
    </menu>
  )
}

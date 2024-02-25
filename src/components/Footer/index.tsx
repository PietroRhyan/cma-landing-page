import Link from 'next/link'
import Image from 'next/image'

// eslint-disable-next-line import/no-absolute-path
import cmaLogo from '/public/assets/cma-extensive-logo.svg'

interface FooterMenuType {
  name: string
  link: string
}

const sessions: FooterMenuType[] = [
  {
    name: 'Sobre nós',
    link: '/#sobre',
  },
  {
    name: 'Artistas',
    link: '/#artistas',
  },
  {
    name: 'Perguntas Frequentes',
    link: '/#faq',
  },
  {
    name: 'Contato',
    link: '/#contato',
  },
]

// const importants: FooterMenuType[] = [
//   {
//     name: 'Documentação',
//     link: '/',
//   },
//   {
//     name: 'Lorem Ipsun',
//     link: '/',
//   },
//   {
//     name: 'Lorem Ipsum',
//     link: '/',
//   },
//   {
//     name: 'Lorem',
//     link: '/',
//   },
// ]

// const resources: FooterMenuType[] = [
//   {
//     name: 'Suporte',
//     link: '/',
//   },
//   {
//     name: 'Fórum',
//     link: '/',
//   },
//   {
//     name: 'Eventos',
//     link: '/',
//   },
// ]

export function Footer() {
  return (
    <footer className="w-full border-t border-light-gray mt-16 ">
      <div className="max-w-7xl w-full mx-auto pt-4 px-4 sm:px-8 sm:pt-8 md:pt-12 md:px-12 space-y-12">
        <div className="w-full flex flex-col sm:flex-row items-center sm:items-start sm:justify-start gap-[32px] md:gap-[60px] ld:gap-[100px]">
          <Link href="/">
            <div className="w-[200px]">
              <Image src={cmaLogo} alt="CMA Logo" />
            </div>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 ">
            <div className="flex min-w-[200px] flex-col items-start gap-6">
              <h4 className="text-base font-bold">SESSÕES</h4>

              <menu className="flex flex-col gap-3">
                {sessions.map((session) => (
                  <Link href={session.link} key={session.name}>
                    <li className="text-base text-dark-gray font-medium transition-colors duration-200 hover:text-black">
                      {session.name}
                    </li>
                  </Link>
                ))}
              </menu>
            </div>
          </div>
        </div>

        <div className="border-t border-light-gray w-full flex items-center justify-between py-8">
          <p className="text-xs font-normal text-dark-gray">
            &copy; Copyright 2024, All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

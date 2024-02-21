import Link from 'next/link'

interface CTAButtonProps {
  title: string
  colorVariant: 'black' | 'yellow'
}

export function CTAButton({ title, colorVariant }: CTAButtonProps) {
  return (
    <Link
      href="/#contato"
      className={`rounded-lg py-3 px-5 font-semibold text-base shadow-thin transition-all duration-200 hover:bg-opacity-95 ${colorVariant === 'black' ? 'text-white bg-black' : 'text-black bg-yellow'}`}
    >
      {title}
    </Link>
  )
}

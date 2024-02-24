import Image from 'next/image'

interface ArtistsCardProps {
  name: string
  imageUrl: string
  description: string
}

export function ArtistsCard({ name, imageUrl, description }: ArtistsCardProps) {
  return (
    <div className="bg-white border border-light-gray rounded-lg shadow-float-thin p-2 max-w-[294px] md:max-w-[390px] w-full md:min-h-[134px] flex flex-col items-center md:flex-row md:items-start gap-3" >
      <div className="min-w-[118px] min-h-[118px] relative rounded-[4px] overflow-hidden" >
        <Image src={imageUrl} alt={name} fill quality={100} sizes='(max-width: 976px) 100vw, 30vw' className='object-cover'/>
      </div>

      <div className='flex flex-col items-center md:items-start md:justify-start pt-1 gap-1 md:gap-0' >
        <h5 className="text-base font-semibold" >
          {name}
        </h5>

        <p className='text-sm font-medium text-gray' >
          {description}
        </p>
      </div>
    </div>
  )
}
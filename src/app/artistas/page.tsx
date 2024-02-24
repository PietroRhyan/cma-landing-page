'use client'

import { ArtistsCard } from "@/components/ArtistsCard"
import { getAllArtists } from "@/utils/graphql/getAllArtists"

import { useQuery } from "@tanstack/react-query"
import { FaSpinner } from 'react-icons/fa'

export default function Artistas() {
  async function getArtists() {
    const artists = await getAllArtists()
    return artists
  }

  const { data, isLoading } = useQuery({
    queryKey: ['artist'],
    queryFn: getArtists,
  })

  return (
    <main className="min-h-[535px] max-w-7xl w-full px-4 sm:px-8 md:px-12 py-12 mx-auto flex flex-col items-center gap-8" >
      <h2 className="relative inline underline-lastline text-poppins font-medium text-2xl sm:text-[32px] text-center">Artistas que fazem parte do nosso time</h2>

      {isLoading ? (
        <div className="flex items-center justify-center text-gray animate-spin" >
          <FaSpinner size={18} />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 gap-y-8" >
          {data?.map((artist) => (
            <ArtistsCard
              name={artist.nomeArtista}
              imageUrl={artist.imagemArtista.url}
              description={artist.descricaoArtista}
              key={artist.nomeArtista}
            />
          ))}
        </div>
      )}
    </main>
  )
}
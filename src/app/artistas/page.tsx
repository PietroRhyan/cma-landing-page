import { ArtistsCard } from "@/components/ArtistsCard"

interface ArtistsType {
  name: string
  imageUrl: string
  description: string
}

const artists: ArtistsType[] = [
  {
    name: "Raquel dos Teclados",
    imageUrl: "/images/raquel-dos-teclados.jpg",
    description: "A Rainha da Sofrência emplacou diversos hits e se tornou um fenômeno do gênero.",
  },
  {
    name: "Toque Dez",
    imageUrl: "/images/toque-dez.jpg",
    description: "A Banda Toque Dez tem conseguido muitos ouvintes e gerado muitos hits, com mais de 300M de views no Youtube..",
  },
  {
    name: "Romeu",
    imageUrl: "/images/romeu.jpg",
    description: "O astro do arrocha melódico vem se destacando cada vez mais e se tornou o cantor mais ouvido do Pará.",
  },
  {
    name: "Chicão do Piseiro",
    imageUrl: "/images/chicao-do-piseiro.jpg",
    description: "O novo nome do piseiro, Chicão vem fazendo um sucesso estrondoso, com mais de 30M de views só no Youtube.",
  },
  {
    name: "Pisadinha do Vaqueiro",
    imageUrl: "/images/pisadinha-do-vaqueiro.jpg",
    description: "A banda está em acelerada ascenção, lotando shows e contando com mais de 300mil ouvintes mensais no Spotify.",
  },
  {
    name: "Banda Lapada de Amor",
    imageUrl: "/images/lapada-de-amor.png",
    description: "Uma das melhores bandas de forró românticas, já produziu várias músicas de sucesso e conta com 10M de views no Youtube.",
  },
]

export default function Artistas() {
  return (
    <main className="min-h-[535px] max-w-7xl w-full px-4 sm:px-8 md:px-12 py-12 mx-auto flex flex-col items-center gap-8" >
      <h2 className="relative inline underline-lastline text-poppins font-medium text-2xl sm:text-[32px] text-center">Artistas que fazem parte do nosso time</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 gap-y-8" >
        {artists.map((artist) => (
          <ArtistsCard
            name={artist.name}
            imageUrl={artist.imageUrl}
            description={artist.description}
            key={artist.name}
          />
        ))}
      </div>

      <button className="font-semibold text-sm slg:text-base px-3 py-2 rounded-md bg-white border border-light-gray shadow-thin transition-all duration-200 hover:bg-zinc-100" >
        Carregar mais
      </button>
    </main>
  )
}
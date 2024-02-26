import { graphcms } from '@/services/api'
import { gql } from 'graphql-request'

export interface ArtistCardType {
  id: string
  imagemArtista: {
    url: string
  }
  nomeArtista: string
  descricaoArtista: string
}

export interface ArtistsType {
  artistCards: ArtistCardType[]
}

const query = gql`
  {
    artistCards {
      id
      imagemArtista {
        url
      }
      nomeArtista
      descricaoArtista
    }
  }
`

export async function getAllArtists() {
  const { artistCards }: ArtistsType = await graphcms.request(query)
  return artistCards
}

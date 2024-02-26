import { graphcms } from '@/services/api'
import { gql } from 'graphql-request'
import { ArtistsType } from './getAllArtists'

const query = gql`
  {
    artistCards(first: 6) {
      id
      imagemArtista {
        url
      }
      nomeArtista
      descricaoArtista
    }
  }
`

export async function getFirstArtists() {
  const { artistCards }: ArtistsType = await graphcms.request(query)
  return artistCards
}

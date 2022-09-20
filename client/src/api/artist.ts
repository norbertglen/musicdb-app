import {DeeverRequest} from './request'

export function getArtist(id: number) {
  return DeeverRequest.get(`/artists/${id}`)
}


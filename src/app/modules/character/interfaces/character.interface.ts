export interface ICharacter {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string | null,
  gender: string,
  origin: {
    name: string,
    url: string | null
  },
  location: {
    name: string
    url: string
  },
  image: string,
  episode: string[],
  url: string,
  created: string
}

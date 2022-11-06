import {environment} from "../../environments/environment";

const {RickAndMortyAPI} = environment;

export const urls = {
  episode: `${RickAndMortyAPI}/episode`,
  character: `${RickAndMortyAPI}/character`
}

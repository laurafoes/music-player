import { Artist, Img } from "./Artists"

export interface Tracks {
    id: string,
    name: string,
    artists: Artist[],
    album: {
        images: Img[]
    }
}
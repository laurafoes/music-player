export interface Img {
    height: number;
    url: string;
    width: number;
}

export interface Artist {
  id: string;
  name: string;
  genres: string[];
  images: Img[];
}
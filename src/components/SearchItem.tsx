import { Artist } from "../interfaces/Artists";
import { Tracks } from "../interfaces/Tracks";
import ArtistInfo from "./ArtistInfo";
import TracksInfo from "./TracksInfo";

interface SearchItemProps {
  artist?: Artist;
  getArtistTracks?: (id:string) => Promise<void>,
  track?: Tracks,
}

function SearchItem({ artist, getArtistTracks, track }: SearchItemProps) {
  
  return (
    <>
      { artist && getArtistTracks !== undefined ? 
        <ArtistInfo artist={artist} getArtistTracks={getArtistTracks} />
        :  track !== undefined ? <TracksInfo track={track} /> : null
      }
    </>

  );
}

export default SearchItem;

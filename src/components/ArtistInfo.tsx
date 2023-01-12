import { CgUnavailable } from 'react-icons/cg'
import { Artist } from '../interfaces/Artists';

interface ArtistInfoProps {
    artist: Artist;
    getArtistTracks: (id:string) => Promise<void>,

}

function ArtistInfo({ artist, getArtistTracks}: ArtistInfoProps) {
    const { name, genres, id, images } = artist;

  return (
    <div 
      className="flex justify-between cursor-pointer w-100 h-auto m-2 p-2 rounded-xl bg-active bg-opacity-10 transition-all hover:scale-105 hover:bg-opacity-40 md:my-4 lg:p-3"
      onClick={() => getArtistTracks(artist.id)}
    >
      {images.length !== 0 ? (
        <img
          src={images[0].url}
          alt={`${name} photo`}
          className="h-20 rounded-xl lg:h-22"
        />
      ) : (
        <CgUnavailable
          size={80}
          className="h-20 w-24 bg-active bg-opacity-10 rounded-xl transition-all hover:scale-105 hover:bg-opacity-40"
        />
      )}
      <div className="flex flex-col w-full py-1 px-2 justify-around lg:px-6">
        <p className="text-mediumSize leading-tight lg:text-bodySize">{artist.name}</p>
        {genres.map((gen, index) =>
          index < 3 ? (
            <p className="text-xs text-playerBg eading-tight lg:text-mediumSize" key={index}>
              {" "}
              {gen}{" "}
            </p>
          ) : null
        )}
      </div>
    </div>
  )
}

export default ArtistInfo

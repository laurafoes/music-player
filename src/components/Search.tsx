import axios from "axios";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { TiDeleteOutline } from "react-icons/ti";
import { useSelector } from "react-redux";
import { Artist } from "../interfaces/Artists";
import { useToken } from "../redux/sliceToken";
import { AnimatePresence, motion } from "framer-motion"
import Spinner from "./Spinner";
import Button from "./Button";
import SearchItem from "./SearchItem";
import { Tracks } from "../interfaces/Tracks";
import { addArtists, currentArtist, initialState, useArtists } from "../redux/sliceArtist";
import { useDispatch } from "react-redux";
import { addTracks, useTracks } from "../redux/sliceTracks";

function Search() {
  const token = useSelector(useToken)
  const artists = useSelector(useArtists)
  const tracks = useSelector(useTracks)

  const dispatch = useDispatch()

  const [ loading, setLoading ] = useState<boolean>(false)
  const [ searchKey, setSearchKey ] = useState<string>("");

  const searchArtists = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)

    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
        limit: 5,
      },
    });

    dispatch(addArtists(data.artists.items))
    console.log(artists)
    setLoading(false)
  };

  const getArtistTracks = async (id: string) => {
    setLoading(true)
    const { data } = await axios.get(`https://api.spotify.com/v1/artists/${id}/top-tracks`, {
        headers: {
            Authorization: `Bearer ${token.token}`,
          },
          params: {
            market: 'BR',
          },
    })

    dispatch(addTracks(data.tracks))
    dispatch(currentArtist(data.tracks[0].artists[0].name))
    setLoading(false)
  }

  const clearSearch = () => {
    setSearchKey('')
    dispatch(addArtists(initialState.artists))
    dispatch(addTracks([]))
    setLoading(false)
  }

  return (
    <>
      <form
        className="flex items-center w-[85%] h-auto max-w-[930px] mb-8 lg:w-[65%] bg-cardColor px-6 py-4 rounded-xl hover:bg-active"
        onSubmit={(e) => searchArtists(e)}
      >
        <BiSearchAlt className="opacity-50 hover:opacity-100" size={28} />
        <input
          className="pl-6 bg-transparent border-none hover:bg-transparent focus:bg-transparent placeholder:text-secondary hover:text-white focus:text-white focus:outline-none w-3/4"
          placeholder="Busque pelo seu artista favorito"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <Button type="submit" search={true}>
          Buscar
        </Button>
        {artists.artists.length || tracks.length !== 0 ? (
          <Button type="delete">
            <TiDeleteOutline
              size={32}
              className="opacity-50 hover:opacity-100"
              onClick={clearSearch}
            />
          </Button>
        ) : null}
      </form>
      <AnimatePresence>
        { loading ? <Spinner /> : null }
        { artists.artists.length > 1 && tracks.length < 1 ? (
            <motion.div 
            key={1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='w-[85%] h-auto max-w-[930px] m-auto lg:w-[65%]'
            >
                <div className="w-full] h-full mb-8 bg-cardColor px-6 py-4 rounded-xl">
                <h2 className="text-mediumSize lg:text-titleSize">Resultados para ' {searchKey} '</h2>
                {artists.artists.map((artist: Artist) => (
                    <SearchItem artist={artist} key={artist.id} getArtistTracks={getArtistTracks} />
                    ))}
                </div>
            </motion.div>
        ) : null }
        {tracks.length > 0 ? (
            <motion.div 
            key={2}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='w-[85%] h-auto max-w-[930px] m-auto lg:w-[65%]'
            >
                <div className="w-full] h-full mb-8 bg-cardColor px-6 py-4 rounded-xl">
                <h2 className="text-mediumSize lg:text-titleSize">Top tracks for ' {artists.artist} '</h2>
                {tracks.map((track: Tracks) => (
                    <>
                        <SearchItem track={track} key={track.id} />
                    </>
                ))}
                </div>
            </motion.div>
        ) : null }
      </AnimatePresence>
    </>
  );
}

export default Search;

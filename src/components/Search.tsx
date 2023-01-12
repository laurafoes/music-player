import axios from "axios";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { TiDeleteOutline } from "react-icons/ti";
import { useSelector } from "react-redux";
import { Artist } from "../interfaces/Artists";
import { useToken } from "../redux/sliceToken";
import { useEffect } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import Button from "./Button";
import SearchItem from "./SearchItem";
import { Tracks } from "../interfaces/Tracks";
import { addArtists, currentArtist, initialState, useArtists } from "../redux/sliceArtist";
import { useDispatch } from "react-redux";
import Spinner from "./Spinner";

function Search() {
  const token = useSelector(useToken);
  const artists = useSelector(useArtists);

  const dispatch = useDispatch()

  const [ loading, setLoading ] = useState<boolean>(false)
  const [ searchKey, setSearchKey ] = useState<string>("");
  const [ artistsArray, setArtistsArray ] = useState<Artist[]>([])
  const [ pickArtist, setPickArtist ] = useState<string>("")

  const [ tracks, setTracks ] = useState<Tracks[]>([])

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
    setTracks(data.tracks)
    dispatch(addArtists([]))
    setLoading(false)
  }

  const clearSearch = () => {
    setSearchKey('')
    dispatch(addArtists(initialState.artists))
    setTracks([])
  }

  useEffect(() => {
    setArtistsArray(artists.artists)
    if(tracks.length > 1) {
        dispatch(currentArtist(tracks[0].artists[0].name))

        console.log(artists.artist)
    }
    setPickArtist(artists.artist)
  }, [artists])

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
        {artistsArray.length || tracks.length > 1 ? (
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
        { artistsArray.length > 1 ? (
            <motion.div 
            key={1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='w-[85%] h-auto max-w-[930px] m-auto lg:w-[65%]'
            >
                <div className="w-full] h-full mb-8 bg-cardColor px-6 py-4 rounded-xl">
                <h2 className="text-mediumSize lg:text-titleSize">Resultados para '{searchKey}'</h2>
                {artistsArray.map((artist: Artist) => (
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
                <h2 className="text-mediumSize lg:text-titleSize">Top tracks for '{pickArtist}'</h2>
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

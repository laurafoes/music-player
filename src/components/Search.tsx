import axios from 'axios'
import { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { useToken } from '../redux/sliceToken'
import Button from './Button'

interface ArtistImg{
  height: number,
  url: string,
  width: number
}
interface Artist {
  id: string,
  name: string,
  genres: string[],
  images: ArtistImg[]
}

function Search() {
  const token = useSelector(useToken)
  const [ searchKey, setSearchKey ] = useState<string>('')
  const [ artists, setArtists ] = useState<Artist[]>([])
  const [ artist, setArtist ] = useState<Artist>()



  const searchArtists = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
            Authorization: `Bearer ${token.token}`,
        },
        params: {
            q: searchKey,
            type: "artist"
        }
    })
    setArtists(data.artists.items)
    console.log(artists)
    console.log(artists.map((artists: any) => artists.name))

}

  return (
      <>
        <form 
            className='flex items-center w-[85%] h-auto max-w-[930px] mb-8 lg:w-[65%] bg-cardColor px-6 py-4 rounded-xl hover:bg-active'
            onSubmit={(e) => searchArtists(e)}
        >
            <BiSearchAlt className='opacity-50 hover:opacity-100' size={28}/>
            <input 
                className='text-secondary pl-6 bg-transparent border-none hover:bg-transparent focus:bg-transparent hover:text-white focus:text-white focus:outline-none w-3/4' 
                placeholder='Busque pelo seu artista favorito'
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
            />
            <Button type='submit' search={true}>Buscar</Button>
        </form>
        { artists.length > 0 ? <div className=' w-[85%] h-auto max-w-[930px] mb-8 lg:w-[65%] bg-cardColor px-6 py-4 rounded-xl'>{ artists.length > 0 ? artists.map((artist: any) => <p key={artist.id}> {artist.name} </p>)  : null}</div> : null}
      </>
  )
}

export default Search

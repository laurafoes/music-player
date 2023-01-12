import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Artist } from '../interfaces/Artists'

interface ArtistSlice {
    artist: string,
    artists: Artist[]
}

export const initialState =  {
    artist: '',
    artists: [
        { id: '',
        name: '',
        genres: [],
        images: [{
           height: 0,
           url: '',
           width: 0,
        }]
    }]
} satisfies ArtistSlice as ArtistSlice

const sliceArtist = createSlice({
    name: 'artist',
    initialState,
    reducers: {
        addArtists(state, { payload }: PayloadAction<Artist[]>){
            return { ...state, artists: payload }
        },
        currentArtist(state, { payload }: PayloadAction<string>){
            return {...state, artist: payload }
        }
    }
})

export default sliceArtist.reducer
export const { addArtists, currentArtist } = sliceArtist.actions

export const useArtist = (state: any) => {
    return state.artist
}

export const useArtists = (state: any) => {
    return state.artists
}
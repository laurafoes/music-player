import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Tracks } from '../interfaces/Tracks'

interface TracksSlice {
    tracks: Tracks[]
}

export const initialState: TracksSlice = {
    tracks: [{ 
        id: '',
        name: '',
        artists: [{ id: '',
            name: '',
            genres: [],
            images: [{
                height: 0,
                url: '',
                width: 0,
            }]
        }],
        album: {
            images: [{
                height: 0,
                url: '',
                width: 0,
            }]
        }
    }]
}

const sliceTracks = createSlice({
    name: 'tracks',
    initialState,
    reducers: {
        addTracks(state, { payload }: PayloadAction<Tracks[]>) {
            return { ...state, tracks: payload }
        }
    }
})

export default sliceTracks.reducer
export const { addTracks } = sliceTracks.actions

export const useTracks = (state: any) => {
    return state.tracks.tracks as Tracks[]
}
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Token {
    token: string | null
}

const initialState: Token =
    { token: '' }


const sliceToken = createSlice({
    name: 'token',
    initialState,
    reducers: {
        addToken(state, { payload }: PayloadAction<string>){
            return {...state,  token: payload }
        }
    }
})

export default sliceToken.reducer
export const { addToken } = sliceToken.actions

export const useToken = (state: any) => {
    return state.token
}
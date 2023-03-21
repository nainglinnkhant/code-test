import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: { searchKeyword: string } = {
  searchKeyword: '',
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setSearchKeyword: (state, action: PayloadAction<string>) => {
      state.searchKeyword = action.payload
    },
  },
})

export const { setSearchKeyword } = postsSlice.actions

export default postsSlice.reducer

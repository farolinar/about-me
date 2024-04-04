import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  themeState: "dark",
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
      toggleTheme(state, action) {
        state.themeState = state.themeState == 'dark' ? 'light' : 'dark'
      },
    }
  })

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer

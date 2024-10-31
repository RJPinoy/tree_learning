import { configureStore } from '@reduxjs/toolkit'
import { inputSlice } from './slices/inputSlice'

export const store = configureStore({
    reducer: {
        inputs: inputSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
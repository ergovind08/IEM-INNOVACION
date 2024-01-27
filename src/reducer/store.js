import { configureStore } from '@reduxjs/toolkit'
import activenessSlice from './activenessSlice'

export const store = configureStore({
    reducer: {
        activenessSlice: activenessSlice
    },
})
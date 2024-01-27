import { createSlice } from "@reduxjs/toolkit";

const dataToStore = localStorage.getItem('innovation2024');
const initialStateKey = dataToStore ? JSON.parse(dataToStore) : { key: 'Home' };

export const activenessSlice = createSlice({
    name: 'activenessSlice',
    initialState: {
        navbarActive: initialStateKey.key,
    },
    reducers: {
        setNavbarActive: (state, action) => {
            localStorage.setItem('innovation2024', JSON.stringify({ key: action.payload }));
            state.navbarActive = action.payload
        }
    }
});

export const { setNavbarActive } = activenessSlice.actions;
export default activenessSlice.reducer;
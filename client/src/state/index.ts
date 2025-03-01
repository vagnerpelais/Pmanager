import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Helper function to get initial dark mode preference
const getInitialDarkMode = () => {
    if (typeof window !== 'undefined') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
};

export interface initialStateTypes {
    isSidebarCollapsed: boolean;
    isDarkMode: boolean;
}

const initialState: initialStateTypes = {
    isSidebarCollapsed: false,
    isDarkMode: getInitialDarkMode(),
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
            state.isSidebarCollapsed = action.payload;
        },
        setIsDarkMode: (state, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload;
        },
    }
});

export const {setIsSidebarCollapsed, setIsDarkMode} = globalSlice.actions;
export default globalSlice.reducer;
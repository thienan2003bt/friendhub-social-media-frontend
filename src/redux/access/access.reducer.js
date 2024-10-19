import { createSlice } from "@reduxjs/toolkit";
import { handleLoginAccess } from "./access.async.thunk";


const accessSlice = createSlice({
    name: "access",
    initialState: {
        isLoading: false,
        isAuthenticated: false,
        error: '',
        user: {},
        accessToken: "",
        permissions: [],
    },
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        },
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
        },
        setPermissions: (state, action) => {
            state.permissions = action.payload;
        },
    },
    extraReducers: (builder) => {
        handleLoginAccess(builder);
    }
})

export const { setIsLoading, setIsAuthenticated, setUser, setAccessToken, setPermissions } = accessSlice.actions;

export default accessSlice.reducer;
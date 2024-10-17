import { createSlice } from "@reduxjs/toolkit";
import { handleLoginAccess } from "./access.async.thunk";


const accessSlice = createSlice({
    name: "access",
    initialState: {
        isLoading: false,
        user: {},
        isAuthenticated: false,
        accessToken: "",
        permissions: [],
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
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

export const { setUser, setAccessToken, setPermissions } = accessSlice.actions;

export default accessSlice.reducer;
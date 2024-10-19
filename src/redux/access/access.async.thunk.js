import { createAsyncThunk } from "@reduxjs/toolkit";
import AccessService from "../../services/access.service";

export const loginAccess = createAsyncThunk(
    'access/loginAccess',
    async ({email, password}) => {
        const response = await AccessService.handleLogin(email, password);
        if(!response) {
            throw new Error("No response data");
        }
        return response;
    }
)

export const handleLoginAccess = (builder) => {
    builder
        .addCase(loginAccess.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(loginAccess.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = true;

            state.user = action.payload.metadata?.user;
            state.accessToken = action.payload.metadata?.accessToken;
            state.permissions = action.payload.metadata?.permissions;
        })
        .addCase(loginAccess.rejected, (state, action) => {
            state.isLoading = false;
            console.log('Login access failed: ', action.error.message);
            state.error = action.error.message;
        });
};
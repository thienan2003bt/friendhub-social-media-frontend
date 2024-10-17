import { createAsyncThunk } from "@reduxjs/toolkit";
import AccessService from "../../services/access.service";

export const loginAccess = createAsyncThunk(
    'access/loginAccess',
    async (username, password) => {
        // TODO: Call API to login here
        try {
            const response = await AccessService.handleLogin(username, password);
            if(!response) {
                throw new Error("No response data");
            }
            return response;
        } catch (error) {
            console.error("API error handling login: ", error.message);
            return error;
        }
    }
)
export const handleLoginAccess = (builder) => {
    builder
        .addCase(loginAccess.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(loginAccess.fulfilled, (state, action) => {
            const { user, accessToken, permissions } = action.payload;
            state.isLoading = false;
            state.user = user;
            state.accessToken = accessToken;
            state.permissions = permissions;
        })
        .addCase(loginAccess.rejected, (state) => {
            state.isLoading = false;
            console.log('Login access failed');
        });
};
import { createAsyncThunk } from '@reduxjs/toolkit'

export const incrementAsync = createAsyncThunk(
    'counter/incrementAsync',
    async (amount) => {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        return amount;
    }
)
export const handleIncrementAsync = (builder) => {
    builder
        .addCase(incrementAsync.pending, () => {
            console.log('loading');
        })
        .addCase(incrementAsync.fulfilled, (state, action) => {
            state.value += action.payload;
            console.log('idle');
        })
        .addCase(incrementAsync.rejected, () => {
            console.log('failed');
        });
};

export const decrementAsync = createAsyncThunk(
    'counter/decrementAsync',
    async (amount) => {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        return amount;
    }
)
export const handleDecrementAsync = (builder) => {
    builder
        .addCase(decrementAsync.pending, () => {
            console.log('loading');
        })
        .addCase(decrementAsync.fulfilled, (state, action) => {
            state.value -= action.payload;
            console.log('idle');
        })
        .addCase(decrementAsync.rejected, () => {
            console.log('failed');
        });
};
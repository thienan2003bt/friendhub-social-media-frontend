import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, (state) => {
                console.log("Pending state: ", state);
            })
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.value += action.payload
            })
            .addCase(incrementAsync.rejected, (state) => {
                console.log("Rejected state: ", state);
            })
    }
})

export const incrementAsync = createAsyncThunk(
    'counter/incrementAsync',
    async (amount) => {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        return amount;
    }
)

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
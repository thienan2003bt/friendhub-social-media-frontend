// store.js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counter.reducer';

const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
});

export default store.getState;
export const AppDispatch = typeof store.dispatch;
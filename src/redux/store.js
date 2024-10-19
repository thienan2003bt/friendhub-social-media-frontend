// store.js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counter.reducer';
import accessReducer from './access/access.reducer';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        access: accessReducer,
    }
});

export default store;
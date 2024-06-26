import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICounterState } from './counterInterfaces';

const initialState: ICounterState = { count: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    decrementByValue: (state, action: PayloadAction<{ value: number }>) => {
      state.count = state.count - action.payload.value;
    },
    incrementByValue: (state, action: PayloadAction<{ value: number }>) => {
      state.count = state.count + action.payload.value;
    },
  },
});

export const { decrement, increment, decrementByValue, incrementByValue } =
  counterSlice.actions;
export default counterSlice.reducer;

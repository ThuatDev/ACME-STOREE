// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// // Define a type for the slice state
// export interface CounterState {
//     value: number;
// }

// export const fetchListUsers = createAsyncThunk('users/fetchByIdStatus', async (userId: number) => {
//     const response = await fetch('https://fakestoreapi.com/products');
//     const data = await response.json();
//     return data;
// });

// // Define the initial state using that type
// const initialState ={
//     listUser: [],
// }
// export const counterSlice = createSlice({
//     name: 'product',
//     initialState: initialState,
//     reducers: {
//     },
//     extraReducers: (builder) => {
//         builder.addCase(fetchListUsers.fulfilled, (state, action) => {
//             // Add user to the state array
//             state.listUser = action.payload;
//         });
//     },
// });

// export const { } = counterSlice.actions;

// export default counterSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
export interface SearchState {
  searchKeyword: string;
}

// Define the initial state using that type
const initialState: SearchState = {
  searchKeyword: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
    clearSearchKeyword: (state) => {
      state.searchKeyword = '';
    },
  },
});

export const { updateSearchKeyword, clearSearchKeyword } = searchSlice.actions;

export default searchSlice.reducer;

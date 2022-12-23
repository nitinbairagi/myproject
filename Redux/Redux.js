import {configureStore, createSlice} from '@reduxjs/toolkit';

const Initialstate = {isAunthenticated: false};

const Authslice = createSlice({
  name: 'authenticate',
  initialState: Initialstate,
  reducers: {
    Login(state) {
      state.isAunthenticated = !state.isAunthenticated;
    },
    Logout(state) {
      state.isAunthenticated = state.isAunthenticated;
    },
    SignUp(state) {
      state.isAunthenticated = !state.isAunthenticated;
    },
  },
});

const state = {data: []};
const dataSlice = createSlice({
  name: 'Listdata',
  initialState: state,
  reducers: {
    addData(state, action) {
      state.data.push(action.payload);
    },
    deleData(state, action) {
      state.data.shift(action.payload);
    },
  },
});

const Store = configureStore({
  reducer: {auth: Authslice.reducer, list: dataSlice.reducer},
});
export const authactions = Authslice.actions;
export const dataaction = dataSlice.actions;

export default Store;

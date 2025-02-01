import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserSate {
  userList:[],
  loading:boolean,
}

const initialState: UserSate = {
  userList:[],
  loading:false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    request: (state) => {
      state.loading=true;
    },
    success: (state) => {
      state.loading=false;
    },
    error: (state) => {
      state.loading=false;  
    },
    userList: (state, action: PayloadAction<any>) => {
    const {data}=action.payload;
      state.userList = data;
      state.loading=false;
    },
  },
})

export const { request, success, error, userList } = userSlice.actions

export default userSlice.reducer
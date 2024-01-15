import { createSlice } from "@reduxjs/toolkit";
import { User } from '../../interface/user.interface'
interface InitState {
    data: null | User[]
}
const  initialState: InitState = {
    data: null
} 
const userSlice = createSlice({

    name: "user",
    initialState,
    reducers:{
        setData: (state, action) => {
            state.data = action.payload;
        }
    }

})

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState:{
        email: "",
        token: "",
        expiresIn: ""
    },
    reducers:{
        login(state,action)
        {
            state.token = action.payload.token;
            state.expiresIn = action.payload.expiresIn;
            localStorage.setItem('token',action.payload.token);
            localStorage.setItem('expiresIn',action.payload.expiresIn);
        },
        logout(state)
        {
            localStorage.removeItem('token');
            localStorage.removeItem('expiresIn');
            state.token = "";
            state.expiresIn = "";
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice;
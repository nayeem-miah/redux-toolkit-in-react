import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchingPosts = createAsyncThunk("posts/fetchingUsers", async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data;
});

export const postSlice = createSlice({
    name: "posts",
    initialState: {
        isLoading: false,
        posts: [],
        isError: null
    },
    extraReducers: (builder) => {
        // pending data 
        builder.addCase(fetchingPosts.pending, (state) =>
            state.isLoading = true);
        // get data 
        builder.addCase(fetchingPosts.fulfilled, (state, action) => {
            state.isLoading = false
            state.posts = action.payload
            state.isError = null
        });
        // error data
        builder.addCase(fetchingPosts.rejected, (state, action) => {
            state.isLoading = false
            state.posts = []
            state.isError = action.error.message
        }
        )
    }
});

export default postSlice.reducer;



import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface CreatePost {
  userId: number;
  title: string;
  body: string;
}

export interface InitialStatePosts {
  loading: boolean;
  data: Post[];
  error: string | null;
}

const initialStatePosts: InitialStatePosts = {
  loading: false,
  data: [],
  error: null,
};

export const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users/1/posts"
  );
  return response.data;
});

export const createPost = createAsyncThunk(
  "post/createPost",
  async (post: CreatePost) => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      post
    );
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState: initialStatePosts,
  reducers: {
    addPost: (state, action: PayloadAction<CreatePost>) => {
      const randomID = Math.floor(Math.random() * 100);
      state.data.push({ ...action.payload, id: randomID });
    },
    deletePost: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter((post) => post.id !== action.payload);
    },
    editPost: (state, action: PayloadAction<Post>) => {
      const index = state.data.findIndex(
        (post) => post.id === action.payload.id
      );
      state.data[index] = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const { addPost, deletePost, editPost } = postsSlice.actions;
export default postsSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getComments } from "../../services/commets_service";

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async () => {
    try {
      const response = await getComments();
      return response;
    } catch (error) {
      console.error("Error fetching comments:", error);
      throw error; // Rethrow the error to be handled in the slice
    }
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    data: [],
    loading: false,
    error: null,
  } as {
    data: { id: number; name: string; email: string; body: string }[];
    loading: boolean;
    error: string | null;
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.data = action.payload?.data || [];
        state.loading = false;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        console.error("Error fetching comments:", action);
        state.error = action.error.message || "Failed to fetch";
        state.loading = false;
      });
  },
});

export default commentsSlice.reducer;

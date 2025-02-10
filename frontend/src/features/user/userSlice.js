import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action pour récupérer les informations de l'utilisateur
export const getUserAsync = createAsyncThunk(
  "user/getUser",
  async (_, { rejectWithValue }) => {
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/profile`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch user profile.");
      }

      return data.body;
    } catch (error) {
      return rejectWithValue(error.message || "An error occurred.");
    }
  }
);

// Action pour mettre à jour les informations de l'utilisateur
export const updateUserAsync = createAsyncThunk(
  "user/updateUser",
  async ({ firstName, lastName }, { rejectWithValue }) => {
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/profile`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ firstName, lastName }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update user profile.");
      }

      return data.body;
    } catch (error) {
      return rejectWithValue(error.message || "An error occurred.");
    }
  }
);

// Création du slice utilisateur
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    status: "idle", // idle | loading | succeeded | failed
    error: null, // Contiendra les messages d'erreur
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserAsync.pending, (state) => {
        state.status = "loading";
        state.error = null; // Réinitialise les erreurs
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "succeeded";
        state.error = null; // Réinitialise les erreurs
      })
      .addCase(getUserAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(updateUserAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(updateUserAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;

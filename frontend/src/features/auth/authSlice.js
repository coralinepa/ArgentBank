import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Invalid credentials");
      }

      const data = await response.json();
      return data.body;
    } catch (error) {
      // Renvoyer un message d'erreur clair pour l'interface utilisateur
      return rejectWithValue(error.message || "An unknown error occurred");
    }
  }
);

const initialState = {
  token: localStorage.getItem("token") || null,
  status: "idle", // idle | loading | succeeded | failed
  error: null, // Contiendra les messages d'erreur
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.status = "idle";
      state.error = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null; // Réinitialise les erreurs
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        localStorage.setItem("token", JSON.stringify(action.payload.token));
        state.status = "succeeded";
        state.error = null; // Réinitialise les erreurs
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to login"; // Stocke l'erreur pour affichage
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

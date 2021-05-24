import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    movies: []
}

const movieSlice = createSlice({
    //----ACTIONS
    name: "movie",
    initialState,
    //---REDUCER
    reducers: {
        setMovies: ( state, action ) =>{
            state.movies = action.payload;
        }
    }
})

export const { setMovies } = movieSlice.actions;

export const selectMovies = (state) => state.movie.movies;

export default movieSlice.reducer;
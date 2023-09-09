import { createAsyncThunk } from '@reduxjs/toolkit'
// import * as booksActions from './booksActions'
import * as bookShelfAPI from './booksShelf-api'

// export const fetchBooks = () => async dispatch => {
//     dispatch(booksActions.fetchBookRequest())

//     try {
//         const books = await bookShelfAPI.fetchBooks()
//         dispatch(booksActions.fecthBooksSuccess(books))
//     } catch (error) {
//         dispatch(booksActions.fecthBooksError(error))
//     }
// }

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async (_, {rejectWithValue}) => {
        try {
            const books = await bookShelfAPI.fetchBooks()
            return books
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
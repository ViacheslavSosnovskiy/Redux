import { createAsyncThunk } from "@reduxjs/toolkit"
import { getTopNews, getSearch } from "services/api"

export const getNewsThunk = createAsyncThunk('news/getTopNews', async() => {
    return await getTopNews()
})

export const getNewsSearchThunk = createAsyncThunk('news/getSearch', async(searchText) => {
    return await getSearch(searchText)
})

// export const getNewsThunk = () => {
//     return async(dispatch) => {
//         try {
//             dispatch(newsSlice.actions.fetching())
//             const data = await getNews()
//             dispatch(newsSlice.actions.fetchSuccess(data))
//         } catch (error) {
//             dispatch(newsSlice.actions.fetchError(error))
//         }
//     }
// }
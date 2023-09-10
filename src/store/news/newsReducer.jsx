import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { getNewsSearchThunk, getNewsThunk } from "./thunk"
import { newsInitialState } from "./newsInitialState"


// this feature for add status for arr
// const customSetStatus = [getNewsThunk, getNewsSearchThunk]
// const createStatus = (status) =>  customSetStatus.map(el => el[status])

const defaultStatus = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected',
}

const handlePending = (state) => {
    state.status = defaultStatus.pending
}

const handleFulfilled = (state, {payload}) => {
    state.status = defaultStatus.fulfilled
    state.news = payload.articles
    state.error = ''
}

const handleRejected = (state, {payload}) => {
    state.status = defaultStatus.rejected
    state.error = payload
}

const newsSlice = createSlice({
    name: 'news',
    initialState: newsInitialState,
    // reducers: {
    //     fetching: (state, action) => {
    //         state.status = defaultStatus.pending
    //     },
    //     fetchSuccess: (state, {payload}) => {
    //         state.news = payload.articles
    //         state.status = defaultStatus.fulfilled
    //         state.error = ''
    //     },
    //     fetchError: (state, {payload}) => {
    //         state.status = defaultStatus.rejected
    //         state.error = payload
    //     },
    // },
    
    // --------------------------------------------------------------
    // extraReducers: {
    //     [getNewsThunk.pending]: (state) => {
    //         state.status = defaultStatus.pending
    //     },
    //     [getNewsThunk.fulfilled]: (state, {payload}) => {
    //         state.news = payload.articles
    //         state.status = defaultStatus.fulfilled
    //         state.error = ''
    //     },
    //     [getNewsThunk.rejected]: (state, {payload}) => {
    //         state.status = defaultStatus.rejected
    //         state.error = payload
    //     },
    // }

    // --------------------- BUILDER ----------------------------------
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(getNewsThunk.pending, (state) => {
    //             state.status = defaultStatus.pending
    //         })
    //         .addCase(getNewsThunk.fulfilled, (state, {payload}) => {
    //             state.news = payload.articles
    //             state.status = defaultStatus.fulfilled
    //             state.error = ''
    //         })
    //         .addCase(getNewsThunk.rejected, (state, {payload}) => {
    //             state.status = defaultStatus.rejected
    //             state.error = payload
    //         })
    // }
    extraReducers: (builder) => {
        builder
            // ----- getTopNews ------ 
            .addCase(getNewsThunk.pending, handlePending)
            .addCase(getNewsThunk.fulfilled, handleFulfilled)
            .addCase(getNewsThunk.rejected, handleRejected)
            // ---- getSearch -------
            .addCase(getNewsSearchThunk.pending, handlePending)
            .addCase(getNewsSearchThunk.fulfilled, handleFulfilled)
            .addCase(getNewsSearchThunk.rejected, handleRejected)
            // -------------- addMathing(isAnyOf()) ------------------
            .addMatcher(isAnyOf([getNewsThunk.pending, getNewsSearchThunk.pending]), handlePending)
            .addMatcher(isAnyOf([getNewsThunk.fulfilled, getNewsSearchThunk.fulfilled]), handleFulfilled)
            .addMatcher(isAnyOf([getNewsThunk.rejected, getNewsSearchThunk.rejected]), handleRejected)
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addMatcher(isAnyOf(...createStatus(defaultStatus.pending)), handlePending)
    //         .addMatcher(isAnyOf(...createStatus(defaultStatus.fulfilled)), handleFulfilled)
    //         .addMatcher(isAnyOf(...createStatus(defaultStatus.rejected)), handleRejected)

    // }
})

export const newsReducer = newsSlice.reducer
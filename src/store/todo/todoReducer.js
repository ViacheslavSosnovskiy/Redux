import { createReducer } from "@reduxjs/toolkit"
import { todoInitialState } from "./todoInitialState"
import { createTodo } from "./actions"

export const todoReducer = createReducer(todoInitialState, {
    [createTodo]: (state, action) => ({
        ...state,
        todo: [...state.todo, {...action.payload}]
    })
})
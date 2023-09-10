import { combineReducers } from "redux"
import { todoReducer } from "./todo/todoReducer"
import { counterReducer } from "./counter/counterSlice"
import booksReducer from './books/booksReducer'
import { pokemonApi } from "./pokemon/pokemon"
import { contactsApi } from "./contscts/contactsSlice"
import { newsReducer } from "./news/newsReducer"

export const reducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer,
    books: booksReducer,
    news: newsReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
})
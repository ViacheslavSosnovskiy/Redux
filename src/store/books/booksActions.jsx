import { createAction } from "@reduxjs/toolkit";

export const fetchBookRequest = createAction('books/fecthBooksRequest')

export const fecthBooksSuccess = createAction('books/fecthBooksSuccess')

export const fecthBooksError = createAction('books/fecthBooksError')
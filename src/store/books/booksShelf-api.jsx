import axios from 'axios'

const BASE_URL = 'http:localhost:4000'

export async function fetchAuthors() {
    const {data} = await axios.get(`/author`)
    return data
}

export async function fetchBooks() {
    const {data} = await axios.get(`/books`)
    return data
}

export async function fetchBookById(bookId) {
    const {data} = await axios.get(`/books/${bookId}`)
    return data
}
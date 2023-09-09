import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { booksOperations, booksSelectors } from '../../store/books'

export default function BooksView() {
    const dispatch = useDispatch()
    const books = useSelector()

    useEffect(() => {
        dispatch(booksOperations.fetchBooks(booksSelectors.getBooks))
    }, [dispatch])

    return (
        <>
            {books.length > 0 && (
                <ul>
                    {books.map(book => (
                        <li key={book.id}></li>
                    ))}
                </ul>
            )}
        </>
    )
}
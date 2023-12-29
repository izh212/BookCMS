import React from 'react'
import { useSelector } from 'react-redux'
import { selectBooks } from '../redux/bookSlice'
import Book from './Book'
import AddBook from './AddBook'

function Books() {
    const books = useSelector(selectBooks)
  return (
   <>
   {books?.map(book => (
         <Book key={book.id} book={book} />
       
   ))   }
   <AddBook/>
   </>
  )
}

export default Books
import React from 'react'
import { useDispatch } from 'react-redux'
import { removeBook } from '../redux/bookSlice'

function Book({book}) {
    const dispatch = useDispatch()
  return (
    <>
    <h6>{book?.title}</h6>
    <h6>{book?.author}</h6>
    <h6>{book?.category}</h6>
    <button onClick={() => dispatch(removeBook(book.id))}>Remove</button>
    </>

    
  )
}

export default Book
import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: "book",
    initialState: {
        books:[
            {
                id: 1,
                title: "Harry Potter",
                category: "Action",
                author: "J.K Rowling"
            }
        ]
    },
    reducers: {
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        removeBook: (state, action) => {
            state.books = state.books.filter(book => book.id !== action.payload)
        }
    }
})

export const { addBook, removeBook } = bookSlice.actions;
export const selectBooks = state => state.book.books;
export default bookSlice.reducer;
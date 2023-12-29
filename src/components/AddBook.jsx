import {useState} from 'react'
import { addBook } from '../redux/bookSlice'
import {useDispatch, useSelector} from 'react-redux'
import { selectBooks } from '../redux/bookSlice'

function AddBook() {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()
    const books = useSelector(selectBooks)
    function add(){
        dispatch(addBook({
            id: books.length + 1,
            title: title}))
            setTitle('')

            
        
    
    }

  return (
    <div>
      <h1>Add Book</h1>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button onClick={() => add()}>Add</button>
      
    </div>
  )
}



export default AddBook
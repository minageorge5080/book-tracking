import { BookList } from "../components/BooksList";
import { search, update, getAll } from "../BooksAPI";
import { useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";

export const SearchPage = () => {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    const [myBooks, setMyBooks] = useState([]);

    useEffect(() => {
        fetchMyBooks()
      },[])
    
    const fetchMyBooks = async() => {
        await getAll().then((books) => setMyBooks(books))
      }
      
    const queryValueChange = async(query) => {
      await search(query, 20).then((booksResults) => {
        
      booksResults?.forEach((book) => {
          if(myBooks?.map(e => e.id)?.includes(book.id) === true){
            book.shelf = myBooks?.find(e => e.id === book.id)?.shelf
          } else {
            book.shelf = "none"
          }
        });
  
        setBooks(booksResults)
      }).catch((e) => setBooks([]))
    }

    const updateBook = async(book, shelf) => {
      await update(book, shelf)
      if (myBooks?.map(e => e.id)?.includes(book.id)) {
        const oldBook = myBooks?.find(e => e.id === book.id)
        oldBook.shelf = shelf
      }else {
        book.shelf = shelf
        setMyBooks([...myBooks, book])
      }   
    }

    return (
      <div className="search-books">
          <div className="search-books-bar">
            <button className="close-search"
               onClick={() => navigate(-1)}>
                Close
            </button>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                onChange ={(e) => queryValueChange(e.target.value)}
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div>
           <br></br> 
           <br></br> 
           <br></br> 
           <BookList title = {`Search Results: ${books?.length ?? 0}`} books = {books} onOptionSelected = {updateBook} />
          </div>
        </div>
    );
}

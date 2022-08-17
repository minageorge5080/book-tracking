import { BookList } from "../components/BooksList";
import { getAll, update } from "../BooksAPI";
import { useEffect, useState } from "react";

export const HomePage = () => {
    const [allBooks, setAllBooks] = useState([]);
    const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState([]);
    const [wantToReadBooks, setWantToReadBooks] = useState([]);
    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        fetchAllBooks()
      },[])
    
    const fetchAllBooks = async() => {
        await getAll().then((books) => {
          setAllBooks(books)
          setCurrentlyReadingBooks(books?.filter((book) => book?.shelf == "currentlyReading"))
          setWantToReadBooks(books?.filter((book) => book?.shelf == "wantToRead"))
          setReadBooks(books?.filter((book) => book?.shelf == "read"))
        })
      }
      
    const updateBook = async(book, shelf) => {
       await update(book, shelf).then((result) => {
        setCurrentlyReadingBooks(allBooks?.filter(e => result?.currentlyReading.includes(e.id)))
        setWantToReadBooks(allBooks?.filter(e => result?.wantToRead.includes(e.id)))
        setReadBooks(allBooks?.filter(e => result?.read.includes(e.id)))
       }) 
      }

    return (
      <div>
        <BookList title = {"Currently Reading"} books = {currentlyReadingBooks} onOptionSelected = {updateBook} />
        <BookList title = {"Want to Read"} books = {wantToReadBooks} onOptionSelected = {updateBook} />
        <BookList title = {"Read"} books = {readBooks} onOptionSelected = {updateBook} />
      </div>
    );
}

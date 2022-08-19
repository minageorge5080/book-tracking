import { Book } from "./Book";

export const BookList = ({title, books, onOptionSelected}) => {
    return books?.length ? (
        <div className="list-books-content">
             <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books.map((book) => (
                      <li key={book?.id}>
                      <Book book={book} onOptionSelected={onOptionSelected}/>
                    </li>
                     ))}
                  </ol>
                </div>
              </div>
        </div>
    ) : <div></div>;
};
// TODO 
// save props
// Readme
// Search page

// Do the search results allow a user to categorize a book as “currently reading”, “want to read”, or “read”?
// Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf.
// If a book is assigned to a shelf on the main page and that book appears on the search page, the correct shelf should be selected on the search page. If that book's shelf is changed on the search page, that change should be reflected on the main page as well. The option "None" should be selected if a book has not been assigned to a shelf.
// When an item is categorized on the search page and the user navigates to the main page, it appears on that shelf in the main page.

import "./App.css";
import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";

function App() {

 

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={
        <div>
          <HomePage/>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
         </div>
        </div>}/>
        <Route path="/search" element={<SearchPage/>}/>
      </Routes>
    
    </div>
  );
}

export default App;

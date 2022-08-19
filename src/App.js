import "./App.css";
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

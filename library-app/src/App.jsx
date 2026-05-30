import './App.css'
import ListBooks from './components/list-books'
import AddBook from './components/add-book'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import FindTitle from './components/find-title'
import FindAuthor from './components/find-author'
import FindGenre from './components/find-genre'
import FindPrice from './components/find-price'


export default function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <Link to="/" className="navbar-brand">&nbsp;Library-App</Link>

      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/add" className="nav-link">Add</Link>
        </li>
        <li className="nav-item">
          <Link to="/list" className="nav-link">List</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" id="navbardrop" data-bs-toggle="dropdown">
            Search By
          </a>
          <div className="dropdown-menu">
            <Link to="/title" className="dropdown-item">Title</Link>
            <Link to="/author" className="dropdown-item">Author</Link>
            <Link to="/genre" className="dropdown-item">Genre</Link>
            <Link to="/price" className="dropdown-item">Price</Link>
          </div>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<ListBooks />} />
      <Route path="/list" element={<ListBooks />} />
      <Route path="/add" element={<AddBook />} />
      <Route path="/title" element={<FindTitle />} />
      <Route path="/author" element={<FindAuthor />} />
      <Route path="/genre" element={<FindGenre />} />
      <Route path="/price" element={<FindPrice />} />
      <Route path="*" element={<div className="alert alert-danger">Page Not Found</div>} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Book from "./Book/Book"
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Book/Home';
import EditBook from './Book/EditBook';
import AddBooks from './Book/AddBooks';
import Categoriee from './page/Categoriee';
import Authors from './page/Authors';
import Reservation from './page/Reservation';
import Dashboard from './page/Dashboard';
import Sidebar from './component/Sidebar'
import Login from './component/Login';
import Header from './Book/Header';
import EditCategorie from '../src/Categories/EditCategorie'
import AddCategorie from './Categories/AddCategorie';
import BookInformation from './page/BookInformation';
import ResultRecherche from './component/ResultRecherche';
import Hoome from "./component/Hoome"
function App() {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
    <Route path="/login" element={<Login/>} />
    <Route path="/"  element={<Dashboard />} />
          <Route path="/books"  element={<Book />} />
          <Route path="/editbook"  element={<EditBook />} />
          <Route path="/addbook"  element={<AddBooks />} />
          <Route path="/categories" element={<Categoriee />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/editcategorie" element={<EditCategorie/>} />
          <Route path="/addcategorie" element={<AddCategorie/>} />
          <Route path="/book/:id" element={<BookInformation/>} />
          <Route path="/books/:id" element={<ResultRecherche/>} />
          <Route path="/home" element={<Hoome/>} />

    </Routes>
    {/* <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/books" element={<Book />} />
          <Route path="/editbook" element={<EditBook />} />
          <Route path="/addbook" element={<AddBooks />} />
          <Route path="/categories" element={<Categorie />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/dashboard" element={<Dashboard />} />
          


        </Routes>

      </Sidebar> */}
    
      

     
    </BrowserRouter>

    </>
  );
}

export default App;

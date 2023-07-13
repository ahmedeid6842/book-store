import './App.css';
import { Route, Routes } from 'react-router-dom';
import Book from './pages/Book';
import Categories from './pages/Categories';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;

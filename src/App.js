import './App.css';
import { Route, Routes } from 'react-router-dom';
import Book from './pages/Book';
import Categories from './pages/Categories';
import Header from './components/Header';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Book />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

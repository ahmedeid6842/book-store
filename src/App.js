import './App.css';
import { Route, Routes } from 'react-router-dom';
import Book from './pages/Book';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Book />} />
      </Routes>
    </>
  );
}

export default App;

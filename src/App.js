// // import logo from './logo.svg';
// import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage.js';
import Header from './Components/Header/Header.js';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={< HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

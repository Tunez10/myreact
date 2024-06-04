import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Register from './componentC/Register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './componentC/Login';
import Reset from './componentC/Reset';


function App() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer />
      <Header/>
        <Routes>
          <Route>
            <Route path='/' element={<Home />} /> 
            <Route path='blog' element={<Blog />} />
            <Route path='contact' element={<Contact />} />
            <Route path='shop' element={<Shop />} />
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
            <Route path='reset' element={<Reset />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
   
  );
}

export default App;

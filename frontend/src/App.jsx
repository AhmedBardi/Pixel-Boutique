import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Consoles from './pages/Consoles'
import Jeux_Vidéo from './pages/Jeux Vidéo'
import Register from './pages/Register'
import Login from './pages/Login'
import Error from './pages/Error'
import Footer from './component/Footer'
import Profile from './pages/Profile'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { current } from './JS/actions/auth.action'
import BarNav from '/src/component/BarNav';
import {logout} from "./JS/actions/auth.action"


// import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from './Footer';

function App() {
  // 1. Initialize useDispatch at the top level of the component
  const dispatch = useDispatch()

  useEffect(() => {
    // 2. Call the dispatch function here
    dispatch(current())
  }, [dispatch]) // 3. Safely include dispatch in the dependency array

  

  return (
    <div className="App">
      <BarNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consoles" element={<Consoles />} />
        <Route path="/jeux_vidéo" element={<Jeux_Vidéo />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
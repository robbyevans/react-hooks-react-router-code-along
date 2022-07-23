import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Login from "./Login";
import NavBar from "./Navbar";

export default function App() {
    return (
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/about" element={<About />} />  
        <Route path="/login" element={<Login />} />  
      </Routes>
       
      </BrowserRouter>
    )
  }
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../components/Home/Home'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import Blog from '../components/Blog/Blog'
import Contact from '../components/Contact/Contact'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function Layouts() {
  return (
    <div>
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/reactdemo' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/services' element={<Services/>} />
                <Route path='/blog' element={<Blog/>} />
                <Route path='/contact' element={<Contact/>} />
            </Routes>
            <Footer />
        </Router>
    </div>
  )
}

export default Layouts
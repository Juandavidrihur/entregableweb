import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


// Componentes
import Header from './Components/Header/Header.jsx'
import Nav from './Components/Nav/Nav.jsx'
import './App.css'
import Footer from './Components/Footer/Footer.jsx'


// Páginas
import Home from './Pages/Home/Home.jsx'
import Error from './Pages/Error/Error.jsx'
import CharacterFilter from './Pages/CharacterFilter/CharacterFilter.jsx'
import CharacterDetails from './Pages/CharacterDetails/CharacterDetails.jsx'

function App() {

  return (
    <Router>
      <Header/>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/characterfilter' element={<CharacterFilter/>}/>
        <Route path='/character/:id' element={<CharacterDetails/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
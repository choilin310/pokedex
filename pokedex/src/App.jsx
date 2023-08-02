import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PokeList from "./components/PokeList"
import './App.css'

function App() {

  return (
    <>
    <Navbar />
    <PokeList />
    <Footer />
    </>
  )
}

export default App

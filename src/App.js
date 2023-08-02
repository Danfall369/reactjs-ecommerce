import React from 'react'
import Nav from './nav'
import Rout from './rout'
import { BrowserRouter } from 'react-router-dom'
import Footer from './footer'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Rout />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
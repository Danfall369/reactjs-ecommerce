import React from 'react'
import Nav from './nav'
import Rout from './rout'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Rout />
      </BrowserRouter>
    </>
  )
}

export default App
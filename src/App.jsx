import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Todo from './pages/todo/Todo'
import Landing_Page from './pages/LandingPage/Landing_Page'
import Cart from './pages/LandingPage/Cart'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* First task */}
        {/* <Route path={'/'} element={<Todo />} /> */}
        
        {/* Second task */}
        <Route path={'/'} element={<Landing_Page />} />
        <Route path={'/cart'} element={<Cart />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App

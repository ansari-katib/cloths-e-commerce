import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Todo from './pages/todo/Todo'

import Landing_Page from "./pages/LandingPage/page/Landing_Page"
import Login from "./pages/LandingPage/page/Login"
import SignIn from "./pages/LandingPage/page/SignIn"
import Cart from "./pages/LandingPage/page/Cart"
import Layout from "./pages/LandingPage/Layout"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >

          {/* First task */}
          {/* <Route path={'/'} element={<Todo />} /> */}

          {/* Second task */}
          <Route path={'/'} element={<Landing_Page />} />

          {/* Auth routes */}
          <Route path={'/login'} element={<Login />} />
          <Route path={'/sign-in'} element={<SignIn />} />

          {/* routes only for authenticate user */}
          <Route path={'/cart'} element={<Cart />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

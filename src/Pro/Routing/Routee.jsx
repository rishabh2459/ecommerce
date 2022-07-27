import React from 'react'
import {BrowserRouter, Route, Routes } from "react-router-dom"
import Login from '../Forms/Login';
import SignUp from "../Forms/SignUp";
import Products from '../../Products/Products';
import Cart from '../Cart/Cart';
import Profile from '../Header/Setting/Profile';

function Routee() {
  return (
    <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
    </React.StrictMode>
  )
}

export default Routee;
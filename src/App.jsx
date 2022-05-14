import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
 
import './App.css'
import { Cart } from './Components/Cart'
import { Checkout } from './Components/Checkout'
import { Home } from './Components/Home'
import { Navbar } from './Components/Navbar'
 
import { Products } from './Components/Products'
import { SingleProd } from './Components/SingleProd'
 

function App() {
  
  return (
    <div className="App">
      
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/products/:id' element={<SingleProd/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
        
    </div>
  )
}

export default App

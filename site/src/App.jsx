import { useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import Dashboard from '../src/components/dashboard/Dashboard'
import Home from './Home'
import Create from './components/dashboard/Create'


function App() {

  return (
    <>







      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='add/newpost' element={<Create />} />

        </Route>

        {/* <Route index element={<Products products={products} removeItem={removeItem} setUpdated={setUpdated} />} />

        <Route path='product/edit/:pid' element={<Edit setUpdated={setUpdated} />} /> */}




      </Routes>

    </>
  )
}

export default App

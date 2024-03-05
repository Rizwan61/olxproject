import { useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import Home from './Home'


function App() {

  return (
    <>



     



      <Routes>
      <Route path='/' element={<Home/>}/>
       {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
          {/* <Route index element={<Products products={products} removeItem={removeItem} setUpdated={setUpdated} />} />
          <Route path='product/create' element={<Create setUpdated={setUpdated} />} />
          <Route path='product/edit/:pid' element={<Edit setUpdated={setUpdated} />} /> */}


      

      </Routes>

    </>
  )
}

export default App

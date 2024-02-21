import { useState } from 'react'
import Navbar from './components/Navbar'
<<<<<<< Updated upstream
import Login from './components/login/Login'
=======
import Nav from './components/Nav'
import Hero from './components/hero/Hero'
import Catagories from './components/catagories/Catagories'
>>>>>>> Stashed changes
function App() {

  return (
    <>
<<<<<<< Updated upstream
      <section >
        <Navbar />
       
=======
      <section>
        <div className=' mx-auto max-w-[1340px]'>
          <Navbar />
        </div>
      </section>

      <section >
        <div className=' mx-auto max-w-[1340px] shadow-sm p-3 bg-body-white rounded'>
          <Nav />
        </div>
      </section>
      <section className=' mx-auto max-w-[1340px] mt-4' >
        <Hero/>
      </section>
      <section>
        <Catagories/>
>>>>>>> Stashed changes
      </section>
    </>
  )
}

export default App

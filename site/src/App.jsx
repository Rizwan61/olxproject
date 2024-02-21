import { useState } from 'react'
import Navbar from './components/submenu/Navbar'
import Login from './components/login/Login'

import Nav from './components/navigation/Nav'
import Hero from './components/hero/Hero'
import Catagories from './components/catagories/Catagories'

function App() {

  return (
    <>

     


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
         <Hero />
       </section>
       <section>
         <Catagories />

       </section> 
    </>
  )
}

export default App

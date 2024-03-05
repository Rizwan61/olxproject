import React from 'react'
import Slidebar from './Slidebar'
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'



function Dashboard() {
  return (
    <>
      
      <h1 className='text-center'>Dashboard</h1>
      <div className="container">
        <div className="row ">
          <div className="col-md-3">
            <Slidebar />
          </div>
          <div className="col-md-9 dash">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
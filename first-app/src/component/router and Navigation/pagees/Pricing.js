import React from 'react'
import { Outlet } from 'react-router-dom'

function Pricing() {
  return (
    <div>Show Pricing
        <Outlet/>
    </div>
  )
}

export default Pricing
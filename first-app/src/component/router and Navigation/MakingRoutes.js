import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './pagees/About'
import Home from './pagees/Home'
import Login from './pagees/Login'
import NotFound from './pagees/NotFound.js'
import NavigationBar from './component/NavigationBar.js'
import Profile from './pagees/Profile.js'
import Project from './pagees/Project.js'
import Pricing from './pagees/Pricing.js'
import FreePricing from './pagees/FreePricing.js'
import PremiumPricing from './pagees/PremiumPricing.js'
import ProctectedRoute from './component/ProctectedRoute.js'
import PremiumUsers from './pagees/PremiumUsers.js'
function MakingRoutes() {
    return (
        <div className='make-routes'>
            hello
            <NavigationBar />
            <Routes>
                <Route path='*' element={<NotFound />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<Login />} />
                <Route path='/profile/:userId' element={<Profile />} />
                <Route path='/profile/:userId/:projectId' element={<Project />} />

                {/* like we have to routes like pricing/free, pricing/premium */}
                <Route path='/pricing' element={<Pricing />}>
                    <Route path='free' element={<FreePricing />} />
                    <Route path='premium' element={<PremiumPricing />} />
                </Route>

                <Route element= {<ProctectedRoute/>}>
                    <Route path='prime' element = {<PremiumUsers/>} />
                </Route>
            </Routes>
        </div>
    )
}

export default MakingRoutes
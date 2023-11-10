import React from 'react'
import Hero from '../Website/Home Page/Hero'
import Services from '../Website/Home Page/Services'
import Popular from '../Website/Home Page/Popular'
import Explore from '../Website/Home Page/Explore'
import Packages from '../Website/Home Page/Packages'
import Testimonials from '../Website/Home Page/Testimonials'

const Home = () => {
  return (
    <div id='Home'>
        <Hero />
        <Services />
        <Popular />
        <Packages />
        <Explore />
        <Testimonials />
    </div>
  )
}

export default Home

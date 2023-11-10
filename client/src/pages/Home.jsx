import React from 'react'
import Signup from './Signup'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Popular from '../components/Popular'
import Explore from '../components/Explore'

const Home = () => {
  return (
    <div id='Home'>
        <Hero />
        <Services />
        <Popular />
        <Explore />
    </div>
  )
}

export default Home

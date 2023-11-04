import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
    <section class="mb-20">
        <div
            class="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] h-[500px] bg-[url('https://img1.wsimg.com/isteam/ip/044fec34-105c-4e2c-af48-6dfd21091910/man-walking-dog.webp')]">
            <div
            class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[#0c4a6e69]">
            <div class="flex h-full items-center justify-center">
                <div class="px-6 text-white text-left md:px-12">
                <h1 class="mt-6 mb-16 text-3xl font-bold tracking-tight md:text-4xl xl:text-5xl">
                Plan Your Eco-Friendly Adventure <br /><span className='text-base md:text-2xl xl:text-3xl font-normal'>Start Planning Your Eco-Friendly Trip Today!</span>
                </h1>
                </div>
            </div>
            </div>
            <div className='mt-[450px] p-12 container mx-auto rounded-lg h-24 bg-gray-200'></div>
        </div>
    
    </section>
    
  </>
  )
}

export default Hero

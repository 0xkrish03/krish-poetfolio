import Link from 'next/link'
import React from 'react'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white '>
        <div className='container mx-auto flex justify-between items-center'>
            {/* Logo */}
            <Link href='/'>
                <h1 className='text-2xl fonet-semibold'>
                    Krish <span className='text-emerald-500'>.</span>
                </h1>
            </Link>
            {/* Desktop nav */}
            <div className="hidden xl:flex items-center gap-8">
                <Navbar />
                <Link href='/contacts'>
                    <button className='bg-purple-700 rounded-lg py-2 px-4 hover:brightness-125 hover:scale-110 transition-transform duration-300'> Hire Me.</button>
                </Link>
            </div>

            {/* Mobile Navbar */}

            <div className="xl:hidden">
                <MobileNavbar />
            </div>




        </div>
    </header>
  )
}

export default Header
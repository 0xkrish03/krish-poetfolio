import Link from 'next/link'
import React from 'react'
import Navbar from './Navbar'
import Button from '../Button'


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
            <div className="flex items-center gap-8">
                <Navbar />
                <Link href='/contacts'>
                    <Button className='bg-green-500 text-stone-700 hover:brightness-150' > Hire Me.</Button>
                </Link>
            </div>
        </div>
    </header>
  )
}

export default Header
'use client';

import Link from 'next/link';
import React from 'react'


const links=[
    {
        name:'home',
        path:'/',
    },
    
    {
        name:'services',
        path:'/services',
    },
    {
        name:'resume',
        path:'/resume',
    },
    {
        name:'work',
        path:'/work',
    },
    {
        name:'contact',
        path:'/contact',
    },

]

const Navbar = () => {
  return (
    <nav className='flex gap-8'>
        {links.map((link,index)=>{
            return(
                <Link href={link.path}>
                    {link.name}
                </Link>
            )
        })}
    </nav>
  )
}

export default Navbar
'use client'

import React from 'react'
import CountUp from 'react-countup'

const stats = [
    {
        num: 12,
        text: "Years of Experience"
    },
    {
        num: 26,
        text: "Projects Completed"
    },
    {
        num: 8,
        text: "Technologies Known"
    },
    {
        num: 500,
        text: "Github Commits"
    },
]

const Stats = () => {
  return (
    <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
        <div className='mx-auto container'>
            <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
                {stats.map((item, index) => {
                    return (
                        <div className='flex-1 flex gap-4 items-center justify-center xl:justify-start' key={index}>
                            <CountUp 
                                start={0} 
                                end={item.num} 
                                duration={5} 
                                delay={2} 
                                className='text-4xl xl:text-6xl font-extrabold text-white'
                            />
                            <div className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[125px]"} ml-2 leading-snug text-white/60`}>
                                {item.text}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats

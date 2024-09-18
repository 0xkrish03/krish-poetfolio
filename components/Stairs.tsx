import { animate, motion } from 'framer-motion'
import React from 'react'


const stairAnimation={
    initial:{
        top:'0%',
    },
    animate:{
        top:"100%"
    },
    exit:{
        top:["100%","0%"]
    }
}

const Stairs = () => {
  return (
    <div>


        {/* render 6 motion divs ,each representing astep of the stairs.
        
            each div will have the same animation defined by the stairsAnimation object.
            
            
        
        */}





    </div>
  )
}

export default Stairs
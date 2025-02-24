import React from 'react'
import Home from "@/pages/Home";
import Sobre from "@/pages/Sobre";
import Tccia from '@/pages/Tccia';

const page = () => {
  return (
    <div>
       <div>
          <Home />
          </div>
          <div className="mt-16">
          <Sobre />
          </div>
          <div className=''>
            <Tccia />
          </div>
    </div>
  )
}

export default page

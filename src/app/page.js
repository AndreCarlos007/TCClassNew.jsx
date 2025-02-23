import React from 'react'
import Home from "@/pages/Home";
import Sobre from "@/pages/Sobre";

const page = () => {
  return (
    <div>
       <div>
          <Home />
          </div>
          <div className="mt-16">
          <Sobre />
          </div>
    </div>
  )
}

export default page

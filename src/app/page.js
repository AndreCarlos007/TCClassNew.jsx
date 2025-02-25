import React from 'react'
import Home from "@/pages/Home";
import Sobre from "@/pages/Sobre";
import Tccia from '@/pages/Tccia';
import Tccprof from '@/pages/Tccprof';
import Feedback from '@/pages/Feedbacks';

const page = () => {
  return (
    <div>
          <Home />
          <Sobre />
          <Tccia />
          <Tccprof />
          <Feedback />
    </div>
  )
}

export default page

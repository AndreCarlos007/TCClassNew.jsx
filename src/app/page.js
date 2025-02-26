import React from 'react'
import Home from "@/pages/Home";
import Sobre from "@/pages/Sobre";
import Tccia from '@/pages/Tccia';
import Tccprof from '@/pages/Tccprof';
import Feedbacks from '@/pages/Feedbacks';
import Contatos from '@/pages/Contatos';

const page = () => {
  return (
    <div>
          <Home />
          <Sobre />
          <Tccia />
          <Tccprof />
          <Feedbacks />
          <Contatos />
    </div>
  )
}

export default page

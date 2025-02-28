import React from 'react';
import Home from "@/pages/Home";
import Sobre from "@/pages/Sobre";
import Tccia from '@/pages/Tccia';
import Tccprof from '@/pages/Tccprof';
import Feedbacks from '@/pages/Feedbacks';
import Contatos from '@/pages/Contatos';

const Page = () => {
  return (
    <div>
      <section id="home">
        <Home />
      </section>

      <section id="sobre">
        <Sobre />
      </section>

      <section id="tccia">
        <Tccia />
      </section>

      <section id="tccprof">
        <Tccprof />
      </section>

      <section id="feedbacks">
        <Feedbacks />
      </section>

      <section id="contatos">
        <Contatos />
      </section>
    </div>
  );
};

export default Page;

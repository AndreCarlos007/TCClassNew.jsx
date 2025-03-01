"use client"
import { useScroll, useSpring, motion} from 'framer-motion';
import React, {useRef} from 'react';
import Home from "@/pages/Home";
import Sobre from "@/pages/Sobre";
import Tccia from '@/pages/Tccia';
import Tccprof from '@/pages/Tccprof';
import Feedbacks from '@/pages/Feedbacks';
import Contatos from '@/pages/Contatos';
import Parallax from '@/components/Parallax';


const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 h-1 rounded-md bg-[#888]"
      style={{ scaleX }}
    />
  );
};

const Page = () => {
  return (
    <div>
      <section id="home">
        <Home />
      </section>

      <section>
        <Parallax />
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

    <ProgressBar />
    </div>
  );
};

export default Page;

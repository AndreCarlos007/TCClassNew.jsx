"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
  const [isMenuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!isMenuAberto);
  };

  // Itens da navbar
  const itemNavBar = [
    { link: "Home", path: "#section1" },
    { link: "Sobre", path: "#section2" },
    { link: "Tcc-ia", path: "#section3" },
    { link: "Tcc-prof", path: "#section4" },
    { link: "Feedback", path: "#section5" },
    { link: "Contatos", path: "#section6" },
  ];

  // Função para scroll suave
  const handleNavClick = (targetId) => {
    const offSet = 0;

    const targetElement = document.querySelector(targetId);
    window.scrollTo({
      top: targetElement.offsetTop - offSet,
      behavior: "smooth",
    });
  };

  const tl = useRef();
  const container = useRef();

  useGSAP(
    () => {
      gsap.set(".menuLinkItemHolder", { y: 75 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".menuOverlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menuLinkItemHolder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );


  useEffect(() => {
    if (isMenuAberto) {
      tl.current.play();
    } else  {
      tl.current.restart();
      tl.current.reverse();
    }
  }, [isMenuAberto]);

  return (
    <div ref={container}>
      <nav className=" mb-2 py-1 fixed top-0 right-0 left-0 z-[100]">
        <div className="flex mx-[2.125rem] md:mx-[6rem] justify-between items-center">
          <button
            onClick={() => handleNavClick("#section1")}
            className="h-16 text-[1.1rem] font-Saans_Trial font-bold"
          >
            TCCLASS
          </button>

          <div className="flex gap-2 ">
            {/* Ícones de abrir/fechar menu para mobile */}
            <div className="">
              <button onClick={toggleMenu} className="text-[1.1rem] font-bold">
                {isMenuAberto ? (
                  <p
                    id={styles.navbarFechada}
                    className="font-Saans_Trial font-bold"
                  >
                    CLOSE
                  </p>
                ) : (
                  <p
                    id={styles.navbarAberta}
                    className="font-Saans_Trial font-bold"
                  >
                    MENU
                  </p>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Itens da Navbar para mobile */}
      <div
        className={`mt-[3.5rem] z-[100] py-2 ${
          isMenuAberto
            ? "flex flex-col fixed h-screen  top-4 right-0 left-0"
            : "hidden"
        }`}
      >
        <div
          id={styles.menuOverlay}
          className="menuOverlay flex flex-col  justify-between h-full"
        >
          {/* Seção de navegação com os botões */}
          <div className="flex flex-col">
            <nav className=" mb-2 py-1 fixed top-0 right-0 left-0 z-[100]">
              <div className="flex mx-[2.125rem] md:mx-[6rem] justify-between items-center">
                <button
                  onClick={() => handleNavClick("#section1")}
                  className="h-16 font-Saans_Trial text-colorWhite text-[1.1rem] font-bold"
                >
                  TCCLASS
                </button>

                <div className="flex gap-2 ">
                  {/* Ícones de abrir/fechar menu para mobile */}
                  <div className="">
                    <button onClick={toggleMenu} className="text-[1.1rem] font-bold">
                      {isMenuAberto ? (
                        <p
                          id={styles.navbarFechada}
                          className="font-Saans_Trial text-colorWhite font-bold"
                        >
                          CLOSE
                        </p>
                      ) : (
                        <p
                          id={styles.navbarAberta}
                          className="font-Saans_Trial text-colorWhite font-bold"
                        >
                          MENU
                        </p>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </nav>

              <div className={styles.menuLinkItem}>
            {itemNavBar.map(({ link, path }) => (
              <button
                onClick={() => {
                  handleNavClick(path), toggleMenu();
                }}
                key={link}
                className="menuLinkItemHolder relative text-[2rem] md:text-[4rem] font-Saans_Trial flex mx-[2.125rem] md:mx-[6rem] uppercase leading-none text-colorWhite"
                
              >
                {link}
              </button>
            ))}
            </div>
          </div>

          {/* Seção de Links */}
          <div className="mx-[2.125rem] md:mx-[6rem] mb-6 flex flex-col lg:flex-row gap-2 lg:gap-[25rem] text-colorWhite ">
            <div className="flex flex-col font-Saans_Trial">
              <Link href="/">X &#8599;</Link>
              <Link href="/">LINKEDIN &#8599;</Link>
              <Link href="/">GITHUB &#8599;</Link>
              <Link href="/">PORTFÓLIO &#8599;</Link>
            </div>

            <div className="flex flex-col font-Saans_Trial items-start justify-end">
              <p className="uppercase">andrecarlos.oc@gmail.com</p>
              <p className="text-xs">Desenvolvido por André Carlos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

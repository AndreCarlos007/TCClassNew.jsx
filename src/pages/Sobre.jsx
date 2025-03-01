import React from "react";

const Sobre = () => {
  return (
    <div id="section2" className="bg-bgColorGray  ">
      <div className="flex flex-col min-h-screen">
        <div className="mt-[5.5rem] mb-[5rem] mx-[2.125rem]  max-w-[100vw]  ">
          <div>
            <div className="mb-10 md:mb-0">
              <h1 className="font-Space_Grotesk  text-[1.5625rem] text-colorTextPrimary text-center">
                Sobre Nós
                <div className="flex justify-center border-b border-colorTextPrimary mx-[30vw]"></div>
              </h1>
            </div>
          </div>
          <div className="flex flex-col justify-center md:flex-row md:gap-32 md:items-center ">
           
            <section className="lg:max-w-[50vw]">
              <div className="flex flex-col mt-8 items-center">
              <div className="flex flex-col items-center lg:flex-row gap-5">
              <h1 className="text-[2rem] uppercase text-colorTextPrimary font-Mabry_Pro font-bold">
                O que é a TCClass ? 
              </h1>
             
            </div>
                <span className="mt-[1.5rem] text-[1.375rem]  font-Space_Grotesk text-left text-colorTextPrimary md:text-base ">
                  Plataforma que combina IA e professores especializados para
                  ajudar estudantes na revisão e correção de TCCs, identificando
                  erros, sugerindo melhorias e oferecendo uma mentoria
                  tecnológica sem reescrever o conteúdo.
                </span>
                <span className="mt-[1.5rem] text-[1.375rem]  font-Space_Grotesk text-left text-colorTextPrimary md:text-base ">
                  Conecta estudantes a freelancers acadêmicos para correção
                  humanizada, mentoria e ajuda na estruturação do TCC. O aluno
                  define suas necessidades e orçamento, enquanto os
                  profissionais podem aceitar ou negociar valores até um acordo
                  justo.
                </span>
              </div>

              <div className="flex ">
                <button className="text-[1.375rem] mt-[1.5rem] hover:bg-slate-600 transition-all duration-300 font-medium font-Space_Grotesk rounded-xl h-10 w-96 text-colorWhite bg-bgColorDarkBlue">
                  Saiba Mais
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="relative max-w-[100vw] bottom-[-1rem]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1000 100"
        >
          <g fill="#EDF0F2">
            <rect stroke="none" fill="#1C2D45" width="100%" height="100%" />
            <path
              d="M0 0v99.7C62 69 122.4 48.7 205 66c83.8 17.6 160.5 20.4 240-12 54-22 110-26 173-10a392.2 392.2 0 0 0 222-5c55-17 110.3-36.9 160-27.2V0H0Z"
              opacity=".5"
            ></path>
            <path d="M0 0v74.7C62 44 122.4 28.7 205 46c83.8 17.6 160.5 25.4 240-7 54-22 110-21 173-5 76.5 19.4 146.5 23.3 222 0 55-17 110.3-31.9 160-22.2V0H0Z"></path>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Sobre;

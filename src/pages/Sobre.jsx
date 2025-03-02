import React from "react";

const Sobre = () => {
  return (
    <div id="section2" className="bg-bgColorGray  ">
      <div className="flex flex-col min-h-screen">
        <div className="mt-[5.5rem] mb-[5rem] mx-[2.125rem] md:mx-[6rem]  max-w-[100vw]  ">
          <div>
            <div className="mb-10 md:mb-0">
              <h1 className="font-Space_Grotesk  text-[1.5625rem] text-colorTextPrimary text-center">
                Sobre Nós
                <div className="flex justify-center border-b border-colorTextPrimary mx-[30vw]"></div>
              </h1>
            </div>
          </div>
          <div className="flex flex-col justify-center md:flex-row md:gap-32 md:items-center ">
           
            <section className="">
              <div className="flex flex-col mt-8 items-center">
              <div className="flex flex-col items-center lg:flex-row gap-5">
              <h1 className="text-[2rem] uppercase text-colorTextPrimary font-Mabry_Pro font-bold">
                O que é a TCClass ? 
              </h1>
             
            </div>
                <span className="mt-[1.5rem] text-[1.375rem] lg:text-justify  font-Space_Grotesk text-left text-colorTextPrimary md:text-base ">
                  Plataforma que combina IA e professores especializados para
                  ajudar estudantes na revisão e correção de TCCs, identificando
                  erros, sugerindo melhorias e oferecendo uma mentoria
                  tecnológica sem reescrever o conteúdo.
                </span>
                <span className="mt-[1.5rem] text-[1.375rem] lg:text-justify font-Space_Grotesk text-left text-colorTextPrimary md:text-base ">
                  Conecta estudantes a freelancers acadêmicos para correção
                  humanizada, mentoria e ajuda na estruturação do TCC. O aluno
                  define suas necessidades e orçamento, enquanto os
                  profissionais podem aceitar ou negociar valores até um acordo
                  justo.
                </span>
              </div>

              <div className="flex ">
                <button className="text-[1.375rem] mt-[1.5rem] hover:bg-slate-600 transition-all duration-300 font-medium font-Space_Grotesk rounded-xl h-10 w-96 text-colorWhite bg-bgColorDarkBlue">
                  coloque mais imagens nessa sessão aqui
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Sobre;

import React from "react";

const Home = () => {
  return (
    <div id="section1" className="flex flex-col ">
      <div className=" mt-32 md:mt-0 mx-[2.125rem] lg:mx-[6rem] max-w-[100vw] min-h-screen  md:flex  items-center md:gap-16 ">
        <div className="flex flex-col md:max-w-[40vw]">
          <h1 className="text-5xl text-wrap sm:text-6xl font-Mabry_Pro uppercase  font-bold text-colorTextPrimary text-left">
            Revise <span className="text-colorTextSecundary">e</span> Corrija{" "}
            <span className="text-colorTextSecundary">seu Tcc...</span>
            <div className=" border-b-colorTextPrimary border-b-2  my-5  "></div>
          </h1>
          <span className="text-colorTextPrimary text-base font-Space_Grotesk  md:text-left">
          Rápido, fácil e quase de graça, com resultados imediatos e sem complicação. Você escolhe o preço, aproveitando conveniência e eficiência sem pesar no bolso.
        </span>

        <div className="flex gap-2 mt-5">
        <button className="text-colorWhite hover:bg-slate-600 transition-all duration-300 bg-bgColorDarkBlue text-base px-6 py-2 rounded-[0.625rem]">
                Entrar
              </button>
              <button className="text-colorWhite hover:bg-slate-600 transition-all duration-300 bg-colorTextSecundary text-base px-6 py-2 rounded-[0.625rem]">
                Cadastre-se
              </button>
        </div>
        </div>
        {/* <div className="flex justify-center">
          <div className="bg-gray-400 shadow-md  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-200 w-64 h-64 gap-6 mt-5 flex flex-col justify-center items-center font-Space_Grotesk rounded-[1.25rem]">
            <div>
              <h1 className="text-base font-bold text-colorTextPrimary">
                Se conecte para usufruir de nossos recursos!
              </h1>
            </div>
            <div className="flex flex-col gap-3">
              <button className="text-colorWhite bg-bgColorDarkBlue text-base px-6 py-2 rounded-[0.625rem]">
                Entrar
              </button>
              <button className="text-colorWhite bg-colorTextSecundary text-base px-6 py-2 rounded-[0.625rem]">
                Cadastre-se
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;

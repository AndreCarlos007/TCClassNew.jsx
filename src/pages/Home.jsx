import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col ">
        <div className="absolute">
            
        </div>
      <div className="mt-36 mx-[2.125rem] max-w-[100vw] text-center">
        <div className="flex flex-col ">
          <h1 className="text-5xl sm:text-6xl font-Radio_Canada_Big font-bold text-colorTextPrimary text-center">
            REVISE <span className="text-colorTextSecundary">E</span> CORRIJA{" "}
            <span className="text-colorTextSecundary">SEU TCC</span>
          </h1>
        </div>
        <div className=" border-b-colorTextPrimary  border-b-4 mx-14 my-5"></div>
        <span className="text-colorTextPrimary text-xs font-Space_Grotesk">
          Rápido e fácil... em poucos segundos... de "graça".
        </span>
        <div className="flex justify-center">
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
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";

const Home = () => {
  return (
    <div id="section1" className="flex flex-col">
      <div className="mt-36 mx-[2.125rem] max-w-[100vw] text-center">
        <div className="flex flex-col ">
          <h1 className="text-5xl text-wrap sm:text-6xl font-Radio_Canada_Big font-bold text-colorTextPrimary text-center">
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
      <div className="relative bottom-[-4.5rem] max-w-[100vw]">
      <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1000 100"><g fill="#FFFFFF"><rect fill="#EDF0F2" width="100%" height="100%"/><path d="M0 0v99.7C62 69 122.4 48.7 205 66c83.8 17.6 160.5 20.4 240-12 54-22 110-26 173-10a392.2 392.2 0 0 0 222-5c55-17 110.3-36.9 160-27.2V0H0Z" opacity=".5"></path><path d="M0 0v74.7C62 44 122.4 28.7 205 46c83.8 17.6 160.5 25.4 240-7 54-22 110-21 173-5 76.5 19.4 146.5 23.3 222 0 55-17 110.3-31.9 160-22.2V0H0Z"></path></g></svg>
      </div>
    </div>
  );
};

export default Home;

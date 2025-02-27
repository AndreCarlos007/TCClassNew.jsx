import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import React from "react";

const Feedbacks = () => {
  return (
    <div id="section5">
      <div className="">
        <div className="flex flex-col ">
          <div className="mt-16 mb-16 mx-[2.125rem] max-w-[100vw] text-center ">
            <div className="flex flex-col ">
              <div>
                <h1 className="font-Space_Grotesk text-[1.5625rem] text-colorTextPrimary text-center">
                  Feedbacks
                </h1>
                <div className=" border-b-colorTextPrimary border-b-2 mx-14 mt-[2px] font-medium"></div>
              </div>

              <div className="mx-[2.125rem] mt-10">
                <Carousel>
                  <CarouselContent>
                    <CarouselItem>
                      <div className="flex ">
                          <div className="bg-gray-400 shadow-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-colorGray w-64 h-96 gap-2 mt-5 flex flex-col justify-center items-center font-Space_Grotesk rounded-[1.25rem]">
                              <div className="flex flex-col mx-5 gap-10">
                                <div className="flex items-center justify-center gap-2">
                                  <h1 className="text-[1rem] font-bold text-colorTextPrimary font-Space_Grotesk">André Carlos</h1>
                                  <Image className="rounded-full" src="/myPerfil.png" alt="Imagem de perfil feedback card 1" width={50} height={50} loading="lazy" />
                                </div>

                                <div>
                                  <p className="text-[1rem] font-Space_Grotesk text-colorTextPrimary">Que resultado incrivel! em pouco minutos consegui 
                                    ajustar meu Tcc e ter uma ideia melhor sobre, 
                                    com a ia! nota dez
                                    </p>
                                </div>
                                </div>
                          </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                    <div className="flex ">
                          <div className="bg-gray-400 shadow-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-colorGray w-64 h-96 gap-2 mt-5 flex flex-col justify-center items-center font-Space_Grotesk rounded-[1.25rem]">
                              <div className="flex flex-col mx-5 gap-10">
                                <div className="flex items-center justify-center gap-2">
                                  <h1 className="text-[1rem] font-bold text-colorTextPrimary font-Space_Grotesk">André Carlos</h1>
                                  <Image className="rounded-full" src="/myPerfil.png" alt="Imagem de perfil feedback card 1" width={50} height={50} loading="lazy" />
                                </div>

                                <div>
                                  <p className="text-[1rem] font-Space_Grotesk text-colorTextPrimary">Que resultado incrivel! em pouco minutos consegui 
                                    ajustar meu Tcc e ter uma ideia melhor sobre, 
                                    com a ia! nota dez
                                    </p>
                                </div>
                                </div>
                          </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                    <div className="flex ">
                          <div className="bg-gray-400 shadow-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-colorGray w-64 h-96 gap-2 mt-5 flex flex-col justify-center items-center font-Space_Grotesk rounded-[1.25rem]">
                              <div className="flex flex-col mx-5 gap-10">
                                <div className="flex items-center justify-center gap-2">
                                  <h1 className="text-[1rem] font-bold text-colorTextPrimary font-Space_Grotesk">André Carlos</h1>
                                  <Image className="rounded-full" src="/myPerfil.png" alt="Imagem de perfil feedback card 1" width={50} height={50} loading="lazy" />
                                </div>

                                <div>
                                  <p className="text-[1rem] font-Space_Grotesk text-colorTextPrimary">Que resultado incrivel! em pouco minutos consegui 
                                    ajustar meu Tcc e ter uma ideia melhor sobre, 
                                    com a ia! nota dez
                                    </p>
                                </div>
                                </div>
                          </div>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>

              <div className="mt-7">
                  <h1 className="text-[2.375rem] font-Radio_Canada_Big font-bold text-colorTextPrimary">Testes Reais!</h1>
                  <p className="text-[1.375rem] text-colorTextPrimary font-Space_Grotesk">Ta esperando o que? Faça seu login e aproveite 
                    nossas ferramentas...
                    </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;

import React from 'react'
import Image from 'next/image'

const Sobre = () => {
  return (
<div className='bg-bgColorGray mt-16'>
    <div className="flex flex-col ">
      <div className="mt-16 mb-1 mx-[2.125rem] max-w-[100vw]  ">
            <div className="flex flex-col ">
                <section className=''>
                <div className='flex flex-col items-center'>
                <svg
                    fill="none"
                    stroke="#1c2d45"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-16 h-16"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                  <h1 className='font-Radio_Canada_Big font-bold text-[2.1875rem] text-colorTextPrimary mt-[3rem]'>Análise</h1>
                  <p className='text-colorTextPrimary font-Space_Grotesk text-[1.375rem] text-justify'>A IA avalia o TCC, identificando erros ortográficos, sugerindo melhorias e comparando com outros trabalhos.</p>
                </div>

                <div className='flex flex-col items-center mt-[3rem] '>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    width="60px"
                    height="60px"
                    stroke='#1c2d45'
                    fill='#1c2d45'
                  >
                    <path
                      d="M 27 9 C 17.075 9 9 17.075 9 27 C 9 36.925 17.075 45 27 45 C 31.129213 45 34.9263 43.587367 37.966797 41.240234 L 51.048828 54.322266 C 51.952828 55.226266 53.418266 55.226266 54.322266 54.322266 C 55.226266 53.418266 55.226266 51.952828 
                    54.322266 51.048828 L 41.240234 37.966797 C 43.587367 34.9263 45 31.129213 45 27 C 45 17.075 36.925 9 27 9 z M 27 13 C 34.719 13 41 19.281 41 27 C 41 34.719 34.719 41 27 41 C 19.281 41 13 34.719 13 27 C 
                    13 19.281 19.281 13 27 13 z"
                    />
                  </svg>
                    <h1 className='font-Radio_Canada_Big font-bold text-[2.1875rem] text-colorTextPrimary mt-[3rem]'>Revisão</h1>
                    <p className='text-colorTextPrimary font-Space_Grotesk text-[1.375rem] text-justify '>Feedback detalhado com sugestões para aprimorar a escrita, estrutura e coesão do texto, sem reescrevê-lo.</p>
                </div>

                <div className='flex flex-col items-center mt-[3rem]'>
                <svg
                    fill="none"
                    stroke="#1c2d45"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-16 h-16"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>

                  <h1 className='font-Radio_Canada_Big text-center font-bold text-[2.1875rem] text-colorTextPrimary mt-[3rem]'>Prossionais <br /> Qualificados</h1>
                  <p className='text-colorTextPrimary font-Space_Grotesk text-[1.375rem] text-justify  '>Conexão com especialistas para mentoria e correção humanizada, com negociação direta entre aluno e professor.</p>
                
                </div>

                </section>

                <section className='mt-16'>
                    <div>
                        <h1 className='font-Space_Grotesk text-[1.5625rem] text-colorTextPrimary text-center'>Sobre Nós</h1>
                        <div className=" border-b-colorTextPrimary border-b-2 mx-14 mt-[2px] font-medium"></div>
                    </div>

                    <div className='flex flex-col mt-8 items-center'>
                        <h1 className='text-[3rem] text-colorTextPrimary font-Radio_Canada_Big font-bold'>O QUE É A</h1>
                        <Image src="/Logo.AVIF" alt='Logo do TCClass' width={252} height={52} loading='lazy' />
                        <span className='mt-[3rem] text-[1.375rem] font-medium font-Space_Grotesk text-justify text-colorTextPrimary'>Plataforma que combina IA e professores especializados para ajudar 
                            estudantes na revisão e correção de TCCs, identificando erros, 
                            sugerindo melhorias e oferecendo uma mentoria tecnológica sem reescrever o 
                            conteúdo.
                        </span>
                        <span className='mt-[1.5rem] text-[1.375rem] font-medium font-Space_Grotesk text-justify text-colorTextPrimary'>
                        Conecta estudantes a freelancers acadêmicos para correção humanizada, mentoria e 
                        ajuda na estruturação do TCC. O aluno define suas necessidades e orçamento, enquanto os 
                        profissionais podem aceitar ou negociar valores até um acordo justo. 
                        </span>
                    </div>

                    <div>
                        <button className='text-[1.375rem] my-16 font-medium font-Space_Grotesk w-full rounded-xl h-14  text-colorWhite bg-bgColorDarkBlue'>
                            Saiba Mais
                        </button>
                    </div>
                </section>
            </div>
        </div>
    </div>
    <div className='relative max-w-[100vw] bottom-[-1rem]'>
    <svg  xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1000 100"><g fill="#EDF0F2"><rect stroke='none' fill="#1C2D45" width="100%" height="100%"/><path d="M0 0v99.7C62 69 122.4 48.7 205 66c83.8 17.6 160.5 20.4 240-12 54-22 110-26 173-10a392.2 392.2 0 0 0 222-5c55-17 110.3-36.9 160-27.2V0H0Z" opacity=".5"></path><path d="M0 0v74.7C62 44 122.4 28.7 205 46c83.8 17.6 160.5 25.4 240-7 54-22 110-21 173-5 76.5 19.4 146.5 23.3 222 0 55-17 110.3-31.9 160-22.2V0H0Z"></path></g></svg>
    </div>
</div>

  )
}

export default Sobre

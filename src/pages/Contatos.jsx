import React from "react";
import Link from "next/link";

const Contatos = () => {
  return (
    <div>
      <div className="">
        <div className="flex flex-col ">
          <div className="mt-16 mb-16 mx-[2.125rem] max-w-[100vw] text-center ">
            <div className="flex flex-col ">
              <div>
                <h2 className="font-Space_Grotesk text-[1.5625rem] text-colorTextPrimary text-center">
                  Contatos
                </h2>
                <div className=" border-b-colorTextPrimary border-b-2 mx-14 mt-[2px] font-medium"></div>
                <h1 className="leading-none mt-8 text-[2.375rem] font-Radio_Canada_Big font-bold text-colorTextPrimary">
                  Contate-se <br /> Comigo!
                </h1>
              </div>

              <div className="flex flex-col mt-8">
                <div className="flex flex-col gap-1">
                  <Link
                    href="https://www.linkedin.com/in/andr%C3%A9-carloscx/"
                    target="_blank"
                    className="flex items-center gap-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="50"
                      height="50"
                      viewBox="0,0,256,256"
                    >
                      <g
                        fill="none"
                        fillRule="nonzero"
                        stroke="none"
                        strokeWidth="1"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="10"
                        strokeDasharray=""
                        strokeDashoffset="0"
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor="none"
                      >
                        <g transform="scale(5.33333,5.33333)">
                          <path
                            d="M24,4c-11.04569,0 -20,8.95431 -20,20c0,11.04569 8.95431,20 20,20c11.04569,0 20,-8.95431 20,-20c0,-11.04569 -8.95431,-20 -20,-20z"
                            fill="#1c2d45"
                          ></path>
                          <path
                            d="M14,19h4v15h-4zM15.988,17h-0.022c-1.194,0 -1.966,-0.89 -1.966,-2.001c0,-1.135 0.796,-1.999 2.011,-1.999c1.217,0 1.966,0.864 1.989,1.999c0,1.111 -0.772,2.001 -2.012,2.001zM35,24.5c0,-3.038 -2.462,-5.5 -5.5,-5.5c-1.862,0 -3.505,0.928 -4.5,2.344v-2.344h-4v15h4v-8c0,-1.657 1.343,-3 3,-3c1.657,0 3,1.343 3,3v8h4c0,0 0,-9.079 0,-9.5z"
                            fill="#ffffff"
                          ></path>
                        </g>
                      </g>
                    </svg>
                    <span className="text-base font-Space_Grotesk hover:text-colorTextSecundary transition-all duration-300 text-colorTextPrimary font-light">
                      | Linkedln
                    </span>
                  </Link>

                  <Link
                    href="https://github.com/AndreCarlos007"
                    target="_blank"
                    className="flex items-center gap-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="50"
                      height="50"
                      viewBox="0,0,256,256"
                    >
                      <g
                        fill="#1c2d45"
                        fillRule="evenodd"
                        stroke="none"
                        strokeWidth="1"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="10"
                        strokeDasharray=""
                        strokeDashoffset="0"
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor="none"
                      >
                        <g transform="scale(8,8)">
                          <path d="M16,4c-6.62891,0 -12,5.37109 -12,12c0,5.30078 3.4375,9.80078 8.20703,11.38672c0.60156,0.10938 0.82031,-0.25781 0.82031,-0.57812c0,-0.28516 -0.01172,-1.03906 -0.01562,-2.03906c-3.33984,0.72266 -4.04297,-1.60937 -4.04297,-1.60937c-0.54687,-1.38672 -1.33203,-1.75781 -1.33203,-1.75781c-1.08984,-0.74219 0.08203,-0.72656 0.08203,-0.72656c1.20313,0.08594 1.83594,1.23438 1.83594,1.23438c1.07031,1.83594 2.80859,1.30469 3.49219,1c0.10938,-0.77734 0.42188,-1.30469 0.76172,-1.60547c-2.66406,-0.30078 -5.46484,-1.33203 -5.46484,-5.92969c0,-1.3125 0.46875,-2.38281 1.23438,-3.22266c-0.12109,-0.30078 -0.53516,-1.52344 0.11719,-3.17578c0,0 1.00781,-0.32031 3.30078,1.23047c0.95703,-0.26562 1.98438,-0.39844 3.00391,-0.40234c1.01953,0.00391 2.04688,0.13672 3.00391,0.40234c2.29297,-1.55078 3.29688,-1.23047 3.29688,-1.23047c0.65625,1.65234 0.24609,2.875 0.12109,3.17578c0.76953,0.83984 1.23047,1.91016 1.23047,3.22266c0,4.60938 -2.80469,5.62109 -5.47656,5.92188c0.42969,0.36719 0.8125,1.10156 0.8125,2.21875c0,1.60547 -0.01172,2.89844 -0.01172,3.29297c0,0.32031 0.21484,0.69531 0.82422,0.57813c4.76563,-1.58984 8.19922,-6.08594 8.19922,-11.38672c0,-6.62891 -5.37109,-12 -12,-12z"></path>
                        </g>
                      </g>
                    </svg>
                    <span className="text-base font-Space_Grotesk hover:text-colorTextSecundary transition-all duration-300 text-colorTextPrimary font-light">
                      | Github
                    </span>
                  </Link>

                  <Link
                    href="https://andre-portfoliov2.vercel.app/"
                    className="flex gap-4 items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="50"
                      height="50"
                      viewBox="0,0,256,256"
                    >
                      <g
                        fill="#1c2d45"
                        fillRule="nonzero"
                        stroke="none"
                        strokeWidth="1"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="10"
                        strokeDasharray=""
                        strokeDashoffset="0"
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor="none"
                      >
                        <g transform="scale(5.33333,5.33333)">
                          <path d="M26,18c0,0 4,5 10,5h7.127c0.396,0 0.637,0.433 0.424,0.766c-1.253,1.965 -5.207,7.102 -12.831,8.148c-0.367,0.05 -0.563,0.459 -0.35,0.762c0.573,0.814 1.927,2.098 4.838,2.297c0.371,0.025 0.578,0.446 0.373,0.757c-1.185,1.794 -5.186,6.27 -15.581,6.27c-10.139,0 -15.181,-8.496 -15.908,-12.958c-0.069,-0.424 0.381,-0.736 0.749,-0.515c1.102,0.663 3.13,1.797 5.159,2.473c3,1 7.172,0.586 10,2c1.117,0.559 1.61,1.741 1.828,2.676c0.161,0.692 0.899,1.081 1.573,0.857l0.78,-0.26c0.432,-0.144 0.637,-0.637 0.433,-1.045l-0.614,-1.228l2.191,1.095c0.831,0.416 1.809,-0.188 1.809,-1.118v-2.183c0,-0.523 0.122,-1.038 0.355,-1.505v0c0.385,-0.77 0.234,-1.7 -0.375,-2.309l-1.496,-1.496c-0.323,-0.323 -0.622,-0.668 -0.896,-1.033v0c-1.717,-2.289 -3.751,-4.323 -6.04,-6.04l-0.548,-0.411v0c0,-2.75 -2.25,-5 -5,-5v0c0,0 2.604,-1.736 1.342,-5.209c-0.132,-0.362 -0.611,-0.441 -0.854,-0.142c-1.514,1.867 -5.486,5.352 -7.488,4.351c-2.53,-1.265 1,-7 6,-7c7.655,0 13.478,8.239 19.222,8.951c0.379,0.047 0.564,0.498 0.323,0.794c-0.724,0.889 -2.496,2.255 -6.545,2.255z"></path>
                          <path d="M44,14.83l-2.532,1.522l-1.26,2.648l-2.253,-1.897l-2.955,-0.356l1.137,-2.698l-0.569,-2.862l2.966,0.223l2.593,-1.41l0.693,2.841z"></path>
                        </g>
                      </g>
                    </svg>
                    <span className="text-base font-Space_Grotesk hover:text-colorTextSecundary transition-all duration-300 text-colorTextPrimary font-light">
                      | Portfólio
                    </span>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-5 mt-16">
              <form className="flex flex-col items-center justify-center gap-5 ">
                <input placeholder="Nome" className="bg-bgColorDarkBlue  w-[14.625rem] h-9 text-colorWhite pl-3 rounded-[10px]" type="text" />
                <input placeholder="Título" className="bg-bgColorDarkBlue w-[14.625rem] h-9 text-colorWhite pl-3 rounded-[10px]" type="text" />
                <textarea placeholder="Conteúdo" className="bg-bgColorDarkBlue pt-1 w-[14.625rem] h-36 text-colorWhite pl-3 rounded-[10px]" name="" id=""></textarea>
                <button className="bg-bgColorDarkBlue w-[7rem] h-9 text-colorWhite font-Space_Grotesk text-base rounded-[10px]" type="submit" name="enviar">Enviar</button>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contatos;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      <div className="">
        <div className="flex flex-col ">
          <div className="mt-2 mb-16 mx-[2.125rem] max-w-[100vw]">
            <div className="flex flex-col gap-5 ">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                <Image src="/Logo.AVIF" alt="Logo do Tcclass no footer" width={105} height={22} />
                <span className="text-colorTextPrimary font-Space_Grotesk text-xs">
                Desenvolvido por André Carlos
                </span>
                </div>
                <Link href="/">
                  <FaArrowAltCircleUp className="text-[2.5rem] text-colorTextPrimary" />
                </Link>
              </div>
              <div>
                <span className="font-Space_Grotesk text-colorTextPrimary">
                © 2025 · TCClass
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

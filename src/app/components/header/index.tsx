"use client";
import { useState } from "react";
import Image from "next/image";
import logoUnion from "../../../../public/logo-union-developers.svg";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const textHeader = [
    { name: "Sobre", id: "#sobre" },
    { name: "Pilares", id: "#pilares" },
    { name: "Benefícios", id: "#beneficios" },
    { name: "Etapas", id: "#etapas" },
    { name: "Depoimentos", id: "#testimonials" },
    { name: "Dúvidas", id: "#duvidas" },
  ];

  return (
    <div className="w-full sticky bg-[rgb(18,17,25)]  flex top-0 p-8 z-[9999999]">
      <header className="w-full flex items-center justify-between mx-auto ">
        <nav className="w-full flex items-center justify-between">
          <a href="#">
            <Image src={logoUnion} alt="Logo UD" />
          </a>
          <div className="hidden lg:flex items-center justify-center text-gray-300 text-2xl font-bold gap-4">
            {textHeader.map((items) => (
              <a 
                key={items.id}
                href={items.id}
                className="z-[99999] hover:bg-gradient-to-r from-purple-600 to-blue-600 hover:text-transparent bg-clip-text transition-all ease-out duration-300"
              >
                {items.name}
              </a>
            ))}
          </div>

          <div className="lg:hidden gap-5 ">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col gap-1 justify-center items-center focus:outline-none"
            >
              <div
                className={`h-1 w-8 bg-gray-300 transition-all duration-300 ${
                  isMenuOpen ? "rotate-[55deg] translate-y-1.5" : ""
                }`}
              />
              <div
                className={`h-1 w-8 bg-gray-300 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <div
                className={`h-1 w-8 bg-gray-300 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-[55deg] -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>

          {isMenuOpen && (
            <div className="absolute top-24 right-0 w-full pb-2  px-2 bg-[rgb(18,17,25)] shadow-lg rounded-lg z-10">
              <div className="flex flex-col p-4">
                {textHeader.map((items) => (
                  <a
                    key={items.id}
                    href={items.id}
                    className="text-gray-300 hover:bg-gradient-to-r from-purple-600 to-blue-600 hover:text-transparent bg-clip-text transition-all ease-out duration-300 p-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {items.name}
                  </a>
                ))}
              </div>
              <div className="shadow-xl  flex w-fit rounded-md bg-gradient-to-r from-purple-600 to-blue-600 p-[0.20rem] transition-allease-in duration-200 z-10 space-x-6">
                <a href="#subscribe">
                  <button className=" flex relative bg-transparent text-white p-5 h-[4rem] text-2xl rounded-lg font-semibold transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[rgb(18,17,25)] before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
                    Junte-se a nós
                  </button>
                </a>
              </div>
            </div>
          )}

          <div className="shadow-xl xl:flex xl:w-fit xl:rounded-md xl:bg-gradient-to-r xl:from-purple-600 xl:to-blue-600 xl:p-[0.20rem] xl:transition-all xl:ease-in xl:duration-200 z-10 space-x-6">
            <a href="#subscribe">
              <button className="hidden lg:flex relative bg-transparent text-white xl:px-16 xl:py-4 text-2xl rounded-lg font-semibold transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[rgb(18,17,25)] before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
                Junte-se a nós
              </button>
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}

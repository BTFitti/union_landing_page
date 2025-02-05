import Image from "next/image";
import logoUnion from "../../../../public/logo-union-developers.svg";
export function Header() {
  const textHeader = [
    "Sobre",
    "Pilares",
    "Benefícios",
    "Etapas",
    "Depoimentos",
    "Dúvidas",
  ];

  return (
    <div className="w-full bg-[rgb(18,17,25)] flex p-8 ">
      <header className="w-full flex items-center justify-center mx-auto  ">
        <nav className="w-full flex items-center justify-center gap-8 ">
          <a href="#">
            <Image src={logoUnion} alt="Logo UD" />
          </a>
          <div className="flex items-center justify-center text-gray-300 text-2xl font-bold gap-4  ">
            {textHeader.map((texto) => (
              <ul className=" items-center justify-center hidden lg:flex ">
                <a
                  href="#"
                  className="hover:bg-gradient-to-r from-purple-600 to to-blue-600 hover:text-transparent bg-clip-text transition-all ease-out duration-300"
                >
                  <li>{texto}</li>
                </a>
              </ul>
            ))}
          </div>

          <div className="shadow-xl xl:flex xl:w-fit xl:rounded-md xl:bg-gradient-to-r xl:from-purple-600 xl:to-blue-600 xl:p-[0.20rem] xl:transition-all xl:ease-in xl:duration-200 z-10 space-x-6">
            <a href="#">
              <button className="hidden lg:flex relative bg-transparent text-white xl:px-16 xl:py-4 text-2xl rounded-lg font-semibold transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0 before:bg-[rgb(18,17,25)] before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
                Junte-se a nós
              </button>
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}

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

          <button className="hidden lg:flex bg-gradient-to-tr from-purple-600 to-blue-800 text-white xl:px-16 xl:py-4 text-2xl rounded-lg font-semibold">
            Junte-se a nós
          </button>
        </nav>
      </header>
    </div>
  );
}

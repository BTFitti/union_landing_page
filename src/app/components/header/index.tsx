
export function Header() {
  const textHeader = ["Sobre", "Pilares",'Benefícios', 'Etapas', 'Depoimentos', 'Dúvidas'];

  return (
    <div className="w-full bg-[rgb(18,17,25)] flex p-8 ">
      <header className="w-full flex items-center justify-center mx-auto  ">
        <nav className="w-full flex items-center justify-center gap-8 ">
          <a href="#">
            <img
              src="https://media.graphassets.com/2rObY82rREidExKivdTB"
              alt="Logo Union Developers"
            />
          </a>
          <div className="flex items-center justify-center text-gray-300 text-2xl font-bold gap-4  ">
            {textHeader.map((texto)=>(
                <ul className=" items-center justify-center hidden lg:flex ">
                    <a href="" className="hover:bg-gradient-to-r from-purple-600 to to-blue-600 hover:text-transparent bg-clip-text transition-all ease-out duration-300">
                        <li>{texto}</li>
                    </a>
                </ul>
            ))}
            
          </div>
          <div>
            <button className="hidden lg:flex bg-gradient-to-tr from-purple-600 to-blue-800 text-white xl:px-14 xl:py-4 lg:px-7 lg:py-2 text-2xl rounded-lg bg-slate-400 font-semibold">
              Junte-se a nós
            </button>
          </div>
          
        </nav>
      </header>
    </div>
  );
}

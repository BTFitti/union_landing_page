export function Footer() {
  return (
    <section>
      <div className="flex bg-custom5 h-full xl:px-24 xl:flex xl:flex-row flex-col xl:py-14 py-10 xl:mt-20 justify-between">
        <div className="flex flex-col justify-center  items-center">
          <img
            src="	https://media.graphassets.com/2rObY82rREidExKivdTB"
            alt=""
            className="w-[20rem]"
          />
          <div>
            <p className="xl:text-xl text-center text-white  max-w-[22rem] px-5">
              O Union proporciona experiência para desenvolvedores juniors,
              transformando-os em profissionais preparados para o mercado.
            </p>
          </div>
        </div>
        <nav className="flex ">
          <div className="h-full  p-5 flex flex-col  text-white gap-5">
            <h2 className="text-xl  xl:text-3xl">Saiba mais</h2>
            <ul className="flex flex-col text-xl gap-2">
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#depoimentos">Depoimentos</a>
              </li>
            </ul>
          </div>

          <div className="h-full  p-5 text-white flex flex-col gap-5">
            <h2 className="text-xl xl:text-3xl">Dúvidas</h2>
            <ul className="flex flex-col text-xl gap-2">
              <li>
                <a href="#duvidas" className="text-lg">FAQ</a>
              </li>
              <li>
                <a href="#etapas">Como funciona</a>
              </li>
            </ul>
          </div>

          <div></div>
        </nav>
        <div className="flex xl:flex-col items-center gap-5 justify-center text-white  ">
          <a href="">
            <div className="flex justify-center flex-col items-center ">
              <img
                src="https://media.graphassets.com/4AjPcOSSuK4kIKUv8Mdg"
                className="w-7"
                alt=""
              />
              Email
            </div>
          </a>
          <a href="">
            <div className="flex justify-center items-center flex-col">
              <img
                src="https://media.graphassets.com/y4KMQdygSH6uZx46pxjU"
                className="w-7"
                alt=""
              />
              Linkedin
            </div>
          </a>
          <a href="">
            <div className="flex justify-center  items-center  flex-col">
              <img
                src="https://media.graphassets.com/4lDgbi8FQpq8QYSiranx"
                className="w-7"
                alt=""
              />
              Github
            </div>
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center py-2"><p className="text-white/80 xl:text-2xl">© Union Developers - 2025</p></div>
    </section>
  );
}

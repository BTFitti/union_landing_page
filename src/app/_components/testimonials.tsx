import Image from "next/image";
export function Testimonials() {
  return (
    <div>
      <section className="mt-56 w-full max-w-7xl mx-auto flex  flex-col">
        <div className="flex items-center justify-center w-full gap-5 xl:gap-10">
          <div className="bg-gradient-to-r from-custom2 to-custom1 w-full h-1 mt-1 xl:mt-2 flex items-center justify-center  rounded-xl"></div>
          <h2 className="  text-3xl xl:text-5xl font-bold bg-gradient-to-r from-purple-600  to-blue-800 text-transparent bg-clip-text ">
            Depoimentos
          </h2>
          <div className="bg-gradient-to-r from-custom2 to-custom1 w-full h-1 flex items-center justify-center mt-1 xl:mt-2  rounded-xl"></div>
        </div>
        <p className="text-center text-3xl text-white/80 pt-16 ]">
          Veja o que quem já passou por essa experiência fala
        </p>
        <div className="bg-red-50 w-full flex justify-center items-center h-screen mt-32">
          <div className="bg-custom3 h-fit w-60 flex items-center flex-col gap-5 justify-center mx-32">
            <div className="bg-gradient-to-r from-custom2 to-custom1 rounded-full p-1">
              <div className="bg-custom3 rounded-full p-1">
                <img
                  src="https://avatars.githubusercontent.com/u/83667469?v=4"
                  className="w-36"
                  alt=""
                />
              </div>
            </div>
            <h2 className="text-3xl text-white font-bold">José Ronaldo</h2>
            <p className="text-pretty text-center">
              O principal benefício do Union é ter uma pessoa mais experiente
              junto, que vai te direcionando. No Union, você encontra um
              ambiente muito profissional, onde é cobrado que você tenha padrão
              de commit, testes e uma alta qualidade de escrita de código,
              aumentando muita sua qualidade técnica.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

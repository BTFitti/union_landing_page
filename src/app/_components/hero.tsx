import Image from "next/image";
import uiImage from "../../../public/Curved UI Render.svg";

export function Hero() {
  return (
    //bg-bottom  bg-repeat
    <div className="flex w-full h-max bg-heroImg bg-cover pt-16 pb-10 px-7">
      <div className="flex xl:grid xl:grid-cols-2 xl:mx-36 ">
        <div className="flex flex-col xl:py-32 space-y-6">
          <h1 className="text-2xl xl:text-5xl text-white font-bold">
            Ganhe{" "}
            <strong className="bg-gradient-to-tr from-purple-600 to-blue-800 text-transparent bg-clip-text">
              experiência
            </strong>{" "}
            como desenvolvedor júnior
          </h1>
          <p className="text-white/90 text-xl  xl:text-4xl xl:leading-10 break-keep max-w-sm xl:max-w-2xl pb-5 ">
            Descubra como o Union oferece um ambiente prático e imersivo para
            desenvolvedores juniors ganharem experiência de mercado, mesmo sem
            estar em uma empresa. Participe dessa experiência única e impulsione
            sua carreira como desenvolvedor!
          </p>
          <div className="shadow-xl items-center justify-center flex w-full  xl:w-fit rounded-md bg-gradient-to-r from-purple-600 to-blue-600 xl:p-[0.20rem] xl:transition-all xl:ease-in xl:duration-200 z-10 space-x-6 ">
            <a href="#">
              <button className="lg:flex relative px-10 py-3 text-white xl:px-16 xl:py-4 text-2xl rounded-lg font-semibold transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0 before:bg-[rgb(18,17,25)]  before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
                Quero participar
              </button>
            </a>
          </div>
        </div>
        

        <Image
          src={uiImage}
          className="hidden xl:flex ml-10"
          alt="Um octógono com três pontos, representando a união dos desenvolvedores"
        />
      </div>
    </div>
  );
}

import Image from "next/image";
import uiImage from "../../../public/Curved UI Render.svg";
export function Hero() {
  return (
    //bg-bottom  bg-repeat
    <div className="flex w-full h-max bg-heroImg bg-cover pt-16 pb-10 px-4 ">
      <div className="flex xl:grid xl:grid-cols-2 xl:mx-36 ">
        <div className="flex flex-col xl:py-32 space-y-6">
          <h1 className="text-2xl xl:text-5xl text-white font-bold">
            Ganhe{" "}
            <strong className="bg-gradient-to-tr from-purple-600 to-blue-800 text-transparent bg-clip-text">
              experiência
            </strong>{" "}
            como desenvolvedor júnior
          </h1>
          <p className="text-white/90 xl:text-3xl xl:leading-10 break-keep max-w-sm xl:max-w-2xl">
            Descubra como o Union oferece um ambiente prático e imersivo para
            desenvolvedores juniors ganharem experiência de mercado, mesmo sem
            estar em uma empresa. Participe dessa experiência única e impulsione
            sua carreira como desenvolvedor!
          </p>
          <button className="bg-gradient-to-tr from-purple-600 to-blue-800 text-white px-12 py-4 xl:px-24 xl:py-5 rounded-lg w-fit text-3xl font-semibold drop-shadow-xl ">
            Quero participar
          </button>
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

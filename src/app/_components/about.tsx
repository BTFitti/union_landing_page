import Image from "next/image";
import Rocket from "../../../public/rocket-2.svg";
import Vector from "../../../public/Vector.svg";
import Controller from "../../../public/game_controller.svg";
import Star from "../../../public/star.svg";
import Planet from "../../../public/planet.svg";
import Like from "../../../public/like.svg";
import Lamp from "../../../public/bulb_on.svg";
import Profile from "../../../public/profile-2.svg";
import Logo from "../../../public/WayysMB8RQyrgcahBMQs.svg";

export function About() {
  const pilars = [
    {
      header: "Ativa",
      text: "Metodologia ativa é uma abordagem educacional que coloca o aluno como protagonista, onde ele é o responsável por ir atrás dos conhecimentos necessários, ficando o professor como um mentor, que vai mostrar o caminho para que ele possa ter sucesso no aprendizado.",
    },
    {
      header: "Andragogia",
      text: "É uma metodologia de ensino para adultos, que tem mais liberdade e colaboração, permitindo que o aluno decida quando, como e o que estudar, tornando o processo de aprendizagem mais sólido e eficaz, a andragogia valoriza a autonomia e a experiência dos adultos como base para a aprendizagem.",
    },
    {
      header: "Ágil",
      text: "A metodologia ágil é uma metodologia que estimula a colaboração entre o time, permitindo que tenha uma visão mais transparente, liberdade para fazer escolhas e tomar decisões, buscando a melhora continua entre os membros, os processos e a qualidade geral do trabalho.",
    },
  ];
  return (
    <div className="w-full  mx-auto flex flex-col items-center justify-center  ">
      {/* section sobre */}
      <section
        id="sobre"
        className="mt-32 max-w-[80rem] flex bg-gradient-to-r from-custom2 to-custom1 rounded-xl relative after:bg-gradient-to-t after:from-custom2 after:to-custom1 after:content-[''] after:absolute after:-bottom-14 after:left-1/2 after:top-auto  after:w-2 after:h-14  after:bg-red-50 "
      >
        <header className="absolute bg-[#1F1D2B] left-5 xl:left-20 -top-5 xl:-top-8 px-1">
          <h2 className="text-3xl xl:text-5xl font-semibold bg-gradient-to-r from-purple-600 to-blue-800 text-transparent bg-clip-text z-30">
            Quem somos?
          </h2>
        </header>
        <div className="w-full bg-[#1F1D2B] px-5 m-1 xl:px-20 pt-10 flex flex-col  rounded-lg xl:text-3xl text-white/80 space-y-6 text-center xl:text-justify  ">
          <p className="leading-normal">
            O Union é uma oportunidade única para desenvolvedores juniors, nossa
            missão é proporcionar a você um ambiente prático e imersivo,
            semelhante ao que você encontrará no mercado. Aqui, você vai
            vivenciar como é o dia a dia de um desenvolvedor de software,
            trabalhando lado a lado com líderes experientes e outros talentosos
            desenvolvedores que estão no mesmo caminho que você.
          </p>
          <p>
            No Union, você não apenas ganhará experiência, mas também estará
            pronto para enfrentar as demandas do mercado de tecnologia. Nossa
            abordagem holística enfatiza não apenas o conhecimento técnico, mas
            também habilidades interpessoais e práticas ágeis.
          </p>
          {/* bg-gradient-to-t  from-custom2 to-custom1 */}
          <div className="z-[9999] bg-pipe h-16 w-2 relative -bottom-16 left-1/2 top-auto rounded-t-lg "></div>
        </div>
      </section>

      {/* section pilares */}
      <section className="mt-32 max-w-[80rem] flex-col flex items-center justify-center w-full bg-gradient-to-b from-custom2 via-custom1 to-transparent rounded-xl relative p-1 mb-32 z-[-22] ">
        <header className="absolute bg-[#1F1D2B] -top-5 xl:-top-8 px-1">
          <div className=" bg-gradient-to-r  from-purple-600 to-blue-800 text-transparent bg-clip-text z-30">
            <h2 className="text-3xl xl:text-5xl font-semibold">Pilares</h2>
          </div>
        </header>

        <div className="flex flex-col w-full">
          <div className="bg-[#1F1D2B] py-5 px-4 xl:py-10 xl:px-5 rounded-t-xl ">
            <p className="xl:text-3xl text-white/80 text-center">
              Os pilares que sustentam o formato inovador de aprendizagem do
              Union é a junção de incríveis metodologias!
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-10  bg-[#1F1D2B] pt-[6rem] -m-[0.25rem] relative ">
            {/* cards */}
            {pilars.map((content) => (
              <div className="w-full flex flex-col h-full ">
                <header className="bg-gradient-to-r h-32 w-full from-custom2 to-custom1 flex items-center justify-center rounded-t-xl">
                  <h1 className="text-4xl text-white/80 font-bold">
                    {content.header}
                  </h1>
                </header>
                <section className=" bg-myGradient w-full rounded-b-xl flex-grow ">
                  <div className="flex p-5">
                    <p className="text-lg text-center text-white/80  ">
                      {content.text}
                    </p>
                  </div>
                </section>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*seção dos benefícios */}
      <section className="w-full max-w-[80rem]  flex flex-col mt-[5rem] ">
        <div className="flex items-center justify-center w-full gap-5 xl:gap-10">
          <div className="bg-gradient-to-r from-custom2 to-custom1 w-full h-1 mt-1 xl:mt-2 flex items-center justify-center  rounded-xl"></div>
          <h2 className="  text-3xl xl:text-5xl font-bold bg-gradient-to-r from-purple-600  to-blue-800 text-transparent bg-clip-text ">
            Benefícios
          </h2>
          <div className="bg-gradient-to-r from-custom2 to-custom1 w-full h-1 flex items-center justify-center mt-1 xl:mt-2  rounded-xl"></div>
        </div>
        <p className=" text-xl xl:text-3xl text-center max-w-4xl text-white/80 mx-auto mt-6">
          Conheça os benefícios incríveis que o Union proporciona para seus
          membros!
        </p>

        <div className="mt-20">
          {/*area dos beneficios onde ficarão um abaixo do outro */}
          <div className="flex-col  flex gap-20">
            {/*Item esquerda */}
            <div className="w-full flex-col flex xl:flex xl:flex-row gap-5 items-center text-center xl:text-start  ">
              <div className="w-fit">
                <Image className="xl:w-40" src={Rocket} alt="TESTE" />
              </div>
              <div className="flex flex-col xl:max-w-3xl gap-5 ">
                <h2 className="text-2xl xl:text-4xl font-bold text-white/80">
                  Preparação para o mercado
                </h2>
                <p className="text-xl text-center xl:text-left  xl:text-2xl max-w-xl text-white/80">
                  Os membros são equipados com uma compreensão profunda das
                  práticas de mercado, permitindo-lhes ingressar no setor com
                  confiança e conhecimento.
                </p>
              </div>
            </div>
            {/*Item esquerda */}

            {/*Item direita */}
            <div className="w-full flex flex-col xl:flex xl:flex-row-reverse gap-5 items-center   ">
              <div className="w-fit ">
                <Image className="xl:w-40" src={Vector} alt="TESTE" />
              </div>
              <div className="flex flex-col xl:max-w-3xl gap-5 ">
                <h2 className="text-2xl xl:text-4xl font-bold text-center xl:text-right text-white/80">
                  Aprendizado de novas tecnologias e ferramentas
                </h2>
                <p className=" text-xl xl:text-2xl text-white/80 text-center xl:text-right">
                  Os membros são expostos a uma variedade de tecnologias e
                  ferramentas relevantes, expandindo suas habilidades e
                  conhecimentos.
                </p>
              </div>
            </div>
            {/*Item direita */}

            <div className="w-full flex-col flex xl:flex xl:flex-row gap-5 items-center text-center xl:text-start  ">
              <div className="w-fit">
                <Image className="xl:w-40" src={Controller} alt="TESTE" />
              </div>
              <div className="flex flex-col xl:max-w-3xl gap-5 ">
                <h2 className="text-2xl xl:text-4xl font-bold text-white/80">
                  Desenvolvimento de hard skills
                </h2>
                <p className="text-xl text-center xl:text-left  xl:text-2xl max-w-2xl text-white/80">
                  Através de projetos reais, os membros fortalecem suas
                  habilidades técnicas, aumentando sua capacidade de contribuir
                  de forma eficaz em ambientes profissionais.
                </p>
              </div>
            </div>

            <div className="w-full flex flex-col xl:flex xl:flex-row-reverse gap-5 items-center   ">
              <div className="w-fit ">
                <Image className="xl:w-40" src={Star} alt="TESTE" />
              </div>
              <div className="flex flex-col xl:max-w-3xl gap-5 ">
                <h2 className="text-2xl xl:text-4xl font-bold text-center xl:text-right text-white/80">
                  Desenvolvimento de soft skills
                </h2>
                <p className=" text-xl xl:text-2xl text-white/80 text-center xl:text-right">
                  Além das competências técnicas, os membros aprimoram
                  habilidades interpessoais cruciais, como comunicação eficaz,
                  resolução de conflitos e trabalho em equipe.
                </p>
              </div>
            </div>

            <div className="w-full flex-col flex xl:flex xl:flex-row gap-5 items-center text-center xl:text-start  ">
              <div className="w-fit">
                <Image className="xl:w-40" src={Planet} alt="TESTE" />
              </div>
              <div className="flex flex-col xl:max-w-3xl gap-5 ">
                <h2 className="text-2xl xl:text-4xl font-bold text-white/80">
                  Ambiente imersivo
                </h2>
                <p className="text-xl text-center xl:text-left  xl:text-2xl max-w-xl text-white/80">
                  O Union oferece uma oportunidade única de aplicar
                  conhecimentos teóricos em cenários do mundo real,
                  proporcionando uma experiência diferenciada e valiosa.
                </p>
              </div>
            </div>

            <div className="w-full flex flex-col xl:flex xl:flex-row-reverse gap-5 items-center   ">
              <div className="w-fit ">
                <Image className="xl:w-40" src={Like} alt="TESTE" />
              </div>
              <div className="flex flex-col xl:max-w-3xl gap-5 ">
                <h2 className="text-2xl xl:text-4xl font-bold text-center xl:text-right text-white/80">
                  Networking
                </h2>
                <p className=" text-xl xl:text-2xl text-white/80 text-center xl:text-right">
                  A participação no Union expande sua rede de contatos, abrindo
                  portas para colaborações futuras e oportunidades
                  profissionais.
                </p>
              </div>
            </div>

            <div className="w-full flex-col flex xl:flex xl:flex-row gap-5 items-center text-center xl:text-start  ">
              <div className="w-fit">
                <Image className="xl:w-40" src={Lamp} alt="TESTE" />
              </div>
              <div className="flex flex-col xl:max-w-3xl gap-5 ">
                <h2 className="text-2xl xl:text-4xl font-bold text-white/80">
                  Domínio de metodologias ágeis
                </h2>
                <p className="text-xl text-center xl:text-left  xl:text-2xl max-w-xl text-white/80">
                  Através da vivência prática, os membros aprendem a aplicar
                  metodologias ágeis como Scrum, preparando-os para ambientes de
                  trabalho colaborativos.
                </p>
              </div>
            </div>

            <div className="w-full flex flex-col xl:flex xl:flex-row-reverse gap-5 items-center   ">
              <div className="w-fit ">
                <Image className="xl:w-40" src={Profile} alt="TESTE" />
              </div>
              <div className="flex flex-col xl:max-w-3xl gap-5 ">
                <h2 className="text-2xl xl:text-4xl font-bold text-center xl:text-right text-white/80">
                  Mentoria
                </h2>
                <p className=" text-xl xl:text-2xl text-white/80 text-center xl:text-right">
                  Os mentores experientes oferecem orientação valiosa,
                  proporcionando uma trajetória de aprendizado mais suave e
                  eficiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*seção das etapas*/}
      <section className="w-full max-w-[80rem]  flex flex-col mt-[5rem] px-10 ">
        <div className="flex items-center  justify-center w-full gap-5 xl:gap-10">
          <div className="bg-gradient-to-r from-custom2 to-custom1 w-full h-1 mt-1 xl:mt-2 flex items-center justify-center  rounded-xl"></div>
          <h2 className="  text-3xl xl:text-5xl font-bold bg-gradient-to-r from-purple-600  to-blue-800 text-transparent bg-clip-text ">
            Etapas
          </h2>
          <div className="bg-gradient-to-r from-custom2 to-custom1 w-full h-1 flex items-center justify-center mt-1 xl:mt-2  rounded-xl"></div>
        </div>
        <p className=" text-xl xl:text-3xl text-center max-w-4xl text-white/80 mx-auto mt-6">
          Conheça as etapas do nosso processo seletivo
        </p>

        {/*area das etapas */}
        <div className=" mt-[8rem] mx-auto w-full max-w-7xl  h-screen relative mb-96 xl:mb-20 ">
          <div className="flex w-full h-full ">
            <ol className="w-full flex flex-col   gap-5 ">
              <li className="flex items-center justify-start">
                <div
                  className="bg-custom5 rounded-xl z-[99999] w-[15rem] xl:w-[27.2rem] px-12 xl:px-24 py-10 h-[16.1rem] relative flex  items-center justify-center shadow-custom-shadow  
                xl:after:content-[''] xl:after:absolute xl:after:w-56 xl:after:h-[0.22rem] xl:after:bg-test2 xl:after:top-0 xl:after:-right-[10.5rem]  
                 
                before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[63px] before:z-[1] before:bg-no-repeat before:bg-[url(https://res.cloudinary.com/dbnq26wqe/image/upload/v1689446863/union/border-top-desktop_vdpwro.svg)]
                  "
                >
                  <span className="text-[10rem] absolute -left-10  xl:text-[14rem] xl:absolute  xl:-left-14 font-bold bg-test text-transparent bg-clip-text">
                    1
                  </span>
                  <div className="text-center inline-flex flex-col gap-5 ">
                    <h3 className="text-xl xl:text-3xl font-extrabold text-white/80">
                      Pré-inscrição
                    </h3>
                    <p className="text-md xl:text-2xl text-white/80 text-center">
                      Inicie a sua inscrição preenchendo o nosso formulário
                    </p>
                  </div>
                </div>
              </li>
              <li className="flex items-center justify-end">
                <div
                  className="bg-custom5 rounded-xl w-[15rem] xl:w-[27.2rem] px-12 xl:px-24 py-10 h-[16.1rem] relative flex  items-center justify-center shadow-custom-shadow2 
                xl:after:content-[''] xl:after:absolute xl:after:w-56 xl:after:h-[0.22rem] xl:after:bg-test2 xl:after:top-0 xl:after:-left-[10rem]  
                 xl:after:z-[-9999]
                before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[63px] before:z-[1] before:bg-no-repeat before:bg-[url(https://res.cloudinary.com/dbnq26wqe/image/upload/v1689446863/union/border-top-desktop_vdpwro.svg)]
                  "
                >
                  <span className="text-[10rem] absolute -left-10  xl:text-[14rem] xl:absolute  xl:-left-14 font-bold bg-test text-transparent bg-clip-text">
                    2
                  </span>
                  <div className="text-center inline-flex flex-col gap-5 ">
                    <h3 className="text-xl xl:text-3xl font-extrabold text-white/80">
                      Análise do formulário
                    </h3>
                    <p className="text-md xl:text-2xl text-white/80 text-center">
                      O nosso time irá analisar suas informações
                    </p>
                  </div>
                </div>
              </li>
              <li className="flex items-center justify-start">
                <div
                  className="bg-custom5 rounded-xl w-[15rem] xl:w-[27.2rem] px-12 xl:px-24 py-10 h-[16.1rem] relative flex  items-center justify-center shadow-custom-shadow  
                xl:after:content-[''] xl:after:absolute xl:after:w-56 xl:after:h-[0.22rem] xl:after:bg-test2 xl:after:top-0 xl:after:-right-[10.5rem]  xl:after:z-[-9999]
                 
                before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[63px] before:z-[1] before:bg-no-repeat before:bg-[url(https://res.cloudinary.com/dbnq26wqe/image/upload/v1689446863/union/border-top-desktop_vdpwro.svg)]
                  "
                >
                  <span className="text-[10rem] absolute -left-10  xl:text-[14rem] xl:absolute  xl:-left-14 font-bold bg-test text-transparent bg-clip-text">
                    3
                  </span>
                  <div className="text-center inline-flex flex-col gap-5 ">
                    <h3 className="text-xl xl:text-3xl font-extrabold text-white/80">
                      Desafio técnico
                    </h3>
                    <p className="text-md xl:text-2xl text-white/80 text-center">
                      Após a análise você receberá um desafio prático
                    </p>
                  </div>
                </div>
              </li>
              <li className="flex items-center justify-end">
                <div
                  className="bg-custom5 rounded-xl w-[15rem] xl:w-[27.2rem] px-12 xl:px-24 py-10 h-[16.1rem] relative flex  items-center justify-center shadow-custom-shadow2 
                xl:after:content-[''] xl:after:absolute xl:after:w-56 xl:after:h-[0.25rem] xl:after:bg-test2 xl:after:top-0 xl:after:-left-[10rem]  
                 xl:after:z-[-9999]
                before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[63px] before:z-[1] before:bg-no-repeat before:bg-[url(https://res.cloudinary.com/dbnq26wqe/image/upload/v1689446863/union/border-top-desktop_vdpwro.svg)]
                  "
                >
                  <span className="text-[10rem] absolute -left-10  xl:text-[14rem] xl:absolute  xl:-left-14 font-bold bg-test text-transparent bg-clip-text">
                    4
                  </span>
                  <div className="text-center inline-flex flex-col gap-5 ">
                    <h3 className="text-xl xl:text-3xl font-extrabold text-white/80">
                      Entrevista
                    </h3>
                    <p className="text-md xl:text-2xl text-white/80 text-center">
                      Nessa fase iremos bater um papo para que possamos conhecer
                      melhor você
                    </p>
                  </div>
                </div>
              </li>
            </ol>
          </div>
          <div className="w-[0.32rem] h-[160%] xl:h-[calc(100%_-_8.2rem)] absolute bg-test top-0  z-[-9999]  left-1/2 right-1/2"></div>
        </div>
      </section>

      <section className="w-full mx-auto   bg-[url(https://media.graphassets.com/zqzyqOSd6RG6uFM2Rdgx)] bg-cover ">
        <div className=" w-full max-w-7xl  mx-auto">
          <div className=" w-full xl:flex xl:items-center xl:justify-center  h-[50rem] pt-32 xl:pt-0 px-5">
            <div className="bg-custom3 flex flex-col xl:h-[20rem] h-full rounded-xl w-full xl:flex xl:flex-row xl:items-center  xl:justify-center ">
              <Image src={Logo} alt="Logo do site" className="animate-float" />
              <div className="w-full flex flex-col items-center gap-5 xl:p-10 pt-1 ">
                <h2 className="text-3xl xl:text-4xl w-full max-w-xl text-center text-white/80 font-bold">
                  Vivencia na prática, ambiente imersivo, desafios e muito mais!
                </h2>
                <h3 className=" text-2xl text-pretty xl:text-3xl font-bold text-red-400 text-center animate-pulse">
                  Inscreva-se já! Vagas limitadas
                </h3>
                <div className="shadow-xl flex   items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-blue-600 p-[0.20rem] transition-all ease-in duration-200 z-10 space-x-6">
                  <a href="#">
                    <button className=" lg:flex relative bg-transparent text-white px-5 py-2 xl:px-20 xl:py-4 text-2xl rounded-lg font-semibold transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0 before:bg-custom3 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
                      Inscrever-se agora
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

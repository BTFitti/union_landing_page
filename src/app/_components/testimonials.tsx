"use client";

import { Swiper, SwiperSlide } from "swiper/react";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, EffectCoverflow } from "swiper/modules";
import SwiperCore from "swiper";
SwiperCore.use([Navigation, EffectCoverflow]);

import { register } from "swiper/element";

export function Testimonials() {
  const members = [
    {
      id: "1",
      pic: "https://avatars.githubusercontent.com/u/75648386?v=4",
      name: "Luiz Meraki",
      testimonial:
        "No Union você consegue ter muita evolução em pouco tempo, desenvolvendo tanto sua parte técnica como as habilidades interpessoais. No momento que você entra no Union, você mergulha a fundo nas tecnologias e vai aprendendo e aprimorando durante o dia a dia.",
      linkedin: "https://www.linkedin.com/in/luizmeraki/",
      github: "https://github.com/LuizMeraki",
    },
    {
      id: "2",
      pic: "https://avatars.githubusercontent.com/u/78116908?v=4",
      name: "Matheus Oliveira",
      testimonial:
        "Antes de participar do Union, eu não tinha a mínima ideia de como era trabalhar em equipe e foi muito importante ter essa experiência. Durante a participação, consegui desenvolver soft skills importantes para o mercado de trabalho, como organização, atenção e trabalho em equipe.",
      linkedin: "https://www.linkedin.com/in/matheushenrioliveira/",
      github: "https://github.com/matheusOliv23",
    },
    {
      id: "3",
      pic: "https://avatars.githubusercontent.com/u/83667469?v=4",
      name: "José Ronaldo",
      testimonial:
        " O principal benefício do Union é ter uma pessoa mais experiente junto, que vai te direcionando. No Union, você encontra umambiente muito profissional, onde é cobrado que você tenhapadrão de commit, testes e uma alta qualidade de escrita decódigo, aumentando muita sua qualidade técnica.",
      linkedin: "https://www.linkedin.com/in/devjoseronaldo",
      github: "https://github.com/Dev-JoseRonaldo",
    },
    {
      id: "4",
      pic: "https://avatars.githubusercontent.com/u/105453766?v=4",
      name: "Petrus Borges",
      testimonial:
        "No Union eu consegui desenvolver minhas hard skills, aprendendo novas tecnologias e melhorando a escrita do meu código. Eu percebi o quanto a parte de soft skills é importante para o mercado de tecnologia, como ter inteligência emocional, comunicação efetiva e resolução de problemas.",
      linkedin: "https://www.linkedin.com/in/petrusborgesmachado/",
      github: "https://github.com/PetrusBorges",
    },
    {
      id: "5",
      pic: "https://avatars.githubusercontent.com/u/90845572?v=4",
      name: "Salomão Leal",
      testimonial:
        "Eu estava preso em cursos e não sabia como que era o fluxo de trabalho de uma empresa, com o Union eu consegui aprender isso e hoje me sinto muito mais preparado para o mercado. Durante a experiência no Union, eu aprendi a como pesquisar e se virar para resolver minhas task.",
      linkedin: "https://www.linkedin.com/in/salomaosilval/",
      github: "https://github.com/salomaosilval",
    },
  ];
  const requirements = [
    {
      icon: "https://media.graphassets.com/9YpETKdFREqKQa2wztob",
      text: "Ter mais que 18 anos",
    },
    {
      icon: "https://media.graphassets.com/9YpETKdFREqKQa2wztob",
      text: "Ter 1 ano ou mais de estudo em programação",
    },
    {
      icon: "https://media.graphassets.com/9YpETKdFREqKQa2wztob",
      text: "Ainda não trabalhar na área",
    },
    {
      icon: "https://media.graphassets.com/9YpETKdFREqKQa2wztob",
      text: "Já ter criado projetos sozinho que não sejam de cursos ou eventos",
    },
    {
      icon: "https://media.graphassets.com/9YpETKdFREqKQa2wztob",
      text: "Não participar de bootcamps ou programas de capacitação",
    },
    {
      icon: "https://media.graphassets.com/9YpETKdFREqKQa2wztob",
      text: "Ter disponibilidade para trabalhar no mínimo 1 hora por dia no projeto",
    },
    {
      icon: "https://media.graphassets.com/9YpETKdFREqKQa2wztob",
      text: "Ter disponibilidade para participar das reuniões do time, durante a semana e finais de semana",
    },
  ];

  return (
    <div>
      <section className="mt-56 mx-auto flex w-full max-w-[90rem]  flex-col">
        <div className="flex items-center justify-center max-w-7xl mx-auto w-full gap-5 xl:gap-10">
          <div className="bg-gradient-to-r from-custom2 to-custom1 w-full h-1 mt-1 xl:mt-2 flex items-center justify-center  rounded-xl"></div>
          <h2 className="  text-3xl xl:text-5xl font-bold bg-gradient-to-r from-purple-600  to-blue-800 text-transparent bg-clip-text ">
            Depoimentos
          </h2>
          <div className="bg-gradient-to-r from-custom2 to-custom1 w-full h-1 flex items-center justify-center mt-1 xl:mt-2  rounded-xl"></div>
        </div>
        <p className="text-center text-2xl xl:text-3xl text-white/80 pt-16 mb-14">
          Veja o que quem já passou por essa experiência fala
        </p>

        <div>
          <Swiper
            spaceBetween={190}
            effect={"coverflow"}
            loop={true}
            slidesPerView={2}
            centeredSlides={true}
            loopAdditionalSlides={1}
            breakpoints={{
              370: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 100,
              modifier: 1,
              slideShadows: false,
              depth: 200,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[EffectCoverflow, Navigation]}
            className="swiper-container"
          >
            {members.map((info) => (
              <SwiperSlide key={info.id}>
                <div className="flex items-center justify-center  px-10 xl:px-0 w-full gap-5 h-full ">
                  <div className="flex   w-max rounded-xl xl:h-full h-[50rem] bg-gradient-to-r p-1 from-custom2 to-custom1 ">
                    <div className=" bg-custom3 py-10 xl:px-5 xl:w-[28rem]   rounded-xl flex flex-col gap-8 items-center text-center ">
                      <div className="bg-gradient-to-r rounded-full p-[0.10rem]  w-max from-custom2 to-custom1">
                        <div className="bg-custom3 p-1  rounded-full">
                          <img
                            src={info.pic}
                            alt=""
                            className="w-24 rounded-full"
                          />
                        </div>
                      </div>
                      <h3 className=" xl:text-3xl text-3xl text-white">
                        {info.name}
                      </h3>
                      <p className="text-2xl text-white/80">
                        {info.testimonial}
                      </p>
                      <div className="w-full flex gap-5 justify-center items-center">
                        <a
                          href={info.linkedin}
                          className="flex flex-col items-center justify-center text-lg text-white"
                        >
                          <img
                            src="https://media.graphassets.com/y4KMQdygSH6uZx46pxjU"
                            alt=""
                            className="w-6"
                          />
                          Linkedin
                        </a>
                        <a
                          href={info.github}
                          className="flex flex-col items-center justify-center text-lg text-white"
                        >
                          <img
                            src="https://media.graphassets.com/4lDgbi8FQpq8QYSiranx"
                            alt=""
                            className="w-6"
                          />
                          Github
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <img
                  src="https://media.graphassets.com/qqQaVHN9RsqUL84yyh5F"
                  alt=""
                />
              </div>
              <div className="swiper-button-next slider-arrow">
                <img
                  src="https://media.graphassets.com/373F5yMTpyZLr5qZgyhw"
                  alt=""
                />
              </div>
            </div>
          </Swiper>
        </div>
      </section>

      <section className="mt-56 mx-auto items-center p-20 h-full px-20 flex w-full max-w-[80rem] mb-10 rounded-xl text-center  gap-5 flex-col bg-test3  text-white">
        <h2 className="text-6xl font-extrabold">Junte-se ao time!</h2>
        <p className="text-3xl max-w-[40rem] mb-5 ">
          Tem interesse em participar do Union? Confira abaixo os requisitos
          para participar
        </p>
        {requirements.map((req) => (
          <ul className="self-start px-5 text-start ">
            <div className="flex gap-5 ">
              <img src={req.icon} alt="" />
              <li className="text-2xl">{req.text}</li>
            </div>
          </ul>
        ))}

        <div className="shadow-xl xl:flex justify-center rounded-md bg-test w-full xl:p-[0.20rem] xl:transition-all xl:ease-in xl:duration-200 z-10 space-x-6 mt-20 ">
          <button className=" flex relative bg-transparent text-white h-20 text-3xl rounded-lg font-semibold transition-colors before:absolute before:left-0 before:top-0 before:-z-10 w-full items-center justify-center before:h-full before:w-full before:origin-top-left before:rounded-md before:scale-x-0 before:bg-custom6 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
            Inscrever-se
          </button>
        </div>
      </section>
    </div>
  );
}

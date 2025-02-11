"use client";
import { useState } from "react";

export function Faq() {
  const faq = [
    {
      id: 1,
      h3: "O que é o Union?",
      text: "O Union é um ambiente prático e imersivo que busca simular o mais próximo do que você vai encontrar nas empresas, desafiando seus membros a resolver problemas reais, com cronogramas e prazos de entrega.\n\nNo Union, você desenvolve as skills mais procuradas pelo mercado, trabalha com ferramentas e metodologias utilizadas pelas empresas, além de ganhar experiência trabalhando com outras pessoas de diferentes partes do Brasil.\n\nVocê vivencia na prática como é o dia a dia de um desenvolvedor em uma empresa e fica mais preparado para conquistar uma vaga.",
    },
    {
      id: 2,
      h3: "Quanto custa para fazer parte do Union?",
      text: "Nada! O Union é 100% gratuito.",
    },
    {
      id: 3,
      h3: "Quem pode participar?",
      text: "Pessoas que ainda não trabalham na área e que não participem de bootcamps ou plataformas de capacitação.",
    },
    {
      id: 4,
      h3: "Preciso ter experiência na área?",
      text: "Sim. Você precisa ter no mínimo 1 ano de estudo em programação, além disso é necessário que já tenha criado algum projeto sozinho, sem que seja projetos guiados, como de cursos e eventos.",
    },
    {
      id: 5,
      h3: "Qual a idade mínima para fazer parte do Union?",
      text: "Você precisa ter no mínimo 18 anos.",
    },
    {
      id: 6,
      h3: "Como me inscrevo?",
      text: "Se você se encaixa nos requisitos obrigatórios basta preencher o nosso formulário e fazer sua pré-inscrição.",
    },
    {
      id: 7,
      h3: "Existe algum processo seletivo? Como funciona?",
      text: "Nosso processo seletivo consiste em algumas etapas, que são: pré-inscrição pelo formulário da página, análise de suas informações no formulário, desafio técnico e uma entrevista com nosso time.\n\nNosso objetivo é entender seu momento profissional e avaliar se você tem o perfil que buscamos para o Union.",
    },
    {
      id: 8,
      h3: "O que vou aprender?",
      text: "Você aprenderá como trabalhar com metodologias e ferramentas utilizadas pelas empresas, desenvolver hard e soft skills, tudo de forma prática e mão na massa!",
    },
    {
      id: 9,
      h3: "Quanto tempo por dia preciso me dedicar aos projetos?",
      text: "Você precisa ter disponibilidade de trabalhar no mínimo 1 hora por dia no projeto, é importante também ter disponibilidade para participar das reuniões do time, que acontecem diariamente e aos finais de semana.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null); // Estado para controlar qual FAQ está aberto

  const toggleContent = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Alterna o índice aberto
  };

  return (
    <section className="mt-56 mx-auto flex w-full max-w-[90rem] h-full gap-5 flex-col">
      <div className="flex items-center justify-center max-w-7xl mx-auto w-full gap-5 xl:gap-10 mb-10">
        <div className="bg-gradient-to-r from-custom2 to-custom1 w-full h-1 mt-1 xl:mt-2 flex items-center justify-center rounded-xl"></div>
        <h2 className="text-3xl xl:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-800 text-transparent bg-clip-text">
          Dúvidas
        </h2>
        <div className="bg-gradient-to-r from-custom2 to-custom1 w-full h-1 flex items-center justify-center mt-1 xl:mt-2 rounded-xl"></div>
      </div>
      {faq.map((info, index) => (
        <dl className="flex items-center justify-center mb-7" key={info.id}>
          <div className="flex flex-col w-full">
            <dt
              className={`bg-teste5 flex font-bold  w-full h-[8rem] items-center rounded-xl p-5 ${
                openIndex === index ? "rounded-b-none" : "rounded-xl"
              }`}
            >
              <button
                className={`flex  justify-between w-full `}
                onClick={() => toggleContent(index)}
              >
                <h3 className="text-4xl  text-white/80">{info.h3}</h3>
                <img
                  src={
                    openIndex === index
                      ? "https://media.graphassets.com/dU9PoI4QjW9AYBDdAhBI"
                      : "https://media.graphassets.com/DKDAgqcGR3Cqbmak0FMU"
                  }
                  alt=""
                />
              </button>
            </dt>
            {openIndex === index && (
              <dd className="bg-red-50 w-full h-full text-3xl gap-5 flex flex-col p-5 rounded-b-xl">
                {info.text.split("\n\n").map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </dd>
            )}
          </div>
        </dl>
      ))}
    </section>
  );
}

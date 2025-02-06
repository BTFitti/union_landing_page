export function About() {
  return (
    <div className="w-full max-w-[80rem] mx-auto flex flex-col items-center justify-center px-3  ">
      <section
        id="sobre"
        className="mt-32 flex bg-gradient-to-r from-custom2 to-custom1 rounded-xl relative "
      >
        <header className="absolute bg-[#1F1D2B] left-5 xl:left-20 -top-5 xl:-top-8 px-1">
          <div className=" bg-gradient-to-r from-purple-600 to-blue-800 text-transparent bg-clip-text z-30">
            <h2 className="text-3xl xl:text-5xl font-semibold">Quem somos?</h2>
          </div>
        </header>
        <div className="w-full bg-[#1F1D2B] px-5 m-1 xl:px-20 pt-10 rounded-lg xl:text-3xl text-white/80 space-y-6 text-center xl:text-justify  ">
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

          <div className="teste2 bg-gradient-to-t from-transparent via-custom2 to-custom4 w-[0.39rem] h-14 m-auto relative top-[3.5rem] rounded-t-lg "></div>
        </div>
      </section>

      {/* section pilares */}
      <section className="mt-32 flex items-center justify-center w-full bg-gradient-to-r from-custom2 to-custom1 rounded-xl relative p-1 mb-32 ">
        <header className="absolute bg-[#1F1D2B] -top-5 xl:-top-8 px-1">
          <div className=" bg-gradient-to-r  from-purple-600 to-blue-800 text-transparent bg-clip-text z-30">
            <h2 className="text-3xl xl:text-5xl font-semibold">Pilares</h2>
          </div>
        </header>
        <div className="flex flex-col w-full ">
          <div className="bg-[#1F1D2B] w-full py-5 px-4 xl:py-10 xl:px-5 rounded-t-xl">
            <p className="xl:text-3xl text-white/80 text-center">
              Os pilares que sustentam o formato inovador de aprendizagem do
              Union é a junção de incríveis metodologias!
            </p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 w-full bg-[#1F1D2B] pt-32 rounded-b-xl px-1  ">
            {/* card1 */}
            <div className="w-full flex flex-col h-full ">
              <header className="bg-gradient-to-r h-28 w-full from-custom2 to-custom1 flex items-center justify-center rounded-t-xl">
                <h1 className="text-4xl text-white/80 font-bold">Ativa</h1>
              </header>
              <section className="bg-myGradient w-full p-5 rounded-b-xl flex-1 flex items-center ">
                <p className="text-xl text-white/80  text-center ">
                  Metodologia ativa é uma abordagem educacional que coloca o
                  aluno como protagonista, onde ele é o responsável por ir atrás
                  dos conhecimentos necessários, ficando o professor como um
                  mentor, que vai mostrar o caminho para que ele possa ter
                  sucesso no aprendizado.
                </p>
              </section>
            </div>

            {/* card2 */}
            <div className="w-full flex flex-col h-full ">
              <header className="bg-gradient-to-r h-28 w-full from-custom2 to-custom1 flex items-center justify-center rounded-t-xl">
                <h1 className="text-4xl text-white/80 font-bold">Andragogia</h1>
              </header>
              <section className="bg-myGradient w-full  p-5 rounded-b-xl flex-1 flex items-center ">
                <p className="text-xl text-white/80 text-center ">
                  É uma metodologia de ensino para adultos, que tem mais
                  liberdade e colaboração, permitindo que o aluno decida quando,
                  como e o que estudar, tornando o processo de aprendizagem mais
                  sólido e eficaz, a andragogia valoriza a autonomia e a
                  experiência dos adultos como base para a aprendizagem.
                </p>
              </section>
            </div>

            {/* card3 */}
            <div className="w-full flex flex-col h-full  ">
              <header className="bg-gradient-to-r h-28 w-full from-custom2 to-custom1 flex items-center justify-center rounded-t-xl">
                <h1 className="text-4xl text-white/80 font-bold">Ágil</h1>
              </header>
              <section className="bg-myGradient w-full f p-5 rounded-b-xl flex-1 flex items-center ">
                <p className="text-xl text-white/80 text-center  ">
                  A metodologia ágil é uma metodologia que estimula a
                  colaboração entre o time, permitindo que tenha uma visão mais
                  transparente, liberdade para fazer escolhas e tomar decisões,
                  buscando a melhora continua entre os membros, os processos e a
                  qualidade geral do trabalho.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:bg-gradient-to-r before:from-custom3 before:to-custom3 */}
    </div>
  );
}

export function About() {
  return (
    <div className="mx-36 flex flex-col ">
      {/* //uma section para cada parte do sobre */}
      <section className="border-purple-600 border-[3px] w-full h-max rounded-xl relative z-0 mt-16 after:bg-slate-100">
        <h1 className="text-4xl text-purple-600  absolute -top-10 ">
          Quem somos
        </h1>

        <div className="px-28 py-20 space-y-6">
          <p className="text-3xl text-white/90  leading-10">
            O Union é uma oportunidade única para desenvolvedores juniors, nossa
            missão é proporcionar a você um ambiente prático e imersivo,
            semelhante ao que você encontrará no mercado. Aqui, você vai
            vivenciar como é o dia a dia de um desenvolvedor de software,
            trabalhando lado a lado com líderes experientes e outros talentosos
            desenvolvedores que estão no mesmo caminho que você.
          </p>
          <p className="text-3xl text-white/90  leading-10">
            No Union, você não apenas ganhará experiência, mas também estará
            pronto para enfrentar as demandas do mercado de tecnologia. Nossa
            abordagem holística enfatiza não apenas o conhecimento técnico, mas
            também habilidades interpessoais e práticas ágeis.
          </p>
        </div>
      </section>
     
    </div>
  );
}

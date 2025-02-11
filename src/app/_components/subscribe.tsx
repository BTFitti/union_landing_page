"use client"
import { SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { FormDataSchema } from "../lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = z.infer<typeof FormDataSchema>;


export function Subscribe() {
    const steps = [
        {
          id: "1",
          name: "Dados pessoais",
          fields: ["firstName", "age", "github", "linkedin", "email", "frontend"],
        },
        {
          id: "2",
          name: "Informações técnicas ",
          fields: ["timeLearning", "bestProject", "about"],
        },
        {
          id: "3",
          name: "Sobre você",
          fields: [
            "motivation",
            "responsabilities",
            "feedbacks",
            "aboutUs",
            "whyUs",
            "group",
          ],
        },
        {
          id: "4",
          name: "Enviar ",
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

  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<Inputs | null>(null);
  const [selectedOption, setSelectedOption] = useState("");
  const handleRadioChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedOption(event.target.value);
  };

  const delta = currentStep - previousStep;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
  });

  const processForm: SubmitHandler<Inputs> = (data) => {
    setFormData(data);
    console.log(formData);
    console.log(data);
    reset();
  };

  type FieldName = keyof Inputs;

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await handleSubmit(processForm)();
      }
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };
  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };
  function testee() {
    setShowForm(true);
  }

  return (
    <div>
      <section className="mt-56 mx-auto h-full justify-between items-center p-20  flex w-full max-w-[80rem] mb-10 rounded-xl gap-5 flex-col bg-test3  text-white">
        {!showForm ? (
          <>
            <h2 className="text-6xl font-extrabold">Junte-se ao time!</h2>
            <p className="text-3xl max-w-[40rem] mb-5">
              Tem interesse em participar do Union? Confira abaixo os requisitos
              para participar
            </p>
            {requirements.map((req) => (
              <ul className="self-start pr-5 text-start" key={req.text}>
                <div className="flex gap-5">
                  <img src={req.icon} alt="" />
                  <li className="text-2xl">{req.text}</li>
                </div>
              </ul>
            ))}
            <div className="shadow-xl xl:flex justify-center p-1 rounded-md bg-test w-full xl:transition-all xl:ease-in xl:duration-200 z-10 space-x-6 mt-20">
              <button
                className="flex relative text-white h-20 text-3xl rounded-lg font-semibold transition-colors before:absolute before:left-0 before:top-0 before:-z-10 w-full items-center justify-center before:h-full before:w-full before:origin-top-left before:rounded-md before:scale-x-0 before:bg-gradient-to-r from-testeblend to-testeblend2 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
                onClick={testee}
              >
                Inscrever-se
              </button>
            </div>
          </>
        ) : (
          <>
            <nav className="flex items-center justify-between">
              <ul className="w-full flex gap-[13rem]">
                {/**form steps */}
                {steps.map((info, index) => (
                  <div className="w-full gap-5 text-white text-center flex flex-col items-center justify-between min-h-[150px]">
                    {currentStep > index ? (
                      <>
                        <li key={info.id} className="text-3xl flex-grow">
                          {info.name}
                        </li>
                        <span
                          className={`bg-test text-3xl relative w-20 h-20 flex items-center justify-center rounded-full ${
                            index === steps.length - 1
                              ? ""
                              : "after:w-[8rem] after:rounded-xl after:h-1 after:left-[145px] after:bg-test after:absolute"
                          }`}
                        >
                          {info.id}
                        </span>
                      </>
                    ) : currentStep === index ? (
                      <>
                        <li className="text-3xl flex-grow">{info.name}</li>
                        <span
                          className={`bg-test text-3xl relative w-20 h-20 flex items-center justify-center rounded-full ${
                            index === steps.length - 1
                              ? ""
                              : "after:w-[8rem] after:rounded-xl after:h-1 after:left-[145px] after:bg-test after:absolute"
                          }`}
                        >
                          {info.id}
                        </span>
                      </>
                    ) : (
                      <>
                        <li className="text-3xl flex-grow">{info.name}</li>
                        <span
                          className={`bg-gray-500 text-3xl relative w-20 h-20  flex items-center justify-center rounded-full ${
                            index === steps.length - 1
                              ? ""
                              : "after:w-[8rem] after:rounded-xl after:h-1 after:left-[145px] after:bg-test after:absolute"
                          }`}
                        >
                          {info.id}
                        </span>
                      </>
                    )}
                  </div>
                ))}
              </ul>
            </nav>
            <form className="w-full" onSubmit={handleSubmit(processForm)}>
              {currentStep === 0 && (
                <motion.div
                  initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full  pr-20 h-full mt-10"
                >
                  <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2">
                        <span className="text-red-500">*</span>
                        <label htmlFor="firstName">Nome completo</label>
                      </div>
                      <div>
                        <input
                          type="text"
                          id="firstName"
                          placeholder="Qual seu nome completo?"
                          {...register("firstName")}
                          className="bg-transparent border-2 w-full   border-white rounded-xl py-2 pl-3"
                        />
                        {errors.firstName?.message && (
                          <p className="text-2xl text-red-500">
                            {errors.firstName.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2">
                        <span className="text-red-500">*</span>
                        <label htmlFor="age">Idade</label>
                      </div>
                      <div>
                        <input
                          className="bg-transparent border-2 w-full   border-white rounded-xl py-2 pl-3"
                          id="age"
                          type="number"
                          {...register("age")}
                          placeholder="Qual sua idade?"
                        />
                        {errors.age?.message && (
                          <p className="text-xl mt-2 text-red-400">
                            {errors.age.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2">
                        <span className="text-red-500">*</span>
                        <label htmlFor="email">Email</label>
                      </div>
                      <div>
                        <input
                          className="bg-transparent border-2 w-full   border-white rounded-xl py-2 pl-3"
                          type="email"
                          id="email"
                          {...register("email")}
                          placeholder="Qual seu email de contato?"
                        />
                        {errors.email?.message && (
                          <p className="text-xl mt-2 text-red-400">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2">
                        <span className="text-red-500">*</span>
                        <label htmlFor="github">Github</label>
                      </div>
                      <div>
                        <input
                          className="bg-transparent border-2 w-full   border-white rounded-xl py-2 pl-3"
                          type="text"
                          id="github"
                          {...register("github")}
                          placeholder="Qual seu Github?"
                        />
                        {errors.github?.message && (
                          <p className="text-red-500 text-2xl">
                            {errors.github?.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2">
                        <span className="text-red-500">*</span>
                        <label htmlFor="linkedin">Linkedin</label>
                      </div>
                      <div>
                        <input
                          className="bg-transparent border-2 w-full   border-white rounded-xl py-2 pl-3"
                          type="text"
                          id="linkedin"
                          {...register("linkedin")}
                          placeholder="Qual seu Linkedin?"
                        />
                        {errors.linkedin?.message && (
                          <p className="text-red-500 text-2xl">
                            {errors.linkedin?.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-red-500">*</span>
                      <p className="text-2xl">
                        Onde você mais gosta de trabalhar?
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        className={`w-[2rem] h-[2rem] relative  ${
                          selectedOption === "frontend"
                            ? "bg-test"
                            : "bg-transparent"
                        } appearance-none rounded-full border-2 outline-none cursor-pointer before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:w-6 before:h-6 before:rounded-full before:opacity-100 focus:before:bg-test`}
                        type="radio"
                        id="frontend"
                        value="frontend"
                        {...register("work")}
                        checked={selectedOption === "frontend"}
                        onChange={handleRadioChange}
                      />
                      <label htmlFor="frontend">Frontend</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        className={`w-[2rem] h-[2rem] relative  ${
                          selectedOption === "backend"
                            ? "bg-test"
                            : "bg-transparent"
                        } appearance-none rounded-full border-2 outline-none cursor-pointer before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:w-6 before:h-6 before:rounded-full before:opacity-100 focus:before:bg-test`}
                        type="radio"
                        id="backend"
                        value="backend"
                        {...register("work")}
                        checked={selectedOption === "backend"}
                        onChange={handleRadioChange}
                      />
                      <label htmlFor="backend">Backend</label>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 1 && (
                <motion.div
                  initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full  pr-20 h-full mt-10"
                >
                  <div className="flex flex-col gap-3">
                    <div className="gap-5 flex flex-col">
                      <div className="flex gap-2">
                        <span className="text-red-500">*</span>
                        <p className="text-2xl">
                          Quanto tempo você estuda programação?
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <input
                          className={`w-[2rem] h-[2rem] relative  ${
                            selectedOption === "1 ano"
                              ? "bg-test"
                              : "bg-transparent"
                          } appearance-none rounded-full border-2 outline-none cursor-pointer before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:w-6 before:h-6 before:rounded-full before:opacity-100 focus:before:bg-test`}
                          type="radio"
                          id="option-one"
                          value="1 ano"
                          {...register("timeLearning")}
                          checked={selectedOption === "1 ano"}
                          onChange={handleRadioChange}
                        />
                        <label htmlFor="timeLearning">1 ano</label>
                      </div>

                      <div className="flex items-center gap-2">
                        <input
                          className={`w-[2rem] h-[2rem] relative  ${
                            selectedOption === "2 anos"
                              ? "bg-test"
                              : "bg-transparent"
                          } appearance-none rounded-full border-2 outline-none cursor-pointer before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:w-6 before:h-6 before:rounded-full before:opacity-100 focus:before:bg-test`}
                          type="radio"
                          id="option-two"
                          value="2 anos"
                          {...register("timeLearning")}
                          checked={selectedOption === "2 anos"}
                          onChange={handleRadioChange}
                        />
                        <label htmlFor="ano2">2 anos</label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          className={`w-[2rem] h-[2rem] relative  ${
                            selectedOption === "3 anos"
                              ? "bg-test"
                              : "bg-transparent"
                          } appearance-none rounded-full border-2 outline-none cursor-pointer before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:w-6 before:h-6 before:rounded-full before:opacity-100 focus:before:bg-test`}
                          type="radio"
                          id="option-three"
                          value="3 anos"
                          {...register("timeLearning")}
                          checked={selectedOption === "3 anos"}
                          onChange={handleRadioChange}
                        />
                        <label htmlFor="ano3">3 anos</label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          className={`w-[2rem] h-[2rem] relative  ${
                            selectedOption === "maisDe3"
                              ? "bg-test"
                              : "bg-transparent"
                          } appearance-none rounded-full border-2 outline-none cursor-pointer before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:w-6 before:h-6 before:rounded-full before:opacity-100 focus:before:bg-test`}
                          type="radio"
                          id="option-four"
                          value="maisDe3"
                          {...register("timeLearning")}
                          checked={selectedOption === "maisDe3"}
                          onChange={handleRadioChange}
                        />
                        <label htmlFor="maisDe3">Mais de 3 anos</label>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2  ">
                        <span className="text-red-500">*</span>
                        <label htmlFor="bestProject" className="text-3xl">
                          Link do repositório do seu melhor projeto{" "}
                        </label>
                      </div>
                      <div>
                        <input
                          type="text"
                          id="bestProject"
                          placeholder="Qual o link para o repositório do seu melhor projeto?"
                          {...register("bestProject")}
                          className="bg-transparent border-2 w-full  border-white rounded-xl py-2 pl-3"
                        />
                        {errors.bestProject?.message && (
                          <p className="text-2xl text-red-500">
                            {errors.bestProject.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2  ">
                        <span className="text-red-500">*</span>
                        <label htmlFor="about" className="text-3xl">
                          Fale sobre como foi construir esse projeto? Quais
                          foram os aprendizados e dificuldades que teve durante
                          o desenvolvimento?
                        </label>
                      </div>
                      <div>
                        <input
                          type="text"
                          id="about"
                          placeholder="Fale sobre o seu melhor projeto, nos conte como foi trabalhar nesse projeto?"
                          {...register("about")}
                          className="bg-transparent border-2 w-full pb-32 py-2 px-5 border-white rounded-xl align-text-top"
                        />
                        {errors.about?.message && (
                          <p className="text-2xl text-red-500">
                            {errors.about.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              {currentStep === 2 && (
                <motion.div
                  initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full  pr-20 h-full mt-10"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2  ">
                        <span className="text-red-500">*</span>
                        <label htmlFor="motivation" className="text-xl">
                          Porque você gosta de programar? Qual sua maior
                          motivação?
                        </label>
                      </div>
                      <div>
                        <input
                          type="text"
                          id="motivation"
                          placeholder="Qual sua maior motivação para fazer oque faz?"
                          {...register("motivation")}
                          className="bg-transparent border-2 w-full pb-32 py-2 px-5 border-white rounded-xl align-text-top"
                        />
                        {errors.motivation?.message && (
                          <p className="text-xl text-red-500">
                            {errors.motivation.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2  ">
                        <span className="text-red-500">*</span>
                        <label htmlFor="responsabilities" className="text-xl">
                          Como você faz para conseguir cumprir todos as suas
                          responsabilidades do dia a dia?
                        </label>
                      </div>
                      <div>
                        <input
                          type="text"
                          id="responsabilities"
                          placeholder="Qual sua maior motivação para fazer oque faz?"
                          {...register("responsabilities")}
                          className="bg-transparent border-2 w-full pb-32 py-2 px-5 border-white rounded-xl align-text-top"
                        />
                        {errors.responsabilities?.message && (
                          <p className="text-xl text-red-500">
                            {errors.responsabilities.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2  ">
                        <span className="text-red-500">*</span>
                        <label htmlFor="feedbacks" className="text-xl">
                          Quando você recebe um feedback, como é para você?
                        </label>
                      </div>
                      <div>
                        <input
                          type="text"
                          id="feedbacks"
                          placeholder="Nos conte como é para você receber feedback?"
                          {...register("feedbacks")}
                          className="bg-transparent border-2 w-full pb-32 py-2 px-5 border-white rounded-xl align-text-top"
                        />
                        {errors.feedbacks?.message && (
                          <p className="text-xl text-red-500">
                            {errors.feedbacks.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2  ">
                        <span className="text-red-500">*</span>
                        <label htmlFor="feedbacks" className="text-xl">
                          Como você ficou sabendo sobre o Union?
                        </label>
                      </div>
                      <div>
                        <input
                          type="text"
                          id="aboutUs"
                          placeholder="Como você ficou sabendo sobre o Union?"
                          {...register("aboutUs")}
                          className="bg-transparent border-2 w-full pb-32 py-2 px-5 border-white rounded-xl align-text-top"
                        />
                        {errors.aboutUs?.message && (
                          <p className="text-xl text-red-500">
                            {errors.aboutUs.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2  ">
                        <span className="text-red-500">*</span>
                        <label htmlFor="whyUs" className="text-xl">
                          Por que você quer fazer parte do Union?
                        </label>
                      </div>
                      <div>
                        <input
                          type="text"
                          id="whyUs"
                          placeholder="Por que você quer fazer parte do Union?"
                          {...register("whyUs")}
                          className="bg-transparent border-2 w-full pb-32 py-2 px-5 border-white rounded-xl align-text-top"
                        />
                        {errors.whyUs?.message && (
                          <p className="text-xl text-red-500">
                            {errors.whyUs.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2  ">
                        <span className="text-red-500">*</span>
                        <label htmlFor="group" className="text-xl w-[40rem]">
                          Por que você deveria fazer parte do pequeno grupo que
                          vai ter a oportunidade de participar do Union?
                        </label>
                      </div>
                      <div>
                        <input
                          type="text"
                          id="group"
                          placeholder="Por que você deveria fazer parte do pequeno grupo que vai ter a oportunidade de participar do Union?"
                          {...register("group")}
                          className="bg-transparent border-2 w-full pb-32 py-2 px-5 border-white rounded-xl align-text-top"
                        />
                        {errors.group?.message && (
                          <p className="text-xl text-red-500">
                            {errors.group.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </form>
            {currentStep === 3 && (
              <motion.div
                initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full  pr-20 h-full mt-10"
              >
                <div className="flex flex-col ">
                  <div className=" w-full h-[40rem] flex items-center flex-col justify-center">
                    <img
                      src="https://media.graphassets.com/05PPTFLdTGWFD091Jes1"
                      className="w-[5rem]"
                      alt=""
                    />
                    <h3 className="text-3xl font-bold">
                      Inscrição realizada com sucesso!
                    </h3>
                    <div className="w-full h-full bg-red-50">
                      <p className="text-center  ">
                        {formData && (
                          <div>
                            <p className="text-black text-2xl">{JSON.stringify(formData, null, 2)}</p>
                            <p>{formData.firstName}</p>
                          </div>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            <div className="mt-8 pt-5">
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prev}
                  disabled={currentStep === 0}
                  className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={next}
                  disabled={currentStep === steps.length - 1}
                  className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
}

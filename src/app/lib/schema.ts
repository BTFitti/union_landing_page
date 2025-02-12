import { z } from "zod";

export const FormDataSchema = z.object({
  firstName: z.string().min(3, "Digite seu nome"),
  age: z.number().min(18, "Você deve ter pelo menos 18 anos"),
  email: z.string().min(1, "Email inválido").email("Email inválido"),
  github: z.string().min(10, "Usuário inválido"),
  linkedin: z.string().min(1, "Usuário inválido"),
  workPreference: z.array(z.enum(["frontend", "backend"])), 

  timeLearning: z.array(
    z.enum(["1 ano", "2 anos", "3 anos", "mais de 3 anos"])
),

  bestProject: z.string().min(20, "Link inválido"),
  about: z.string().min(20, "Campo obrigatório!"),

  termsAccepted: z.string().min(1, {message: "Você deve aceitar os termos"}),
  motivation: z.string().min(20, "Campo obrigatório"),
  responsabilities: z.string().min(20, "Campo obrigatório"),
  feedbacks: z.string().min(20, "Campo obrigatório"),
  aboutUs: z.string().min(20, "Campo obrigatório"),
  whyUs: z.string().min(20, "Campo obrigatório"),
  group: z.string().min(20, "Campo obrigatório"),
});

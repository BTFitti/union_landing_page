import {  z } from 'zod'

export const FormDataSchema = z.object({
  firstName: z.string().min(1, 'Digite seu nome'),
  age: z.string().min(1, "Digite um valor válido"),
  email: z.string().min(1, 'Email inválido').email('Email inválido'),
  github: z.string().min(10, "Usuário inválido"),
  linkedin: z.string().min(1, "Usuário inválido"),
  work: z.boolean(),
 
  timeLearning: z.boolean(),
  bestProject: z.string().min(20,"Link inválido"),
  about: z.string().min(20, "Campo obrigatório!"),

  motivation: z.string().min(20, "Campo obrigatório"),
  responsabilities: z.string().min(20, "Campo obrigatório"),
  feedbacks: z.string().min(20, "Campo obrigatório"),
  aboutUs: z.string().min(20, "Campo obrigatório"),
  whyUs: z.string().min(20, "Campo obrigatório"),
  group: z.string().min(20, "Campo obrigatório"),
 
})

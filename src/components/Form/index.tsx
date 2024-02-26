'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { z } from 'zod'
import { sendMail } from '@/utils/resend/sendEmail'
import { toast } from 'sonner'

const createFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Campo obrigatório')
    .max(255, 'Nome excede 255 caracteres')
    .regex(/^^[a-zA-ZÀ-ÿ\s]+$/, 'Nome deve conter apenas letras'),
  label: z
    .string()
    .min(1, 'Campo obrigatório')
    .max(255, 'Selo/ nome artístico excede 255 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z
    .string()
    .regex(
      /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
      'Telefone inválido. Ex.: (xx) 9xxxx-xxxx',
    ),
  objective: z.string().min(1, 'Campo obrigatório'),
})

type formDataType = z.infer<typeof createFormSchema>

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<formDataType>({ resolver: zodResolver(createFormSchema) })
  const onSubmit: SubmitHandler<formDataType> = async (data) => {
    const result = await sendMail({
      user: data.name,
      email: data.email,
      label: data.label,
      phone: data.phone,
      objective: data.objective,
    })

    if (result.status === 'success') {
      toast.success('Email enviado com sucesso!')
      reset()
      return
    }

    toast.error('Algo deu errado com o envio de email.')
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      action=""
      className="w-full flex flex-col items-start justify-center gap-3"
    >
      <label
        htmlFor="name"
        className="flex flex-col items-start justify-start w-full gap-1 text-sm font-medium text-black"
      >
        Nome completo
        <input
          type="text"
          id="name"
          {...register('name')}
          placeholder="Digite seu nome"
          className="w-full text-sm font-medium bg-[#FFF] placeholder-light-gray p-2 border border-light-gray rounded-[4px] outline-none shadow-input"
        />
        {errors.name ? (
          <span className="text-xs text-red font-normal">
            {errors.name.message}
          </span>
        ) : null}
      </label>

      <label
        htmlFor="label"
        className="flex flex-col items-start justify-center w-full gap-1 text-sm font-medium text-black"
      >
        Selo / Nome artístico
        <input
          type="text"
          id="label"
          {...register('label')}
          placeholder="Digite o selo da sua label / nome artístico"
          className="w-full text-sm font-medium bg-[#FFF] placeholder-light-gray p-2 border border-light-gray rounded-[4px] outline-none shadow-input"
        />
        {errors.label ? (
          <span className="text-xs text-red font-normal">
            {errors.label.message}
          </span>
        ) : null}
      </label>

      <label
        htmlFor="email"
        className="flex flex-col items-start justify-center w-full gap-1 text-sm font-medium text-black"
      >
        E-mail
        <input
          type="email"
          id="email"
          {...register('email')}
          placeholder="Digite seu email principal"
          className="w-full text-sm font-medium bg-[#FFF] placeholder-light-gray p-2 border border-light-gray rounded-[4px] outline-none shadow-input"
        />
        {errors.email ? (
          <span className="text-xs text-red font-normal">
            {errors.email.message}
          </span>
        ) : null}
      </label>

      <label
        htmlFor="phone"
        className="flex flex-col items-start justify-center w-full gap-1 text-sm font-medium text-black"
      >
        <span>
          Telefone
          <span className="ml-1 text-gray text-xs font-medium">
            (Preferencialmente Whatsapp)
          </span>
        </span>
        <input
          type="text"
          id="phone"
          {...register('phone')}
          placeholder="Digite seu telefone"
          className="w-full text-sm font-medium bg-[#FFF] placeholder-light-gray p-2 border border-light-gray rounded-[4px] outline-none shadow-input"
        />
        {errors.phone ? (
          <span className="text-xs text-red font-normal">
            {errors.phone.message}
          </span>
        ) : null}
      </label>

      <label
        htmlFor="objective"
        className="flex flex-col items-start justify-center w-full gap-1 text-sm font-medium text-black"
      >
        Porque quer se tornar um artista
        <textarea
          id="objective"
          {...register('objective')}
          placeholder="Digite aqui seus principais objetivos que gostaria de alcançar como artista"
          className="w-full text-sm resize-none min-h-[100px] font-medium bg-[#FFF] placeholder-light-gray p-2 border border-light-gray rounded-[4px] outline-none shadow-input"
        />
        {errors.objective ? (
          <span className="text-xs text-red font-normal">
            {errors.objective.message}
          </span>
        ) : null}
      </label>

      <div className="flex w-full items-center justify-end gap-1 pt-4">
        <button
          onClick={() => reset}
          type="reset"
          className="text-red text-base font-semibold px-4 py-2 transition-all duration-200 hover:text-opacity-70"
        >
          Limpar
        </button>

        <button
          type="submit"
          className="text-white text-base font-semibold px-4 py-2 transition-all duration-200 bg-blue rounded-[4px] hover:bg-blue/90 shadow-thin"
        >
          Enviar
        </button>
      </div>
    </form>
  )
}
